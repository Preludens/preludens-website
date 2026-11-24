---
layout: default
lang: nl
title: Kennisretentie versterken met game-based leren
description: Activeer je team en bereid ze voor op de toekomst met storytelling en MicroGames.
body_class: page-home page-panels
permalink_lang:
  en: /
---


<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Wij versterken <span class="hl">kennisretentie</span> <span class="sp-nowrap">binnen organisaties.</span>{% endcapture %}
{% capture hero_lead %}Preludens ontwerpt en ontwikkelt online trainingen voor opleiders, L&amp;D- en HR-teams, veiligheidsafdelingen en onderwijs. Deelnemers oefenen met situaties uit de praktijk en maken zelf keuzes, met storytelling en game-based leren. Feedback en herhaling helpen hen de kennis te onthouden en toe te passen in hun werk.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Ontdek onze aanpak →" primary_href="/diensten/" play_label="Speel een MicroGame" play_href="/verhalen/bewust-met-ai/" %}
{% endcapture %}
{% capture hero_steps %}
{% include panels/steps.html i1="01" t1="Uitdagen" p1="Daag teams uit om binnen realistische situaties keuzes te maken en te ervaren wat die keuzes opleveren." i2="02" t2="Activeren" p2="Geef deelnemers een veilige oefenruimte om zelf te kiezen. Ze proberen iets en zien meteen wat het oplevert." i3="03" t3="Motiveren" p3="Versterk de betrokkenheid en intrinsieke motivatie, zodat teams met meer vertrouwen handelen wanneer het er in de praktijk echt op aankomt." %}
{% endcapture %}
{% include panels/hero.html kicker="Leren door te doen" title=hero_title lead=hero_lead actions=hero_actions steps=hero_steps figure_src="/assets/images/hero/homepage-concept-route.jpg" figure_alt="Een persoon op een pad dat naar een vlag op de horizon leidt" figure_href="/play/" figure_caption="Van informatie naar kennis." %}
{% include home/herkenning.html %}

{% capture focus_left %}Online leren werkt pas wanneer mensen er actief bij betrokken raken. Daarom ontwerpen we leerervaringen die herkenbaar zijn en gericht op kennis die mensen echt moeten kunnen toepassen.{% endcapture %}
{% capture focus_right %}Storytelling geeft context en betekenis. MicroGames zorgen voor keuzes en directe feedback. Data laat zien waar deelnemers vastlopen. Zo wordt online leren een gerichte oefening waarin teams hun aanpak bijstellen.{% endcapture %}
{% capture focus_title %}Interactieve scenario's die teams<br><span class="hl">uitdagen</span>, <span class="hl">activeren</span> en <span class="hl">motiveren</span>.{% endcapture %}
{% capture focus_body %}
<h2>{{ focus_title }}</h2>
{% include panels/split.html left=focus_left right=focus_right %}
{% include panels/logo-row.html label="Een selectie van klanten" src1="/assets/images/clients/focus-nnvo.png" alt1="NNVO, Nationale Nautische Verkeersdienst Opleiding" src2="/assets/images/clients/onitnow.png" alt2="onITnow" src3="/assets/images/clients/maryland.png" alt3="University of Maryland" src4="/assets/images/clients/focus-21cc.png" alt4="21CC Education" src5="/assets/images/clients/tudelft.png" alt5="TU Delft" %}
{% endcapture %}
{% include panels/panel.html variant="mist" line="online-focus" body=focus_body %}

{% capture track_items %}
{% include panels/track.html href="/e-learning/" title="E-learning" text="Online training op maat, waarin deelnemers oefenen met situaties uit hun werk en meteen zien wat hun keuzes opleveren." more="Naar e-learning" frame="4" screen="/assets/images/verhalen/basis-koeltechniek-onderdelen.jpg" %}
{% include panels/track.html href="/prepo/" title="Prepo, de Preludens Portal" text="Het platform waar je opgeleverde MicroGames en Stories deelt en beheert. Je volgt gebruik en feedback, ook na de oplevering." more="Naar Prepo" frame="3" screen="/assets/images/prepo/overzicht.jpg" %}
{% include panels/track.html href="/diensten/microgame-stories/" title="MicroGame Stories" text="Korte, visuele verhalen die basiskennis koppelen aan herkenbare praktijksituaties, met spel en herhaling." more="Naar MicroGame Stories" frame="2" screen="/assets/images/verhalen/studium-co-wijzer.jpg" %}
{% include panels/track.html href="/diensten/dilemma-storytelling/" title="Dilemma Storytelling" text="Korte scenario’s waarin teams lastige keuzes maken en de gevolgen daarvan ervaren." more="Naar Dilemma Storytelling" frame="1" screen="/assets/images/verhalen/disruption-game.jpg" %}
{% endcapture %}
{% capture paper_lead %}<strong>Wat je krijgt:</strong> een leerervaring die wij ontwerpen en opleveren, als e-learning, MicroGame Story of Dilemma Storytelling. Voor basiskennis die moet beklijven ligt een MicroGame Story voor de hand. Gaat het om lastige keuzes, dan past Dilemma Storytelling. Prepo is het platform waarop je die leerervaringen beheert. Weet je nog niet welke vorm past? Dan beginnen we met een GameStorm, vanuit onze ontwerpaanpak <a href="{{ '/diensten/game-thinking/' | relative_url }}">Game Thinking</a>.{% endcapture %}
{% capture paper_title %}<span class="hl">Kennistrajecten</span> met verhaal en spel.{% endcapture %}
{% capture paper_body %}
<h3>Wat we doen</h3>
<h2>{{ paper_title }}</h2>
<p class="sp-lead">{{ paper_lead }}</p>
{% include panels/tracks.html items=track_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=paper_body %}

