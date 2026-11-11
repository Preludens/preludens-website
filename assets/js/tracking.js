/* De tien events van de landingspagina-experimenten.

   Alles gaat via dataLayer.push(); niets gaat rechtstreeks naar GA4. GTM
   bepaalt welke tag op welk event vuurt, zodat je een meting kunt bijstellen
   zonder de site opnieuw te deployen. Welke tags en triggers daarbij horen
   staat in _marketing/gtm-configuratie.md.

   | event                      | waar het vandaan komt                  |
   | page_view                  | GTM zelf, niet hier                    |
   | scroll_50, scroll_90       | scrolldiepte                           |
   | video_play, video_75       | <video> in panels/video.html           |
   | demo_start, demo_complete  | [data-demo-start] en postMessage       |
   | cta_click                  | elke .btn en .sp-hero-play             |
   | form_start                 | eerste veld dat focus krijgt           |
   | form_submit                | assets/js/form.js, na een geslaagde post |
   | mailto_click               | elke mailto:-link                      |
   | tel_click                  | elke tel:-link                         |

   `casus` hangt aan de pagina (front matter `casus:`) en gaat mee op elk event
   dat hem hoort te hebben. Op pagina's zonder casus blijft hij leeg in plaats
   van weg: een lege waarde is in GTM te zien, een ontbrekende sleutel niet. */
(function () {
  var site = window.preludensSite || {};
  var casus = site.casus || "";

  function push(event, params) {
    window.dataLayer = window.dataLayer || [];
    var payload = { event: event };
    for (var key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) payload[key] = params[key];
    }
    window.dataLayer.push(payload);
  }

  /* form.js duwt form_submit hierlangs, zodat alle events door één deur gaan. */
  window.preludensTrack = function (event, params) {
    push(event, params);
  };

  /* ---------- scrolldiepte ---------- */
  (function () {
    var marks = [
      { depth: 50, event: "scroll_50", done: false },
      { depth: 90, event: "scroll_90", done: false }
    ];
    var ticking = false;

    function check() {
      ticking = false;
      var doc = document.documentElement;
      var scrollable = doc.scrollHeight - window.innerHeight;
      /* Een pagina die korter is dan het venster kun je niet scrollen; die
         telt als volledig gezien, anders mist een korte landingspagina beide
         events terwijl de bezoeker alles zag. */
      var percent = scrollable <= 0 ? 100 : ((window.scrollY / scrollable) * 100);

      marks.forEach(function (mark) {
        if (mark.done || percent < mark.depth) return;
        mark.done = true;
        push(mark.event, { page_path: window.location.pathname, casus: casus });
      });

      if (marks[0].done && marks[1].done) {
        window.removeEventListener("scroll", onScroll);
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(check);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    check();
  })();

  /* ---------- video ---------- */
  (function () {
    var videos = document.querySelectorAll("video");
    if (!videos.length) return;

    videos.forEach(function (video) {
      /* GA4 kapt een parameterwaarde af op honderd tekens. data-video-title
         is de korte naam; aria-label is de beschrijving voor een schermlezer
         en is daar meestal te lang voor, dus die is hier het vangnet en niet
         de eerste keus. */
      var title = (
        video.getAttribute("data-video-title") ||
        video.getAttribute("aria-label") ||
        document.title
      ).slice(0, 100);
      var played = false;
      var passed75 = false;

      video.addEventListener("play", function () {
        if (played) return;
        played = true;
        push("video_play", { video_title: title, casus: casus });
      });

      video.addEventListener("timeupdate", function () {
        if (passed75 || !video.duration) return;
        if (video.currentTime / video.duration < 0.75) return;
        passed75 = true;
        push("video_75", { video_title: title, casus: casus });
      });
    });
  })();

  /* ---------- demo ----------

     demo_start vuurt op een element met [data-demo-start]: de knop of link die
     de demo opent. demo_complete kan de site zelf niet weten — dat signaal
     moet uit de demo komen. Draait die in een iframe of in Prepo, dan stuurt
     hij { preludens: "demo_complete", casus: "..." } met postMessage; dat
     vangen we hier op.

     Zolang de demo dat bericht niet stuurt, vuurt demo_complete niet. Dat is
     met opzet zichtbaar gelaten in plaats van vervangen door een benadering:
     een demo_complete die eigenlijk "iframe stond dertig seconden open"
     betekent, is erger dan geen demo_complete. */
  (function () {
    document.addEventListener("click", function (event) {
      var trigger = event.target.closest("[data-demo-start]");
      if (!trigger) return;
      push("demo_start", {
        casus: trigger.getAttribute("data-casus") || casus
      });
    });

    window.addEventListener("message", function (event) {
      var data = event.data;
      if (!data || typeof data !== "object") return;
      if (data.preludens !== "demo_start" && data.preludens !== "demo_complete") return;
      push(data.preludens, { casus: data.casus || casus });
    });
  })();

  /* ---------- knoppen ----------

     cta_position zegt waar op de pagina geklikt is. De panelen hebben een id;
     dat is een leesbaarder antwoord dan een nummer, en op de landingspagina's
     heet het paneel naar het blok waar het in staat (hero, bewijs, actie).
     Een element mag dat met data-cta-position overschrijven. */
  (function () {
    document.addEventListener("click", function (event) {
      var link = event.target.closest("a, button");
      if (!link) return;

      var href = link.getAttribute("href") || "";

      if (href.indexOf("mailto:") === 0) {
        push("mailto_click", {
          link_text: (link.textContent || "").trim(),
          casus: casus
        });
        return;
      }

      /* Een klik op een telefoonnummer is net zo goed een contactmoment als een
         klik op een e-mailadres. link_text is hier het nummer zoals het op de
         pagina staat; dat zegt welk nummer gekozen werd (algemeen of support). */
      if (href.indexOf("tel:") === 0) {
        push("tel_click", {
          link_text: (link.textContent || "").trim(),
          casus: casus
        });
        return;
      }

      var isCta =
        link.classList.contains("btn") ||
        link.classList.contains("sp-hero-play") ||
        link.hasAttribute("data-cta");
      if (!isCta) return;

      /* De knoppen van de banner zijn geen call to action. */
      if (link.closest("[data-consent]")) return;

      var position = link.getAttribute("data-cta-position");
      if (!position) {
        var section = link.closest("[id]");
        position = section ? section.id : "onbekend";
      }

      push("cta_click", {
        cta_label: (link.textContent || "").trim(),
        cta_position: position,
        casus: casus
      });
    });
  })();

  /* ---------- formulier: eerste veld ---------- */
  (function () {
    var forms = document.querySelectorAll("[data-lead-form]");
    if (!forms.length) return;

    forms.forEach(function (form) {
      var started = false;
      form.addEventListener(
        "focusin",
        function (event) {
          if (started) return;
          if (!event.target.matches("input, textarea, select")) return;
          /* Het honeypot-veld hoort niet mee te tellen: dat vult alleen een
             bot in, en die mag geen form_start in de cijfers zetten. */
          if (event.target.closest("[data-honeypot]")) return;
          started = true;
          push("form_start", { casus: form.getAttribute("data-casus") || casus });
        },
        true
      );
    });
  })();
})();
