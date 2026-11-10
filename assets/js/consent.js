/* Consentbanner voor Preludens.

   De standaardstand staat al in de dataLayer voordat dit bestand laadt; dat
   doet _includes/consent-default.html, inline in de <head>. Hier gebeurt
   alleen het zichtbare deel: de banner tonen, de keuze opslaan en de tags
   bijwerken.

   Drie categorieën, niet meer: noodzakelijk (altijd aan), statistieken en
   marketing. De keuze gaat in een cookie dat zes maanden meegaat en is
   herroepbaar via de link onderaan elke pagina.

   Zonder JavaScript gebeurt hier niets — en laadt er ook geen enkele tag die
   toestemming nodig heeft. Dat is de veilige kant. */
(function () {
  var banner = document.querySelector("[data-consent]");
  var revokers = document.querySelectorAll("[data-consent-revoke]");
  if (!banner && !revokers.length) return;

  var MONTHS = 6;
  var VERSION = 1;
  var COOKIE = "preludens_consent";

  var options = banner ? banner.querySelector("[data-consent-options]") : null;
  var saveButton = banner ? banner.querySelector("[data-consent-save]") : null;
  var customiseButton = banner ? banner.querySelector("[data-consent-customise]") : null;
  var acceptButton = banner ? banner.querySelector("[data-consent-accept]") : null;
  var rejectButton = banner ? banner.querySelector("[data-consent-reject]") : null;
  var checkboxes = banner ? banner.querySelectorAll("[data-consent-category]") : [];

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  function readState() {
    var current = window.preludensConsent && window.preludensConsent.state;
    return current || null;
  }

  function writeCookie(state) {
    /* Zes maanden, gerekend in dagen: 182 is een half jaar binnen een dag. */
    var expires = new Date();
    expires.setTime(expires.getTime() + 182 * 24 * 60 * 60 * 1000);
    var secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie =
      COOKIE +
      "=" +
      encodeURIComponent(JSON.stringify(state)) +
      "; expires=" +
      expires.toUTCString() +
      "; path=/; SameSite=Lax" +
      secure;
  }

  function apply(state, isNewChoice) {
    var statistics = state.statistics ? "granted" : "denied";
    var marketing = state.marketing ? "granted" : "denied";

    gtag("consent", "update", {
      ad_storage: marketing,
      ad_user_data: marketing,
      ad_personalization: marketing,
      analytics_storage: statistics,
      personalization_storage: marketing
    });
    gtag("set", "ads_data_redaction", !state.marketing);

    if (window.preludensConsent) window.preludensConsent.state = state;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: isNewChoice ? "consent_update" : "consent_state",
      consent_statistics: statistics,
      consent_marketing: marketing
    });

    loadHubspot(state);
  }

  /* De HubSpot-trackingcode zet __hstc en hubspotutk en valt dus onder
     statistieken. Hij moet er staan vóór iemand het formulier bereikt: zonder
     hubspotutk komt de inzending zonder bron binnen, en dan weet je bij een
     lead niet meer welke pagina hem bracht.

     Staat er geen portal-ID in _config.yml, dan laadt hij niet. */
  var hubspotLoaded = false;
  function loadHubspot(state) {
    var config = window.preludensSite || {};
    if (hubspotLoaded) return;
    if (!config.hubspotTracking) return;
    if (!config.hubspotPortalId) return;
    if (!state.statistics) return;

    hubspotLoaded = true;
    var script = document.createElement("script");
    script.id = "hs-script-loader";
    script.async = true;
    script.defer = true;
    script.src = "https://js-eu1.hs-scripts.com/" + config.hubspotPortalId + ".js";
    document.body.appendChild(script);
  }

  function choose(state) {
    var full = { v: VERSION, statistics: !!state.statistics, marketing: !!state.marketing };
    writeCookie(full);
    apply(full, true);
    hide();
  }

  function show() {
    if (!banner) return;
    var state = readState();
    checkboxes.forEach(function (box) {
      var key = box.getAttribute("data-consent-category");
      box.checked = !!(state && state[key]);
    });
    banner.hidden = false;
    document.body.classList.add("has-consent-banner");
  }

  function hide() {
    if (!banner) return;
    banner.hidden = true;
    document.body.classList.remove("has-consent-banner");
    collapse();
  }

  function collapse() {
    if (!options) return;
    options.hidden = true;
    if (saveButton) saveButton.hidden = true;
    if (acceptButton) acceptButton.hidden = false;
    if (rejectButton) rejectButton.hidden = false;
    if (customiseButton) customiseButton.setAttribute("aria-expanded", "false");
  }

  function expand() {
    if (!options) return;
    options.hidden = false;
    if (saveButton) saveButton.hidden = false;
    if (customiseButton) customiseButton.setAttribute("aria-expanded", "true");
    var first = banner.querySelector("[data-consent-category]");
    if (first) first.focus();
  }

  if (acceptButton) {
    acceptButton.addEventListener("click", function () {
      choose({ statistics: true, marketing: true });
    });
  }

  if (rejectButton) {
    rejectButton.addEventListener("click", function () {
      choose({ statistics: false, marketing: false });
    });
  }

  if (saveButton) {
    saveButton.addEventListener("click", function () {
      var picked = { statistics: false, marketing: false };
      checkboxes.forEach(function (box) {
        picked[box.getAttribute("data-consent-category")] = box.checked;
      });
      choose(picked);
    });
  }

  if (customiseButton) {
    customiseButton.addEventListener("click", function () {
      if (options && options.hidden) expand();
      else collapse();
    });
  }

  revokers.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      show();
      expand();
    });
  });

  var saved = readState();
  if (saved) loadHubspot(saved);
  else show();
})();