{% capture werk_items %}
{% include panels/step.html num="1" title="GameStorm" text="Eén dagdeel op locatie. We scherpen leeropgave en doelgroep aan." %}
{% include panels/step.html num="2" title="Storytelling" text="We vertalen de leeropgave naar een herkenbaar verhaal met keuzes." %}
{% include panels/step.html num="3" title="Visualisatie" text="We geven het verhaal een beeld, zodat het meteen duidelijk is." %}
{% include panels/step.html num="4" title="Leerdoelen" text="Elk onderdeel is terug te voeren op wat deelnemers moeten kunnen." %}
{% include panels/step.html num="5" title="Design" text="Spelmechanismen en feedback sluiten aan op de praktijk." %}
{% include panels/step.html num="6" title="Productie" text="We ontwikkelen, testen en verbeteren de leerervaring." %}
{% include panels/step.html num="7" title="Implementatie" text="Oplevering in je eigen LMS of via Prepo." %}
{% endcapture %}
{% capture werk_body %}
<h3>Zo werken we</h3>
<h2>Van eerste verkenning tot oplevering</h2>
<p class="sp-lead">Elk project volgt dezelfde zeven stappen. Je hoeft niet groot te beginnen: één MicroGame Story-hoofdstuk ontwikkelen we in één maand. Een GameStorm kost €500 en wordt volledig verrekend bij een vervolgtraject.</p>
{% include panels/steps.html variant="pyramid" items=werk_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" body=werk_body %}

{% capture warm_left %}In een GameStorm verkennen we samen jouw leeruitdaging. In één dagdeel brengen we de doelgroep en de belangrijkste leerdoelen scherp in beeld. Daarna vertalen we die inzichten naar een eerste verhaallijn met passende keuzes.{% endcapture %}
{% capture warm_right %}Je gaat naar huis met een helder concept en een concrete richting voor je leerervaring. Ook los van een vervolgtraject geeft de sessie waardevolle houvast voor betere e-learning of training. Wat volgt: we reageren binnen één werkdag, plannen een kennismaking en bespreken of een GameStorm de logische eerste stap is.{% endcapture %}
{% include panels/cta.html kicker="Reactie binnen één werkdag" title="Zet morgen de eerste stap" left=warm_left right=warm_right primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Ontdek Play" secondary_href="/play/" %}

{% include home/bewijs.html %}

{% capture team_body %}
<span class="sp-eyebrow">Het team</span>
<h2>De mensen achter Preludens</h2>
<p class="sp-lead">
  Preludens bouwt voort op meer dan vijftien jaar ervaring in serious games. Storytelling, game design en didactiek zitten bij ons aan dezelfde tafel. Je werkt rechtstreeks met de ontwerpers en ontwikkelaars die je project uitvoeren. Zo wordt complexe kennis een leerervaring waarin mensen zelf kiezen en oefenen.
</p>
<p><a href="{{ '/team/' | relative_url }}">Maak kennis met het team →</a></p>
<ul class="sp-values" aria-label="Wij staan voor">
  <li>
    <strong>Robuust</strong>
    <span>Leerervaringen die stabiel werken en logisch aanvoelen.</span>
  </li>
  <li>
    <strong>Gericht</strong>
    <span>Ontwerpkeuzes die altijd terug te voeren zijn op een leerdoel.</span>
  </li>
  <li>
    <strong>Toegankelijk</strong>
    <span>Complexe kennis wordt speelbaar voor de mensen die ermee moeten werken.</span>
  </li>
</ul>
{% endcapture %}
{% include panels/panel.html variant="paper" body=team_body %}

{% capture huizinga_body %}
<figure class="sp-quote">
  <blockquote>
    Play is older than culture, for culture, however inadequately defined, always presupposes human society, and animals have not waited for man to teach them their playing.
  </blockquote>
  <cite>Johan Huizinga — Homo Ludens (1938)</cite>
</figure>
{% endcapture %}
{% include panels/panel.html variant="mist" body=huizinga_body %}

{% include panels/footer-reveal.html %}

</div>

<script>
(function () {
  "use strict";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var carousel = document.querySelector("[data-sp-carousel]");
  if (!carousel) return;
  var slides = Array.prototype.slice.call(carousel.querySelectorAll(".sp-carousel__slide"));
  var dots = Array.prototype.slice.call(carousel.querySelectorAll("[data-sp-carousel-dot]"));
  var dotsWrap = carousel.querySelector(".sp-carousel__dots");
  var slideIndex = 0;
  var autoTimer = null;
  var AUTO_MS = 6000;
  var multiSlide = slides.length > 1;

  if (dotsWrap && !multiSlide) {
    dotsWrap.hidden = true;
  }

  function showSlide(index) {
    if (!slides.length) return;
    slideIndex = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === slideIndex);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === slideIndex);
    });
  }

  function stopCarouselAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function startCarouselAuto() {
    stopCarouselAuto();
    if (!multiSlide || reduced) return;
    autoTimer = setInterval(function () {
      showSlide(slideIndex + 1);
    }, AUTO_MS);
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      showSlide(Number(dot.getAttribute("data-sp-carousel-dot")) || 0);
      startCarouselAuto();
    });
  });

  if (multiSlide && !reduced) {
    carousel.addEventListener("mouseenter", stopCarouselAuto);
    carousel.addEventListener("mouseleave", startCarouselAuto);
    carousel.addEventListener("focusin", stopCarouselAuto);
    carousel.addEventListener("focusout", function (e) {
      if (!carousel.contains(e.relatedTarget)) startCarouselAuto();
    });
    startCarouselAuto();
  }
})();
</script>
