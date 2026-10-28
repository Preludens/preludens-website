---
layout: default
lang: nl
title: Play — preview
description: Preview van de Play-pagina in de stijl van het homepage-concept.
permalink: /play-concept/
permalink_lang:
  en: /play-concept/
body_class: page-scroll-preview page-play-concept
sitemap: false
robots: noindex, nofollow
---

{% include sp-concept-style.html %}

<style>
  .sp-hero-steps.sp-hero-steps--4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .sp-panel--hero .sp-hero-steps.sp-hero-steps--4 p {
    text-align: left;
    hyphens: manual;
  }

  .sp-panel--cream > .sp-inner > .sp-eyebrow,
  .sp-panel--band > .sp-inner > .sp-eyebrow {
    display: block;
    text-align: center;
  }
  .sp-panel--band .sp-eyebrow { color: var(--color-harbor-teal); }

  .sp-split {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 26rem);
    gap: clamp(1.5rem, 4vw, 3.5rem);
    align-items: center;
  }
  .sp-split--start { align-items: start; }
  .sp-split p.sp-lead { max-width: none; }
  .sp-split .sp-hero-scene { justify-self: end; }

  .sp-panel--band {
    background: var(--color-mist-blue);
    color: var(--color-ink);
  }
  .sp-panel--band::after { content: none; }
  .sp-panel--band h2,
  .sp-panel--band h3,
  .sp-panel--band p { color: var(--color-ink); }
  .sp-panel--band p.sp-lead,
  .sp-panel--band .sp-pain-points span { color: var(--color-ink-soft); }

  .sp-pain-points.sp-pain-points--pairs {
    margin-top: clamp(1.5rem, 4vh, 2.75rem);
  }
  @media (min-width: 720px) {
    .sp-pain-points.sp-pain-points--pairs {
      grid-template-columns: 1fr 1fr;
    }
  }

  .sp-aside-quote {
    margin: 0;
    padding: 1.5rem 1.35rem 1.35rem;
    background: var(--color-mist-blue);
    border-radius: var(--radius-sm);
    box-shadow: 0 8px 18px rgba(11, 42, 53, 0.08);
  }
  .sp-aside-quote blockquote {
    margin: 0 0 1rem;
    font-family: var(--font-display);
    font-size: clamp(1.15rem, 1.6vw, 1.4rem);
    font-weight: 600;
    line-height: 1.35;
    color: var(--color-ink);
  }
  .sp-aside-quote figcaption {
    font-family: var(--font-display);
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--color-ink-gold);
  }

  .sp-panel--verhalen p.sp-lead,
  .sp-panel--warm p.sp-lead { max-width: 65ch; }
  .sp-panel--verhalen .sp-actions .btn-secondary {
    background: transparent;
    color: var(--color-white) !important;
    border-color: rgba(246, 249, 249, 0.42);
  }
  .sp-panel--verhalen .sp-actions .btn-secondary:hover {
    background: rgba(246, 249, 249, 0.1);
    color: var(--color-white) !important;
  }

  @media (max-width: 900px) {
    .sp-hero-steps.sp-hero-steps--4 { grid-template-columns: 1fr; }
    .sp-split { grid-template-columns: 1fr; }
    .sp-split .sp-hero-scene { justify-self: stretch; }
  }
</style>

