/* De demopagina (/verhalen/microgame-demo/).

   De demo opent in een nieuw tabblad. Deze pagina blijft open en onthoudt
   wanneer dat gebeurde. Komt de bezoeker na een tijdje terug naar dit tabblad,
   dan klapt onder de hero het blok "Bedankt voor het spelen" open, met het
   korte formulier, en scrolt de pagina ernaartoe.

   "Na een tijdje" is MIN_SECONDS: net genoeg om het moment van openen zelf
   over te slaan (sommige browsers geven de pagina nog even focus vlak na de
   klik). Eerst stond hij op twintig seconden, maar wie de demo even bekijkt
   en terugkomt, verwacht ook het formulier te zien. Komt iemand binnen die
   paar seconden terug, dan blijft de stempel staan en gaat het blok bij de
   volgende terugkeer open.

   Stuurt de demo zelf { preludens: "demo_complete" } met postMessage (via
   window.opener), dan gaat het blok ook open — zonder wachttijd. tracking.js
   vangt hetzelfde bericht op voor het event demo_complete.

   De stempel staat in sessionStorage: per tabblad, en weg als het tabblad
   dichtgaat. Lukt opslaan niet (privévenster, geblokkeerde opslag), dan
   houden we hem in het geheugen; dat volstaat zolang de pagina open blijft.

   Event: demo_return, met seconds (hoe lang de demo open stond) en casus. */
(function () {
  var page = document.querySelector("[data-demo-page]");
  if (!page) return;

  var panel = page.querySelector("[data-demo-return]");
  if (!panel) return;

  var KEY = "preludens-demo-opened";
  var MIN_SECONDS = 5;
  var memory = null;
  var shown = false;

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

  function casus() {
    return (window.preludensSite && window.preludensSite.casus) || "";
  }

  function stamp(value) {
    memory = value;
    try {
      if (value === null) window.sessionStorage.removeItem(KEY);
      else window.sessionStorage.setItem(KEY, String(value));
    } catch (e) { /* geen opslag: het geheugen volstaat */ }
  }

  function readStamp() {
    try {
      var stored = window.sessionStorage.getItem(KEY);
      if (stored) return parseInt(stored, 10);
    } catch (e) { /* zie stamp() */ }
    return memory;
  }

  function show(seconds) {
    if (shown) return;
    shown = true;
    stamp(null);
    panel.hidden = false;

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    panel.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

    /* De focus naar de kop, zodat een schermlezer hoort wat er verscheen. */
    var heading = panel.querySelector("h2");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }

    track("demo_return", { seconds: seconds, casus: casus() });
  }

  function check() {
    if (document.visibilityState === "hidden") return;
    var opened = readStamp();
    if (!opened) return;
    var seconds = Math.round((Date.now() - opened) / 1000);
    if (seconds >= MIN_SECONDS) show(seconds);
  }

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-demo-launch]");
    if (!trigger) return;
    /* Een nieuwe klik zet de klok opnieuw, ook als het blok al open is. */
    stamp(Date.now());
  });

  document.addEventListener("visibilitychange", check);
  window.addEventListener("focus", check);
  window.addEventListener("pageshow", check);

  window.addEventListener("message", function (event) {
    var data = event.data;
    if (!data || typeof data !== "object" || data.preludens !== "demo_complete") return;
    var opened = readStamp();
    show(opened ? Math.round((Date.now() - opened) / 1000) : 0);
  });

  /* Opende de browser de demo toch in dit tabblad en kwam de bezoeker met
     "terug" weer hier, dan staat de stempel er nog: kijk meteen. */
  check();
})();
