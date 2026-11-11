/* Gedrag voor de landingspagina-varianten van casus 1
   (oplossingen/varianten/a tot en met d). Alleen geladen op die pagina's.

   Onderdelen:
   - de CO-melder-interactie (_includes/varianten/co-melder.html)
   - vragen met directe feedback ([data-lv-question])
   - de rolkeuze die naar de juiste sectie scrolt ([data-lv-choose], variant D)
   - de padkeuze die blokken opent en sluit ([data-lv-paths], variant C)
   - welke bezwaren worden geopend (faq_open)

   Elke knop laat een spoor na in de dataLayer, via window.preludensTrack uit
   assets/js/tracking.js. Nieuwe events, toegelicht in
   _marketing/landingspagina-varianten.md:

   | event            | parameters                                              |
   | demo_start       | casus, demo_type "co-melder", demo_position             |
   | demo_complete    | casus, demo_type, demo_position, demo_result,           |
   |                  | demo_value (cm onder het plafond), demo_attempt         |
   | question_answer  | casus, question_id, answer                              |
   | path_select      | casus, path_choice, path_source ("klik" of "url")       |
   | faq_open         | casus, faq_question, faq_position                       |
   | booking_click    | casus, booking_service, cta_position                    |
   | booking_complete | casus, booking_service (alleen bij Calendly in de pagina)|

   Daarnaast zet dit bestand landing_variant in de dataLayer (zonder event),
   zodat een GTM-variabele hem op elk volgend event kan meegeven. */