<div class="sp-stack">

  <section class="sp-panel sp-panel--hero" data-sp="0">
    <div class="sp-inner">
      <div class="sp-hero-copy">
        <h3>Play</h3>
        <h1>Play creëert de ruimte om te <span class="hl">leren</span></h1>
        <p class="sp-lead">
          Wanneer mensen vooral bezig zijn met fouten vermijden en risico’s beperken, ontstaat er weinig ruimte om nieuw
          gedrag te oefenen. Play doorbreekt dat patroon.
        </p>
        <p class="sp-lead">
          Preludens creëert veilige leerervaringen waarin teams mogen onderzoeken, proberen en opnieuw kiezen. Met
          duidelijke regels, herkenbare situaties en directe feedback groeit de betrokkenheid, intrinsieke motivatie en
          het vertrouwen om in de praktijk sterker te handelen.
        </p>
        <div class="sp-actions">
          <span class="sp-hero-cta">
            <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Neem contact op →</a>
          </span>
          <a class="sp-hero-play" href="{{ '/diensten/' | relative_url }}">
            <span class="sp-hero-play__icon" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2.2 6h7.2M6.6 2.8 9.8 6 6.6 9.2"/></svg>
            </span>
            Onze diensten
          </a>
        </div>
      </div>
      <figure class="sp-hero-scene">
        <svg class="sp-hero-clip-def" width="0" height="0" aria-hidden="true">
          <defs>
            <clipPath id="sp-hero-clip" clipPathUnits="objectBoundingBox">
              <path d="M0 0.2 L0 0.96 Q0 1 0.04 1 L0.8 1 Q0.84 1 0.868 0.972 L0.972 0.868 Q1 0.84 1 0.8 L1 0.04 Q1 0 0.96 0 L0.2 0 Q0.16 0 0.132 0.028 L0.028 0.132 Q0 0.16 0 0.2 Z"/>
            </clipPath>
            <clipPath id="sp-btn-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.11 0 L1 0 L1 0.64 L0.89 1 L0 1 L0 0.36 Z"/>
            </clipPath>
          </defs>
        </svg>
        <a class="sp-hero-scene__link" href="#magische-cirkel">
          <div class="sp-hero-shadow">
            <div class="sp-hero-frame">
              <img src="{{ '/assets/images/hero/play-hero.jpg' | relative_url }}" alt="Open landschap met een pad — ruimte om te leren" width="1600" height="900">
            </div>
          </div>
        </a>
        <figcaption>Ruimte om te onderzoeken, te proberen en opnieuw te kiezen.</figcaption>
      </figure>
    </div>
    <div class="sp-hero-steps sp-hero-steps--4">
      <article>
        <h3><span>01</span> Ruimte</h3>
        <p>Mensen stappen even uit de dagelijkse druk.</p>
      </article>
      <article>
        <h3><span>02</span> Werkelijkheid</h3>
        <p>Ze blijven dicht bij de werkelijkheid.</p>
      </article>
      <article>
        <h3><span>03</span> Veilig</h3>
        <p>Fouten maken mag, zonder echte schade.</p>
      </article>
      <article>
        <h3><span>04</span> Actief</h3>
        <p>Leren wordt actief: ontdekken, handelen, reflecteren.</p>
      </article>
    </div>
  </section>

  <section class="sp-panel sp-panel--cream" id="magische-cirkel" data-sp="1">
    <div class="sp-inner">
      <span class="sp-eyebrow">Haal je team uit de overlevingsstand</span>
      <h2>Play: de magische cirkel van <span class="hl">leren</span></h2>
      <div class="sp-focus-copy">
        <p class="sp-lead">
          In de praktijk maken teams dagelijks keuzes die invloed hebben op veiligheid, productie, kwaliteit of
          efficiëntie. Juist daarom is het lastig om nieuwe kennis daar direct te oefenen. De druk is hoog, fouten
          hebben gevolgen en er is weinig ruimte om stil te staan, te proberen of opnieuw te kiezen.
        </p>
        <p class="sp-lead">
          Daardoor blijven mensen vaak in een praktische overlevingsstand: fouten vermijden, risico’s beperken en snel
          door naar de volgende taak. Begrijpelijk, maar niet altijd behulpzaam wanneer ze iets nieuws moeten leren of
          ander gedrag moeten ontwikkelen.
        </p>
        <p class="sp-lead">
          Het alternatief is vaak een passieve leervorm: theorie lezen, instructies volgen en achteraf toetsen maken.
          Dat kan informatie overdragen, maar het helpt mensen niet altijd om sterker te handelen wanneer de situatie
          complex wordt.
        </p>
        <p class="sp-lead">
          Bij Preludens gebruiken we Play om die oefenruimte wél te creëren. We ontwerpen een veilige leerruimte met
          duidelijke regels, herkenbare situaties, gerichte feedback en genoeg vrijheid om te onderzoeken, te proberen
          en opnieuw te kiezen.
        </p>
      </div>
    </div>
  </section>

  <section class="sp-panel sp-panel--navy" data-sp="2">
    <div class="sp-inner">
      <div class="sp-split">
        <div>
          <span class="sp-eyebrow">Homo Ludens: de spelende mens</span>
          <h2>Play volgens <span class="hl">Huizinga</span></h2>
          <p class="sp-lead">
            Johan Huizinga zag spel niet als afleiding, maar als een fundamentele manier waarop mensen betekenis geven aan
            gedrag, regels en samenwerking. Play heeft een eigen ruimte. Er zijn duidelijke regels, een begin en een einde.
            Deelnemers stappen tijdelijk uit de dagelijkse werkelijkheid, maar nemen de ervaring serieus.
          </p>
          <p class="sp-lead">
            Die combinatie maakt Play krachtig voor leren. Het biedt vrijheid om te proberen, structuur om richting te
            houden en veiligheid om te leren van wat er gebeurt. Play maakt leren niet alleen actiever, maar ook veiliger,
            herkenbaarder en beter te volgen.
          </p>
        </div>
        <figure class="sp-hero-scene">
          <a class="sp-hero-scene__link" href="#magische-cirkel">
            <div class="sp-hero-shadow">
              <div class="sp-hero-frame">
                <img src="{{ '/assets/images/play/magische-cirkel.jpg' | relative_url }}" alt="Een open wereld met een subtiel lichtpad — de magische cirkel van leren" width="1600" height="900" loading="lazy" decoding="async">
              </div>
            </div>
          </a>
          <figcaption>Een eigen ruimte, met regels en een einde.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="sp-panel sp-panel--band" data-sp="3">
    <div class="sp-inner">
      <span class="sp-eyebrow">Wat het oplevert</span>
      <h2>Wat Play <span class="hl">oplevert</span></h2>
      <ul class="sp-pain-points sp-pain-points--pairs">
        <li>
          <strong>Veilig experimenteren</strong>
          <span>Play maakt het mogelijk om te oefenen zonder directe gevolgen in de praktijk. Deelnemers proberen keuzes uit, maken fouten en ontdekken wat werkt — zonder angst om het verkeerd te doen.</span>
        </li>
        <li>
          <strong>Actieve betrokkenheid</strong>
          <span>In Play is een passieve houding moeilijk vol te houden. Deelnemers kijken, kiezen, reageren en handelen. Ze worden geen toeschouwer van de leerstof, maar onderdeel van de ervaring.</span>
        </li>
        <li>
          <strong>Herkenbare context</strong>
          <span>Met storytelling, realistische scenario’s en MicroGames plaatsen we kennis in situaties die herkenbaar zijn voor het werk. Zo krijgt informatie betekenis.</span>
        </li>
        <li>
          <strong>Zicht op groei</strong>
          <span>Play maakt gedrag zichtbaar. Keuzes, voortgang, scores en feedback laten zien waar deelnemers sterk zijn en waar ze vastlopen. Die inzichten helpen om leerervaringen te verbeteren.</span>
        </li>
      </ul>
    </div>
  </section>

  <section class="sp-panel sp-panel--navy" data-sp="4">
    <div class="sp-inner">
      <div class="sp-split sp-split--start">
        <div>
          <span class="sp-eyebrow">We gebruiken Play vaker dan we denken</span>
          <h2>Waarom Play ook in je dagelijkse <span class="hl">werk</span> thuishoort</h2>
          <p class="sp-lead">
            We oefenen gesprekken voordat ze plaatsvinden. We maken kleine uitdagingen van herhalende taken. We proberen
            iets eerst uit in een veilige setting voordat we het echt moeten kunnen. We leren door te doen, te herhalen
            en te ontdekken wat werkt.
          </p>
          <p class="sp-lead">
            In organisaties gebeurt hetzelfde. Teams moeten omgaan met nieuwe regels, processen, verantwoordelijkheden en
            keuzes. Alleen uitleg geven is dan vaak niet genoeg. Mensen moeten kunnen verkennen wat een situatie vraagt
            en ervaren wat hun handelen veroorzaakt.
          </p>
          <p class="sp-lead">
            Play helpt om die oefenruimte bewust te ontwerpen. Het maakt leren lichter, maar niet minder serieus. Juist
            doordat mensen mogen proberen, worden ze actiever, scherper en zekerder wanneer het er in de praktijk op aankomt.
          </p>
        </div>
        <figure class="sp-aside-quote">
          <blockquote>
            Play is an inseparable aspect of human culture. The spirit of playful competition is, as a social impulse,
            older than culture itself and pervades all life like a veritable ferment.
          </blockquote>
          <figcaption>Johan Huizinga — Homo Ludens</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="sp-panel sp-panel--verhalen" data-sp="5">
    <div class="sp-inner">
      <span class="sp-eyebrow">Homo Ludens: de spelende mens</span>
      <h2>Hoe Preludens <span class="hl">Play</span> inzet</h2>
      <p class="sp-lead">
        Wij voegen spel niet achteraf toe als laagje over de inhoud. We beginnen bij de werkelijkheid. In elk
        vraagstuk zitten al spelelementen verborgen: doelen, regels, keuzes, spanning, feedback en gevolgen. Een
        medewerker moet iets herkennen. Een team moet iets afwegen. Een organisatie wil bepaald gedrag versterken.
      </p>
      <p class="sp-lead">
        Dat noemen we Find the Game. We zoeken naar het spel dat al in de praktijk aanwezig is en maken dat zichtbaar.
        Daarna vertalen we die structuur naar een leerervaring met verhalen, MicroGames, dilemma’s of andere
        spelvormen. Zo blijft Play herkenbaar, relevant en direct verbonden met de situaties waarin mensen straks
        sterker moeten handelen.
      </p>
      <p class="sp-lead">
        Geen los spel. Geen trucje om leren leuker te maken. Maar een zorgvuldig ontworpen leerroute waarin mensen
        oefenen met keuzes, kennis en gedrag die ertoe doen.
      </p>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/play/blog/' | relative_url }}">Lees de Play-blog</a>
        <a class="btn btn-secondary" href="{{ '/play/in-de-praktijk/' | relative_url }}">Play in de praktijk</a>
      </div>
    </div>
  </section>

  <section class="sp-panel sp-panel--quote" data-sp="6">
    <div class="sp-inner">
      <figure class="sp-quote">
        <blockquote>
          Every time when I work with a customer, somewhere in the process, sooner or later, I see a change in their eyes
          and posture. As if a light has been switched on. That is when I know they have found their game.
        </blockquote>
        <cite>Find the Game — Daan Groen</cite>
      </figure>
    </div>
  </section>

  <section class="sp-panel sp-panel--warm" data-sp="7">
    <div class="sp-inner">
      <h3>Start met een GameStorm</h3>
      <h2>Ontdek het spel in jouw vraagstuk</h2>
      <p class="sp-lead">
        Een goede Play-aanpak begint met een scherpe verkenning. In een GameStorm onderzoeken we jouw leeruitdaging,
        doelgroep en context. We brengen in kaart welke kennis belangrijk is, welk gedrag moet veranderen en waar in
        de praktijk spanning ontstaat. Daarna zoeken we naar de spelmechanismen die al in jouw vraagstuk verborgen zitten.
      </p>
      <div class="sp-actions">
        <a class="btn btn-primary" href="{{ '/gamestorm/' | relative_url }}">Start met een GameStorm</a>
        <a class="btn btn-secondary" href="{{ '/contact/' | relative_url }}">Neem contact op</a>
      </div>
    </div>
  </section>

  <div class="sp-footer-reveal">
    {% include footer.html %}
  </div>

</div>
