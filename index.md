---
layout: default
lang: nl
title: Home
description: Activeer je team en bereid ze voor op de toekomst met storytelling en MicroGames.
body_class: page-home
permalink_lang:
  en: /
---

<style>
  /* Stijl onder de warme band. Niet de nieuwe homepagestijl. */
  .sp-stack,
  .panel-stack {
    position: relative;
  }

  .sp-panel {
    position: relative;
    height: auto;
    min-height: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }

  .sp-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: var(--max-width);
    margin-inline: auto;
    padding: clamp(2.25rem, 7vh, 6rem) var(--space-lg);
  }

  .sp-panel--quote {
    background-color: var(--color-prussian-blue);
    background-image: radial-gradient(ellipse at 50% 50%, rgba(237, 167, 14, 0.12), transparent 55%);
    color: var(--color-white);
  }
  .sp-panel--verhalen {
    background-color: var(--color-prussian-blue);
    background-image:
      radial-gradient(ellipse at 18% 22%, rgba(242, 196, 92, 0.16), transparent 46%),
      linear-gradient(160deg, var(--color-prussian-blue), var(--color-regal-navy));
    color: var(--color-white);
  }
  .sp-panel--team {
    background-color: var(--color-regal-navy);
    background-image:
      radial-gradient(ellipse at 78% 78%, rgba(45, 143, 158, 0.18), transparent 46%),
      linear-gradient(150deg, var(--color-regal-navy), var(--color-prussian-blue));
    color: var(--color-white);
  }
  .sp-panel--team a { color: var(--color-gold); font-weight: 600; }

  .sp-panel--verhalen::after,
  .sp-panel--testimonial::after,
  .sp-panel--team::after,
  .sp-panel--quote::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
  }
  .sp-panel--verhalen::after { background-image: url("{{ '/assets/images/panels/verhalen.svg' | relative_url }}"); }
  .sp-panel--testimonial::after { background-image: url("{{ '/assets/images/panels/testimonial.svg' | relative_url }}"); }
  .sp-panel--team::after { background-image: url("{{ '/assets/images/panels/team.svg' | relative_url }}"); }
  .sp-panel--quote::after { background-image: url("{{ '/assets/images/panels/quote.svg' | relative_url }}"); }

  .sp-eyebrow {
    display: inline-block;
    font-family: var(--font-display);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-gold);
    margin-bottom: var(--space-sm);
  }
  .sp-panel--testimonial .sp-eyebrow { color: var(--color-harbor-teal); }

  .sp-panel h2 {
    font-family: var(--font-display);
    font-size: clamp(1.9rem, 3.8vw, 3.1rem);
    font-weight: 800;
    line-height: 1.08;
    margin: 0 0 clamp(var(--space-md), 2.5vh, var(--space-lg));
    max-width: 22ch;
    color: inherit;
    letter-spacing: 0.015em;
  }
  .sp-panel h2 .hl { color: var(--color-preludens-gold); }
  .sp-panel p.sp-lead {
    font-size: 1.0625rem;
    line-height: 1.65;
    max-width: 46ch;
    margin: 0 0 clamp(var(--space-sm), 2vh, var(--space-md));
  }
  .sp-panel--verhalen p,
  .sp-panel--team p,
  .sp-panel--quote p { color: rgba(246, 249, 249, 0.9); }

  .sp-clients {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-sm);
    padding: 0;
    margin: clamp(var(--space-md), 3vh, var(--space-lg)) 0 0;
    max-width: 42rem;
    justify-content: center;
  }
  .sp-clients li {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 0;
    width: 100%;
    height: 4rem;
    min-height: 4rem;
    font-family: var(--font-display);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    line-height: 1.15;
    text-align: center;
    color: var(--color-cloud-white);
    padding: 0.35rem 0.6rem;
    border: 1px solid rgba(246, 249, 249, 0.22);
    border-radius: var(--radius-pill);
    background: rgba(246, 249, 249, 0.06);
    overflow: hidden;
  }
  .sp-clients__logo {
    display: block;
    max-width: 78%;
    max-height: 1.7rem;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(1) brightness(2.2) contrast(0.85);
    opacity: 0.9;
  }
  @media (max-width: 600px) {
    .sp-clients {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: none;
    }
    .sp-clients li {
      height: 3.75rem;
      min-height: 3.75rem;
      font-size: 0.68rem;
    }
    .sp-inner { padding-inline: var(--space-md); }
  }

  .sp-quote { max-width: 50ch; text-align: center; margin-inline: auto; }
  .sp-quote blockquote {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 3vw, 2.1rem);
    font-weight: 600;
    line-height: 1.3;
    margin: 0 0 var(--space-md);
    color: var(--color-white);
  }
  .sp-quote cite { font-style: normal; color: var(--color-gold); letter-spacing: 0.04em; }

  .sp-panel--testimonial {
    background-color: var(--color-cream);
    background-image: radial-gradient(ellipse at 18% 22%, rgba(237, 167, 14, 0.12), transparent 48%);
    color: var(--color-ink);
  }
  .sp-panel--testimonial > .sp-inner > h2 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.06;
    letter-spacing: 0.015em;
    max-width: 20ch;
    margin: 0 0 clamp(var(--space-md), 3vh, var(--space-lg));
    color: var(--color-ink);
  }
  .sp-carousel__slide.is-active { display: flex; }
  .sp-carousel__dots[hidden] { display: none; }
  .sp-carousel__dot {
    width: 0.85rem;
    height: 0.85rem;
    background: rgba(11, 42, 53, 0.22);
    transition: background var(--transition), box-shadow var(--transition);
  }
  .sp-carousel__dot.is-active {
    background: var(--color-preludens-gold);
    box-shadow: 0 0 0 3px rgba(237, 167, 14, 0.18);
  }
  .sp-testimonial {
    display: flex;
    align-items: center;
    gap: clamp(1.5rem, 4vw, var(--space-xl));
    max-width: 60rem;
    margin: 0 auto;
  }
  .sp-testimonial__photo {
    flex: 0 0 auto;
    width: clamp(8rem, 16vw, 12.5rem);
    height: clamp(8rem, 16vw, 12.5rem);
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--color-white);
    box-shadow: var(--shadow-card);
  }
  .sp-testimonial__body { min-width: 0; }
  .sp-testimonial blockquote {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 2.4vw, 1.9rem);
    font-weight: 600;
    line-height: 1.32;
    margin: 0.4rem 0 var(--space-md);
    color: var(--color-ink);
    max-width: 34ch;
  }
  .sp-testimonial blockquote::before { content: "\201C"; color: var(--color-harbor-teal); }
  .sp-testimonial blockquote::after { content: "\201D"; color: var(--color-harbor-teal); }
  .sp-testimonial__cite { display: flex; flex-direction: column; gap: 0.1rem; }
  .sp-testimonial__name {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--color-ink);
  }
  .sp-testimonial__role { font-size: 0.9rem; color: var(--color-ink-soft); }

  @media (max-width: 640px) {
    .sp-testimonial { flex-direction: column; text-align: center; }
    .sp-testimonial__cite { align-items: center; }
    .sp-testimonial blockquote { max-width: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    .sp-panel { position: relative; transform: none !important; filter: none !important; opacity: 1 !important; height: auto; min-height: 100svh; scroll-snap-align: none; }
  }
</style>

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Wij versterken <span class="hl">kennisretentie</span> <span class="sp-nowrap">binnen organisaties.</span>{% endcapture %}
{% capture hero_lead %}Preludens ontwerpt en ontwikkelt online trainingen waarin medewerkers oefenen met situaties uit de praktijk. Met storytelling en game-based leren dagen we deelnemers uit om zelf keuzes te maken. Gerichte feedback en herhaling helpen de kennis beter te onthouden en toe te passen in hun werk.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Ontdek onze aanpak →" primary_href="/diensten/" play_label="Bekijk een MicroGame" play_href="/play/" %}
{% endcapture %}
{% capture hero_steps %}
{% include panels/steps.html i1="01" t1="Uitdagen" p1="Daag teams uit om binnen realistische situaties keuzes te maken, afwegingen te oefenen en de gevolgen van hun handelen te ervaren." i2="02" t2="Activeren" p2="Gebruik Play om deelnemers actief te laten kiezen. Niet kijken of klikken, maar proberen, reageren, beslissen en leren van directe feedback." i3="03" t3="Motiveren" p3="Versterk de betrokkenheid en intrinsieke motivatie, zodat teams met meer vertrouwen handelen wanneer het er in de praktijk echt op aankomt." %}
{% endcapture %}
{% include panels/hero.html kicker="Leren door te doen" title=hero_title lead=hero_lead actions=hero_actions steps=hero_steps figure_src="/assets/images/hero/homepage-concept-route.jpg" figure_alt="Een persoon op een pad dat naar een vlag op de horizon leidt" figure_href="/play/" figure_caption="Van informatie naar kennis." %}

{% capture focus_left %}Bij Preludens geloven we dat online leren pas werkt wanneer mensen actief betrokken raken. Daarom ontwerpen we interactieve leerervaringen die aansluiten bij de praktijk: visueel opgebouwd, herkenbaar en gericht op kennis die mensen echt moeten kunnen toepassen.{% endcapture %}
{% capture focus_right %}Storytelling geeft context en betekenis. MicroGames zorgen voor keuzes, herhaling en directe feedback. Data laat zien waar deelnemers vastlopen en waar verbetering mogelijk is. Zo wordt online leren geen verplichting om doorheen te klikken, maar een gerichte ervaring waarin teams oefenen, ontdekken en groeien.{% endcapture %}
{% capture focus_title %}Interactieve scenario's die teams<br><span class="hl">uitdagen</span>, <span class="hl">activeren</span> en <span class="hl">motiveren</span>.{% endcapture %}
{% capture focus_body %}
<h2>{{ focus_title }}</h2>
{% include panels/split.html left=focus_left right=focus_right %}
{% include panels/logo-row.html label="Een selectie van klanten" src1="/assets/images/clients/focus-nnvo.png" alt1="NNVO, Nationale Nautische Verkeersdienst Opleiding" src2="/assets/images/clients/onitnow.png" alt2="onITnow" src3="/assets/images/clients/maryland.png" alt3="University of Maryland" src4="/assets/images/clients/focus-21cc.png" alt4="21CC Education" src5="/assets/images/clients/tudelft.png" alt5="TU Delft" %}
{% endcapture %}
{% include panels/panel.html variant="mist" line="online-focus" body=focus_body %}

{% capture track_items %}
{% include panels/track.html href="/diensten/" title="E-learning" text="Online trainingen waarin medewerkers oefenen met situaties uit hun werk, keuzes maken en directe feedback krijgen." more="Informatie" device="laptop-light" screen="/assets/images/verhalen/basis-koeltechniek-onderdelen.jpg" %}
{% include panels/track.html href="/prepo/" title="Preludens Portal" text="Eén omgeving om MicroGames en Stories te gebruiken, te beheren en door te ontwikkelen, ook na de oplevering." more="Informatie" device="laptop-dark" screen="/assets/images/prepo/overzicht.jpg" %}
{% include panels/track.html href="/diensten/#microgame-stories" title="MicroGame Stories" text="Korte, visuele verhalen die basiskennis koppelen aan herkenbare praktijksituaties, met spel en herhaling." more="Informatie" device="tablet" screen="/assets/images/verhalen/studium-co-wijzer.jpg" %}
{% include panels/track.html href="/diensten/#dilemma-storytelling" title="Dilemma short Stories" text="Korte scenario’s waarin teams lastige keuzes maken, gevolgen ervaren en leren afwegen." more="Informatie" device="hands" screen="/assets/images/verhalen/disruption-game.jpg" %}
{% endcapture %}
{% capture paper_lead %}<strong>Welke vorm past bij jouw uitdaging?</strong> Wil je basiskennis trainen en borgen, dan ligt een MicroGame Story voor de hand. Wil je besluitvaardigheid versterken rond lastige keuzes, dan past Dilemma Storytelling. Wil je eerst grip krijgen op gedrag, leerdoelen en interventies, dan starten we met Game Thinking.{% endcapture %}
{% capture paper_title %}<span class="hl">Kennistrajecten</span> met verhaal, spel en impact.{% endcapture %}
{% capture paper_body %}
<h3>Wat we doen</h3>
<h2>{{ paper_title }}</h2>
<p class="sp-lead">{{ paper_lead }}</p>
{% include panels/tracks.html items=track_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=paper_body %}

{% capture warm_left %}In een GameStorm verkennen we samen jouw leeruitdaging. In één dagdeel brengen we de doelgroep, context en belangrijkste leerdoelen scherp in beeld. Daarna vertalen we die inzichten naar een eerste verhaallijn, passende keuzes en korte spelmechanismen.{% endcapture %}
{% capture warm_right %}Je gaat naar huis met een helder concept en een concrete richting voor je leerervaring. Ook los van een vervolgtraject geeft de sessie waardevolle houvast voor betere e-learning, training of kennisoverdracht.{% endcapture %}
{% include panels/cta.html kicker="Vrijblijvend · geen verplichtingen · reactie binnen één werkdag" title="Zet morgen de eerste stap" left=warm_left right=warm_right primary_label="Plan een GameStorm" primary_href="/gamestorm/" secondary_label="Ontdek Play" secondary_href="/play/" %}

  <!-- 5. Verhalen — bewijs uit de praktijk -->
  <section class="sp-panel sp-panel--verhalen" data-sp="4" data-title="Verhalen uit de praktijk">
    <div class="sp-inner">
      <span class="sp-eyebrow">Bewezen in de praktijk</span>
      <h2>Van vraagstuk naar spelbare leerervaring</h2>
      <p class="sp-lead">
        Van nautisch toezicht tot energietransitie: elk project begint met een vraagstuk dat om beweging vraagt.
        Daarom biedt Preludens een totaaloplossing voor game-based leren: van eerste verkenning tot implementatie
        in de eigen leeromgeving.
      </p>
      <ol class="sp-steps" aria-label="De 7 stappen van succes">
        <li><span class="sp-steps__num">1</span> GameStorm</li>
        <li><span class="sp-steps__num">2</span> Storytelling</li>
        <li><span class="sp-steps__num">3</span> Visualisatie</li>
        <li><span class="sp-steps__num">4</span> Leerdoelen</li>
        <li><span class="sp-steps__num">5</span> Design</li>
        <li><span class="sp-steps__num">6</span> Productie</li>
        <li><span class="sp-steps__num">7</span> Implementatie</li>
      </ol>
      <ul class="sp-clients" aria-label="Een selectie van opdrachtgevers">
        <li>Hogeschool van Amsterdam</li>
        <li>
          <img
            class="sp-clients__logo"
            src="{{ '/assets/images/clients/nnvo.png' | relative_url }}"
            alt="NNVO"
            width="160"
            height="48"
            loading="lazy"
            decoding="async"
          >
        </li>
        <li>
          <img
            class="sp-clients__logo"
            src="{{ '/assets/images/clients/21cc.png' | relative_url }}"
            alt="21CC"
            width="160"
            height="48"
            loading="lazy"
            decoding="async"
          >
        </li>
        <li>
          <img
            class="sp-clients__logo"
            src="{{ '/assets/images/clients/studium.png' | relative_url }}"
            alt="Studium"
            width="160"
            height="48"
            loading="lazy"
            decoding="async"
          >
        </li>
        <li>Wijkz</li>
        <li>onITnow</li>
      </ul>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/verhalen/' | relative_url }}">Lees de verhalen</a>
      </div>
    </div>
  </section>

  <!-- 6. Klant-testimonial -->
  <section class="sp-panel sp-panel--testimonial" data-sp="5" data-title="Wat klanten zeggen">
    <div class="sp-inner">
      <h2>Ervaringen uit de praktijk</h2>
      <div class="sp-carousel" data-sp-carousel>
        <div class="sp-carousel__track">
          <figure class="sp-testimonial sp-carousel__slide is-active">
            <img
              class="sp-testimonial__photo"
              src="{{ '/assets/images/testimonials/renee-heller.jpg' | relative_url }}"
              alt="Renée Heller"
              width="800"
              height="800"
              loading="lazy"
              decoding="async"
            >
            <div class="sp-testimonial__body">
              <blockquote>
                Daan heeft ons erg geholpen van een statische ontwerptool een game te maken waarin spelers op alle aspecten van hun keuzes uitgedaagd worden. Het werk van Daan zorgde ervoor dat alle stappen logisch en voor een breed publiek van professionals en studenten zijn neergezet in een prachtig kaartspel.
              </blockquote>
              <figcaption class="sp-testimonial__cite">
                <span class="sp-testimonial__name">Renée Heller</span>
                <span class="sp-testimonial__role">Professor Energy &amp; Innovation, Hogeschool van Amsterdam</span>
              </figcaption>
            </div>
          </figure>
        </div>
        <div class="sp-carousel__dots" role="tablist" aria-label="Quotes">
          <button class="sp-carousel__dot is-active" type="button" aria-label="Quote 1" data-sp-carousel-dot="0"></button>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. Team — de makers (E-E-A-T) -->
  <section class="sp-panel sp-panel--team" data-sp="6" data-title="Het team">
    <div class="sp-inner">
      <span class="sp-eyebrow">Het team</span>
      <h2>De mensen achter Preludens</h2>
      <p class="sp-lead">
        Preludens combineert meer dan vijftien jaar ervaring in serious games met storytelling,
        game design, didactiek en techniek. We zijn een compact team van makers, ontwerpers en
        ontwikkelaars dat complexe kennis vertaalt naar leerervaringen waarin mensen actief
        ontdekken, kiezen en oefenen.
      </p>
      <p><a href="{{ '/team/' | relative_url }}">Maak kennis met het team →</a></p>
      <ul class="sp-values" aria-label="Wij staan voor">
        <li>
          <strong>Robuust</strong>
          <span>Leerervaringen die stabiel werken, logisch aanvoelen en vertrouwen geven.</span>
        </li>
        <li>
          <strong>Gericht</strong>
          <span>Ontwerpkeuzes die altijd terug te voeren zijn op leerdoelen, gedrag en toepassing.</span>
        </li>
        <li>
          <strong>Toegankelijk</strong>
          <span>Complexe kennis wordt helder, herkenbaar en speelbaar voor de mensen die ermee moeten werken.</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- 8. Quote -->
  <section class="sp-panel sp-panel--quote" data-sp="7">
    <div class="sp-inner">
      <figure class="sp-quote">
        <blockquote>
          Play is older than culture, for culture, however inadequately defined, always presupposes human society, and animals have not waited for man to teach them their playing.
        </blockquote>
        <cite>Johan Huizinga — Homo Ludens (1938)</cite>
      </figure>
    </div>
  </section>

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