(function () {
  var site = window.preludensSite || {};
  var casus = site.casus || document.body.getAttribute("data-casus") || "";
  var variantEl = document.querySelector("[data-landing-variant]");
  var variant = variantEl ? variantEl.getAttribute("data-landing-variant") : "";
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    var heading = scope && scope.querySelector("[tabindex='-1']");
    if (heading) heading.focus({ preventScroll: true });
  }

  function scrollToEl(el) {
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  /* ---------- de CO-melder ----------

     De melder hangt op een vaste plek aan de rechtermuur en gaat alleen
     omhoog en omlaag. De hoogte in het beeld wordt een afstand tot het
     plafond: bovenrand 40 cm, onderrand 260 cm. Het hoofd van de slaper ligt
     dan rond 195 cm, en dat is waar het spel de melder goed rekent. */
  var MIN_CM = 40;
  var MAX_CM = 260;
  var GROUP = [40, 45, 50, 55, 60, 140, 185, 195, 200, 205, 210];

  function verdictFor(cm) {
    if (cm < 100) return "te-hoog";
    if (cm < 170) return "nog-te-hoog";
    if (cm <= 230) return "goed";
    return "te-laag";
  }

  var TEXT = {
    "te-hoog": [
      "Te hoog.",
      "Zo hang je hem in de ruimte met de ketel: aan het plafond, want warme lucht met CO stijgt. In een slaapkamer niet. Daar hoort hij op ademhalingshoogte, dus op slaaphoogte."
    ],
    "nog-te-hoog": [
      "Nog te hoog.",
      "In ruimtes waar mensen lang verblijven, hangt de melder op ademhalingshoogte. In een slaapkamer is dat slaaphoogte: de hoogte van het hoofd op het kussen."
    ],
    "goed": [
      "Goed: op slaaphoogte.",
      "Daar meet de melder wat iemand in bed inademt. In de ruimte met de ketel had je hem juist aan het plafond gehangen. Dat verschil is waar het in de groep misgaat."
    ],
    "te-laag": [
      "Te laag.",
      "Slaaphoogte is de hoogte van het hoofd op het kussen. Dit zit eronder."
    ]
  };

  document.querySelectorAll("[data-lv-melder]").forEach(function (root) {
    var stage = root.querySelector("[data-stage]");
    var device = root.querySelector("[data-device]");
    var readout = root.querySelector("[data-readout]");
    var ghosts = root.querySelector("[data-ghosts]");
    var hang = root.querySelector("[data-hang]");
    var again = root.querySelector("[data-again]");
    var verdictEl = root.querySelector("[data-verdict]");
    var explainEl = root.querySelector("[data-explain]");
    var group = root.querySelector("[data-group]");
    var countEl = root.querySelector("[data-group-count]");
    var position = root.getAttribute("data-position") || "probeer";

    var cm = 120;
    var started = false;
    var locked = false;
    var attempt = 0;
    var dragging = false;

    root.classList.add("is-ready");

    function pct(value) {
      return (value - MIN_CM) / (MAX_CM - MIN_CM);
    }

    /* Van boven- tot onderrand blijft er 4% marge, zodat een melder of stip
       op 40 of 260 cm niet half buiten beeld valt. */
    function toTop(value) {
      return 4 + pct(value) * 92;
    }

    function set(value) {
      cm = Math.max(MIN_CM, Math.min(MAX_CM, Math.round(value / 5) * 5));
      device.style.top = toTop(cm) + "%";
      readout.textContent = cm + " cm";
      device.setAttribute("aria-valuenow", String(cm));
      device.setAttribute("aria-valuetext", cm + " centimeter onder het plafond");
    }

    function start() {
      if (started) return;
      started = true;
      track("demo_start", { demo_type: "co-melder", demo_position: position });
    }

    function fromPointer(event) {
      var rect = stage.getBoundingClientRect();
      var y = ((event.clientY - rect.top) / rect.height - 0.04) / 0.92;
      set(MIN_CM + Math.max(0, Math.min(1, y)) * (MAX_CM - MIN_CM));
    }

    device.addEventListener("pointerdown", function (event) {
      if (locked) return;
      dragging = true;
      start();
      device.setPointerCapture(event.pointerId);
      root.classList.add("is-dragging");
      event.preventDefault();
    });

    device.addEventListener("pointermove", function (event) {
      if (!dragging) return;
      fromPointer(event);
    });

    function endDrag() {
      dragging = false;
      root.classList.remove("is-dragging");
    }
    device.addEventListener("pointerup", endDrag);
    device.addEventListener("pointercancel", endDrag);

    /* Tikken op de muur zet de melder op die hoogte. Dat is een klik, geen
       sleepbeweging, zodat de pagina op een telefoon gewoon blijft scrollen. */
    stage.addEventListener("click", function (event) {
      if (locked || event.target === device || device.contains(event.target)) return;
      start();
      fromPointer(event);
    });

    device.addEventListener("keydown", function (event) {
      if (locked) return;
      var step = { ArrowUp: -10, ArrowDown: 10, PageUp: -50, PageDown: 50 }[event.key];
      if (event.key === "Home") step = MIN_CM - cm;
      if (event.key === "End") step = MAX_CM - cm;
      if (event.key === "Enter") {
        event.preventDefault();
        hang.click();
        return;
      }
      if (step === undefined) return;
      event.preventDefault();
      start();
      set(cm + step);
    });

    function drawGroup() {
      ghosts.innerHTML = "";
      GROUP.concat([cm]).forEach(function (value, index) {
        var dot = document.createElement("span");
        var mine = index === GROUP.length;
        dot.className = "lv-melder__dot" + (mine ? " lv-melder__dot--you" : "");
        dot.style.top = toTop(value) + "%";
        /* Een beetje links-rechts uit elkaar, zodat gelijke hoogtes niet op
           één stip vallen. */
        dot.style.left = (mine ? 75 : 8 + (index % 4) * 17) + "%";
        ghosts.appendChild(dot);
      });
      var tooHigh = GROUP.filter(function (value) { return value < 170; }).length + (cm < 170 ? 1 : 0);
      countEl.textContent = String(tooHigh);
    }

    hang.addEventListener("click", function () {
      if (locked) return;
      start();
      locked = true;
      attempt += 1;
      var result = verdictFor(cm);
      root.setAttribute("data-result-state", result);
      root.classList.add("is-hung");
      device.setAttribute("aria-disabled", "true");
      verdictEl.textContent = TEXT[result][0];
      explainEl.textContent = TEXT[result][1];
      drawGroup();
      group.hidden = false;
      track("demo_complete", {
        demo_type: "co-melder",
        demo_position: position,
        demo_result: result,
        demo_value: cm,
        demo_attempt: attempt
      });
      focusHeading(group);
    });

    again.addEventListener("click", function () {
      locked = false;
      root.classList.remove("is-hung");
      root.removeAttribute("data-result-state");
      device.removeAttribute("aria-disabled");
      verdictEl.textContent = "";
      explainEl.textContent = "";
      ghosts.innerHTML = "";
      group.hidden = true;
      set(120);
      device.focus({ preventScroll: true });
    });

    set(cm);
  });

  /* ---------- vragen met directe feedback ----------

     Elke vraag heeft een data-question-id; elke knop een data-answer. Het
     antwoord krijgt meteen een reactie ([data-reply-for]) en gaat als
     question_answer de dataLayer in. Een tweede klik telt ook: dan zie je
     dat iemand van gedachten veranderde. */
  document.querySelectorAll("[data-lv-question]").forEach(function (root) {
    var id = root.getAttribute("data-question-id") || "vraag";
    root.querySelectorAll("[data-answer]").forEach(function (button) {
      button.addEventListener("click", function () {
        var answer = button.getAttribute("data-answer");
        root.querySelectorAll("[data-answer]").forEach(function (other) {
          other.setAttribute("aria-pressed", other === button ? "true" : "false");
        });
        root.querySelectorAll("[data-reply-for]").forEach(function (reply) {
          reply.hidden = reply.getAttribute("data-reply-for") !== answer;
        });
        root.classList.add("is-answered");
        track("question_answer", { question_id: id, answer: answer });
      });
    });
  });

  /* ---------- rolkeuze die scrolt (variant D) ----------

     Alles op de pagina staat er altijd; de keuze bepaalt alleen waar je
     heen gaat. Eerst een korte reactie in de band zelf, dan scrollt de
     pagina naar de sectie voor die rol, en daar staat dat je hem koos.
     Met ?pad=instructeur of ?pad=koper staat de keuze al klaar, zonder te
     scrollen: wie uit een persoonlijk bericht komt, begint gewoon bovenaan. */
  document.querySelectorAll("[data-lv-choose]").forEach(function (root) {
    var options = root.querySelectorAll("[data-choose]");
    var reply = root.querySelector("[data-choose-reply]");

    function choose(option, source) {
      var path = option.getAttribute("data-choose");
      var target = document.getElementById(option.getAttribute("href").slice(1));
      options.forEach(function (other) {
        other.setAttribute("aria-pressed", other === option ? "true" : "false");
      });
      if (reply) {
        reply.textContent = option.getAttribute("data-reply") || "";
        reply.hidden = false;
      }
      document.querySelectorAll("[data-for-you]").forEach(function (note) {
        note.hidden = note.getAttribute("data-for-you") !== path;
      });
      document.body.setAttribute("data-path", path);
      track("path_select", { path_choice: path, path_source: source });

      if (source === "klik" && target) {
        window.setTimeout(function () {
          scrollToEl(target);
          focusHeading(target);
        }, reduceMotion ? 0 : 650);
      }
    }

    options.forEach(function (option) {
      option.setAttribute("role", "button");
      option.setAttribute("aria-pressed", "false");
      option.addEventListener("click", function (event) {
        event.preventDefault();
        choose(option, "klik");
      });
      option.addEventListener("keydown", function (event) {
        if (event.key === " ") {
          event.preventDefault();
          option.click();
        }
      });
    });

    var preset = new URLSearchParams(window.location.search).get("pad");
    var presetOption = preset && root.querySelector('[data-choose="' + preset + '"]');
    if (presetOption) choose(presetOption, "url");
  });

  /* ---------- padkeuze die blokken opent (variant C) ---------- */
  document.querySelectorAll("[data-lv-paths]").forEach(function (root) {
    var blocks = document.querySelectorAll("[data-path-block]");
    var options = root.querySelectorAll("[data-path]");

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
      track("path_select", { path_choice: path, path_source: source });

      if (scroll && first) {
        scrollToEl(first);
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

    var preset = new URLSearchParams(window.location.search).get("pad");
    if (preset && root.querySelector('[data-path="' + preset + '"]')) {
      choose(preset, "url", false);
    }
  });

  /* ---------- afspraak inplannen ----------
     De knop opent de afsprakenpagina (link in _data/varianten.yml). Naast
     cta_click vuurt booking_click, met de dienst erbij. Draait de afspraken-
     pagina later in de pagina zelf (Calendly kan dat), dan meldt Calendly een
     geboekte afspraak met postMessage; die vangen we hier als
     booking_complete. Een link in een nieuw tabblad meldt niets terug. */
  document.addEventListener("click", function (event) {
    var link = event.target.closest("[data-booking]");
    if (!link) return;
    var host = "";
    try { host = new URL(link.href).hostname; } catch (e) { host = ""; }
    var section = link.closest("[id]");
    track("booking_click", {
      booking_service: /calendly/.test(host) ? "calendly" : (/office|outlook|microsoft/.test(host) ? "microsoft-bookings" : host),
      cta_position: link.getAttribute("data-cta-position") || (section ? section.id : "")
    });
  });

  window.addEventListener("message", function (event) {
    var data = event.data;
    if (!data || typeof data !== "object" || data.event !== "calendly.event_scheduled") return;
    if (!/calendly\.com$/.test(new URL(event.origin).hostname)) return;
    track("booking_complete", { booking_service: "calendly" });
  });

  /* ---------- bezwaren: welke vraag gaat open ----------
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
})();
