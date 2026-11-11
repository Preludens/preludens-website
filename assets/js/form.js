/* Het leadformulier van de landingspagina's.

   Post naar de HubSpot Forms API:
     POST https://api-eu1.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}

   De host is api-eu1, de regionale host van deze portal: de insluitcode van
   het formulier zegt data-region="eu1", en de trackingcode in consent.js
   laadt van js-eu1. De wereldwijde host api.hsforms.com werkt ook — beide
   vonden het formulier bij een test — maar dan loopt de inzending eerst langs
   een andere regio dan waar hij hoort.

   Dat endpoint is publiek en vraagt geen token in de browser, dus er is geen
   Worker en geen server nodig. Mee gaat `context.hutk` — het hubspotutk-cookie
   dat de HubSpot-trackingcode zet — plus pageUri en pageName. Daarmee koppelt
   HubSpot de inzending aan de sessie en dus aan de bron. Staat dat cookie er
   niet (bezoeker weigerde statistieken), dan komt de lead gewoon binnen, maar
   zonder bron; dat is het verschil dat die keuze maakt.

   form_submit gaat pas na een geslaagde post naar de dataLayer, niet op de
   klik. Een klik op verzenden is geen lead. */
(function () {
  var forms = document.querySelectorAll("[data-lead-form]");
  if (!forms.length) return;

  var config = window.preludensSite || {};
  var ENDPOINT = "https://api-eu1.hsforms.com/submissions/v3/integration/submit/";
  /* Een mens doet er langer dan dit over om een bericht te typen. */
  var MIN_SECONDS = 3;
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /* Ruim genoeg voor +31 6 1234 5678, 015-202 404 7 en (015) 2024047, streng
     genoeg om "nvt" of een postcode tegen te houden: alleen cijfers, spaties,
     streepjes, punten, haakjes en een plus vooraan, en minstens acht cijfers. */
  function phoneOk(value) {
    if (!/^\+?[\d\s().-]+$/.test(value)) return false;
    return value.replace(/\D/g, "").length >= 8;
  }

  function hutk() {
    var match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : "";
  }

  function splitName(value) {
    var parts = value.trim().split(/\s+/);
    var first = parts.shift() || "";
    /* HubSpot wil firstname en lastname apart. Eén woord ingevuld? Dan is dat
       de voornaam en blijft de achternaam leeg, in plaats van dat we iemands
       voornaam als achternaam wegschrijven. */
    return { firstname: first, lastname: parts.join(" ") };
  }

  function track(event, params) {
    if (typeof window.preludensTrack === "function") {
      window.preludensTrack(event, params);
      return;
    }
    window.dataLayer = window.dataLayer || [];
    var payload = { event: event };
    for (var key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) payload[key] = params[key];
    }
    window.dataLayer.push(payload);
  }

  forms.forEach(function (form) {
    var wrap = form.closest("[data-lead-form-wrap]");
    var errorBox = form.querySelector("[data-form-error]");
    var done = wrap ? wrap.querySelector("[data-form-done]") : null;
    var submit = form.querySelector('[type="submit"]');
    var submitLabel = submit ? submit.textContent : "";
    var trap = form.querySelector('[data-honeypot] input');
    var casus = form.getAttribute("data-casus") || "";
    var defaultError = form.getAttribute("data-error-send") || "";
    var reachError = form.getAttribute("data-error-reach") || "";
    var sendingLabel = form.getAttribute("data-sending") || submitLabel;
    var openedAt = Date.now();
    var sending = false;

    function showError(message) {
      if (!errorBox) return;
      errorBox.textContent = message;
      errorBox.hidden = false;
    }

    function clearError() {
      if (!errorBox) return;
      errorBox.hidden = true;
      errorBox.textContent = "";
    }

    function field(name) {
      return form.querySelector('[name="' + name + '"]');
    }

    function problem(input, message) {
      return { input: input, message: message || input.getAttribute("data-error") || "" };
    }

    /* Eerste fout wint: één melding met de eerste vraag die open staat, en de
       cursor erheen. Een rij rode velden onder elkaar helpt niemand verder.

       Volgorde zoals op het scherm: eerst hoe we iemand bereiken, dan het
       bericht. Van e-mail en telefoon moet er één staan; wat wel is ingevuld,
       moet kloppen, ook als het andere veld al goed is. Een tikfout in een
       telefoonnummer dat we niet nodig hadden, is nog steeds een nummer dat we
       straks proberen te bellen. */
    function firstProblem() {
      var reach = form.querySelectorAll("[data-reach]");
      var filled = 0;
      for (var i = 0; i < reach.length; i++) {
        var value = reach[i].value.trim();
        if (value === "") continue;
        filled++;
        if (reach[i].type === "email" && !EMAIL.test(value)) return problem(reach[i]);
        if (reach[i].type === "tel" && !phoneOk(value)) return problem(reach[i]);
      }
      if (reach.length && filled === 0) return problem(reach[0], reachError);

      var required = form.querySelectorAll("[required]");
      for (var j = 0; j < required.length; j++) {
        if (required[j].value.trim() === "") return problem(required[j]);
      }
      return null;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (sending) return;

      var issue = firstProblem();
      if (issue) {
        showError(issue.message);
        issue.input.focus();
        return;
      }

      /* Spam, zonder captcha: een gevuld honeypot-veld of een inzending binnen
         drie seconden. Beide krijgen het bevestigingsscherm te zien en worden
         niet verstuurd — een bot die een foutmelding krijgt, probeert opnieuw.
         Er gaat ook geen form_submit naar de dataLayer, dus de cijfers blijven
         schoon. */
      var tooFast = (Date.now() - openedAt) / 1000 < MIN_SECONDS;
      if ((trap && trap.value !== "") || tooFast) {
        finish(false);
        return;
      }

      if (!config.hubspotPortalId || !config.hubspotFormGuid) {
        showError(defaultError);
        /* Zichtbaar in de console, zodat het bij testen niet op de velden
           wordt gegokt: hier mist configuratie, niet een invoer. */
        if (window.console && console.warn) {
          console.warn(
            "Preludens: preludens.hubspot.portal_id of form_guid ontbreekt in _config.yml; het formulier verstuurt niet."
          );
        }
        return;
      }

      send();
    });

    function send() {
      sending = true;
      clearError();
      if (submit) {
        submit.disabled = true;
        submit.textContent = sendingLabel;
      }

      function value(name) {
        var input = field(name);
        return input ? input.value.trim() : "";
      }

      var name = splitName(value("name"));
      var token = hutk();
      /* Lege velden gaan niet mee: dan kan een leeg veld nooit iets wissen dat
         al bij een contactpersoon in HubSpot staat. casus gaat altijd mee. */
      var fields = [
        { name: "firstname", value: name.firstname },
        { name: "lastname", value: name.lastname },
        { name: "email", value: value("email") },
        { name: "phone", value: value("phone") },
        { name: "company", value: value("company") },
        { name: "message", value: value("message") }
      ].filter(function (item) {
        return item.value !== "";
      });
      fields.push({ name: "casus", value: casus });

      var payload = {
        fields: fields,
        context: {
          pageUri: window.location.href,
          pageName: document.title
        }
      };
      if (token) payload.context.hutk = token;

      fetch(ENDPOINT + config.hubspotPortalId + "/" + config.hubspotFormGuid, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (response) {
          if (!response.ok) throw new Error("HubSpot antwoordde met " + response.status);
          finish(true);
        })
        .catch(function (error) {
          sending = false;
          if (submit) {
            submit.disabled = false;
            submit.textContent = submitLabel;
          }
          /* De ingevulde tekst blijft staan. Iemand die net vier velden heeft
             ingevuld, gaat dat niet nog een keer doen. */
          showError(defaultError);
          if (window.console && console.warn) console.warn("Preludens:", error);
        });
    }

    function finish(real) {
      sending = false;
      if (!done) return;
      form.hidden = true;
      done.hidden = false;
      /* De focus naar de bevestiging, anders staat een schermlezer nog bij een
         formulier dat er niet meer is. */
      done.setAttribute("tabindex", "-1");
      done.focus();
      if (real) track("form_submit", { casus: casus });
    }
  });
})();
