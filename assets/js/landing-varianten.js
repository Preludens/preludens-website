/* Gedrag voor de drie landingspagina-varianten van casus 1
   (oplossingen/varianten/a, b en c). Alleen geladen op die drie pagina's.

   Drie onderdelen:
   - het speelbare fragment (_includes/varianten/fragment.html)
   - de herkenningsvraag met één klik ([data-lv-recognize])
   - de padkeuze van variant C ([data-lv-paths]) en de inschatting erin

   Alles gaat via window.preludensTrack uit assets/js/tracking.js, zodat de
   events door dezelfde deur gaan als de rest. Nieuwe events, voorgesteld in
   _marketing/landingspagina-varianten.md:

   | event               | parameters                                  |
   | demo_start          | casus, demo_type "fragment", demo_position  |
   | demo_complete       | casus, demo_type "fragment", demo_position  |
   | recognition_select  | casus, recognition ("ja", "deels", "nee")   |
   | path_select         | casus, path_choice, path_source             |
   | estimate_select     | casus, estimate                             |
   | faq_open            | casus, faq_question, faq_position           |

   Daarnaast zet dit bestand landing_variant in de dataLayer (zonder event),
   zodat een GTM-variabele hem op elk volgend event kan meegeven. */
(function () {
  var site = window.preludensSite || {};
  var casus = site.casus || document.body.getAttribute("data-casus") || "";
  var variantEl = document.querySelector("[data-landing-variant]");
  var variant = variantEl ? variantEl.getAttribute("data-landing-variant") : "";

  function track(event, params) {
    params = params || {};
    params.casus = casus;
    if (typeof window.preludensTrack === "function") {
      window.preludensTrack(event, params);
    } else {
      window.dataLayer = window.dataLayer || [];
      params.event = event;
      window.dataLayer.push(params);
    }
  }

  window.dataLayer = window.dataLayer || [];
  if (variant) window.dataLayer.push({ landing_variant: variant });

  function focusHeading(scope) {
    var heading = scope.querySelector("[tabindex='-1']");
    if (heading) heading.focus({ preventScroll: false });
  }

  /* ---------- het fragment ---------- */
  document.querySelectorAll("[data-lv-fragment]").forEach(function (root) {
    var position = root.getAttribute("data-position") || "fragment";
    var started = false;
    var firstTry = {};

    root.classList.add("is-ready");

    function step(name) {
      return root.querySelector('[data-step="' + name + '"]');
    }

    function show(name) {
      root.querySelectorAll("[data-step]").forEach(function (el) {
        el.hidden = el.getAttribute("data-step") !== name;
      });
      focusHeading(step(name));
    }

    function resetStep(el) {
      el.querySelectorAll("[data-choice]").forEach(function (button) {
        button.disabled = false;
        button.removeAttribute("aria-pressed");
        button.removeAttribute("data-state");
      });
      el.querySelectorAll("[data-feedback-for]").forEach(function (p) { p.hidden = true; });
      var verdict = el.querySelector("[data-verdict]");
      if (verdict) verdict.textContent = "";
      var next = el.querySelector("[data-next]");
      if (next) next.hidden = true;
      el.classList.remove("is-answered");
    }

    root.querySelectorAll("[data-step]").forEach(function (el) {
      var name = el.getAttribute("data-step");

      el.querySelectorAll("[data-choice]").forEach(function (button) {
        button.addEventListener("click", function () {
          if (!started) {
            started = true;
            track("demo_start", { demo_type: "fragment", demo_position: position });
          }

          var correct = button.hasAttribute("data-correct");
          if (!(name in firstTry)) firstTry[name] = correct;

          el.querySelectorAll("[data-choice]").forEach(function (other) {
            other.disabled = true;
            other.setAttribute("aria-pressed", other === button ? "true" : "false");
            if (other.hasAttribute("data-correct")) other.setAttribute("data-state", "correct");
            else if (other === button) other.setAttribute("data-state", "wrong");
          });

          var choice = button.getAttribute("data-choice");
          el.querySelectorAll("[data-feedback-for]").forEach(function (p) {
            p.hidden = p.getAttribute("data-feedback-for") !== choice;
          });
          el.querySelector("[data-verdict]").textContent = correct ? "Goed gekozen." : "Niet helemaal.";
          el.classList.add("is-answered");

          /* De keuzeknoppen gaan op disabled, dus de focus moet ergens heen:
             naar de volgende stap. De uitleg ervoor leest de live-regio voor. */
          var next = el.querySelector("[data-next]");
          if (next) {
            next.hidden = false;
            next.focus({ preventScroll: true });
          }
        });
      });

      var next = el.querySelector("[data-next]");
      if (next) {
        next.addEventListener("click", function () {
          if (name === "1") {
            show("2");
            return;
          }
          /* Het overzicht: de voorbeeldgroep plus de bezoeker als twaalfde. */
          root.querySelectorAll("[data-score]").forEach(function (span) {
            var key = span.getAttribute("data-score");
            var base = parseInt(span.getAttribute("data-base"), 10) || 0;
            span.textContent = String(base + (firstTry[key] ? 1 : 0));
          });
          show("overzicht");
          track("demo_complete", { demo_type: "fragment", demo_position: position });
        });
      }
    });

    var restart = root.querySelector("[data-restart]");
    if (restart) {
      restart.addEventListener("click", function () {
        firstTry = {};
        root.querySelectorAll("[data-step]").forEach(resetStep);
        show("1");
      });
    }
  });

  /* ---------- herkenningsvraag ---------- */
  document.querySelectorAll("[data-lv-recognize]").forEach(function (root) {
    var reply = root.querySelector("[data-recognize-reply]");
    root.querySelectorAll("[data-recognize]").forEach(function (button) {
      button.addEventListener("click", function () {
        var answer = button.getAttribute("data-recognize");
        root.querySelectorAll("[data-recognize]").forEach(function (other) {
          other.setAttribute("aria-pressed", other === button ? "true" : "false");
        });
        root.querySelectorAll("[data-reply-for]").forEach(function (p) {
          p.hidden = p.getAttribute("data-reply-for") !== answer;
        });
        if (reply) reply.hidden = false;
        track("recognition_select", { recognition: answer });
      });
    });
  });

  /* ---------- padkeuze (variant C) ----------

     Zonder JavaScript staan alle blokken onder elkaar en springen de keuzes
     naar hun anker. Met JavaScript gaan de blokken dicht tot er gekozen is.
     Een link met ?pad=koper (of instructeur, beide) kiest het pad vooraf: zo
     kan het bericht aan een beslisser meteen op het juiste pad landen. */
  document.querySelectorAll("[data-lv-paths]").forEach(function (root) {
    var blocks = document.querySelectorAll("[data-path-block]");
    var options = root.querySelectorAll("[data-path]");
    var switcher = document.querySelector("[data-path-switch]");

    document.body.classList.add("lv-paths-ready");
    blocks.forEach(function (block) { block.hidden = true; });

    options.forEach(function (option) {
      option.setAttribute("role", "button");
      option.setAttribute("aria-pressed", "false");
    });

    function choose(path, source, scroll) {
      options.forEach(function (option) {
        option.setAttribute("aria-pressed", option.getAttribute("data-path") === path ? "true" : "false");
      });
      var first = null;
      blocks.forEach(function (block) {
        var paths = (block.getAttribute("data-path-block") || "").split(/\s+/);
        var visible = paths.indexOf(path) !== -1;
        block.hidden = !visible;
        if (visible && !first) first = block;
      });
      document.body.setAttribute("data-path", path);
      if (switcher) switcher.hidden = false;
      track("path_select", { path_choice: path, path_source: source });

      if (scroll && first) {
        first.scrollIntoView({ behavior: "smooth", block: "start" });
        focusHeading(first);
      }
    }

    options.forEach(function (option) {
      option.addEventListener("click", function (event) {
        event.preventDefault();
        choose(option.getAttribute("data-path"), "klik", true);
      });
      option.addEventListener("keydown", function (event) {
        if (event.key === " ") {
          event.preventDefault();
          option.click();
        }
      });
    });

    if (switcher) {
      switcher.addEventListener("click", function () {
        blocks.forEach(function (block) { block.hidden = true; });
        switcher.hidden = true;
        document.body.removeAttribute("data-path");
        options.forEach(function (option) { option.setAttribute("aria-pressed", "false"); });
        root.scrollIntoView({ behavior: "smooth", block: "start" });
        if (options[0]) options[0].focus({ preventScroll: true });
      });
    }

    var preset = new URLSearchParams(window.location.search).get("pad");
    if (preset && root.querySelector('[data-path="' + preset + '"]')) {
      choose(preset, "url", false);
    }
  });

  /* ---------- bezwaren: welke vraag gaat open ----------
     Variant B zet in op bezwaren; dan wil je weten welke gelezen worden.
     Eén keer per vraag per bezoek, en niet voor een vraag die al open staat
     bij het laden. GA4 kapt parameterwaarden af op honderd tekens. */
  document.querySelectorAll("[data-landing-variant] .sp-faq__item").forEach(function (item) {
    var sent = item.open;
    item.addEventListener("toggle", function () {
      if (!item.open || sent) return;
      sent = true;
      var summary = item.querySelector("summary");
      var question = summary ? summary.textContent.trim().slice(0, 100) : "";
      var section = item.closest("[id]");
      track("faq_open", { faq_question: question, faq_position: section ? section.id : "" });
    });
  });

  /* ---------- inschatting (variant C, pad instructeur) ---------- */
  document.querySelectorAll("[data-lv-estimate]").forEach(function (root) {
    root.querySelectorAll("[data-estimate]").forEach(function (button) {
      button.addEventListener("click", function () {
        var value = button.getAttribute("data-estimate");
        root.querySelectorAll("[data-estimate]").forEach(function (other) {
          other.setAttribute("aria-pressed", other === button ? "true" : "false");
        });
        root.querySelectorAll("[data-estimate-for]").forEach(function (p) {
          p.hidden = p.getAttribute("data-estimate-for") !== value;
        });
        track("estimate_select", { estimate: value });
      });
    });
  });
})();
