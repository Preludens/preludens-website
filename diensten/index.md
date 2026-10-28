---
layout: default
lang: nl
title: Diensten
description: E-learning, MicroGame Stories, Dilemma Storytelling en Game Thinking — vier routes om kennis speelbaar en toepasbaar te maken.
body_class: page-panels
permalink: /diensten/
---

<div class="panel-stack">
{% include panels/clips.html %}
<svg class="sp-hero-clip-def" width="0" height="0" aria-hidden="true">
  <defs>
    <clipPath id="sp-slot-br-clip" clipPathUnits="objectBoundingBox">
      <path d="M0.031 0 H0.969 Q1 0 1 0.027 V0.8 Q1 0.84 0.972 0.868 L0.868 0.972 Q0.84 1 0.8 1 H0.031 Q0 1 0 0.973 V0.027 Q0 0 0.031 0 Z"/>
    </clipPath>
    <clipPath id="sp-step-bl-clip" clipPathUnits="objectBoundingBox">
      <path d="M0.032 0 H0.968 Q1 0 1 0.02 V0.98 Q1 1 0.968 1 H0.2 Q0.16 1 0.132 0.972 L0.028 0.868 Q0 0.84 0 0.8 V0.02 Q0 0 0.032 0 Z"/>
    </clipPath>
  </defs>
</svg>

<style>
  /* Alleen dit conceptblok: kop en alinea's op de linkerkant van de hero. */
  #kennis-hangen .panel__inner {
    width: min(100% - 2rem, var(--max-width));
    padding-inline: 0;
  }

  #kennis-hangen h2,
  #kennis-hangen .sp-aside-split__main {
    text-align: left;
  }

  #onze-diensten h2,
  #onze-diensten h3,
  #onze-diensten p.sp-lead {
    text-align: center;
    margin-inline: auto;
  }

  #onze-diensten .panel__inner {
    padding-bottom: 2.25rem;
  }

  /* Rechte bovenrand, met een kleinere versie van de paneelsnede rechtsboven. */
  #diensten-slots {
    --slot-jump: 22px;
    --slot-run: 26px;
    margin-top: 0;
    clip-path: polygon(
      0 0,
      calc(100% - 11rem - var(--slot-run)) 0,
      calc(100% - 11rem) var(--slot-jump),
      100% var(--slot-jump),
      100% calc(100% - var(--sp-jump)),
      50% calc(100% - var(--sp-jump)),
      calc(50% - var(--sp-run)) 100%,
      0 100%
    );
  }

  #diensten-slots .panel__inner {
    padding-top: 6rem;
    padding-bottom: calc(40px + var(--sp-jump) + 3rem);
  }

  #diensten-slots .diensten-slots {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(1.25rem, 3vw, 2rem);
  }

  #diensten-slots .diensten-slot {
    position: relative;
    height: auto;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.25rem;
    padding: calc(5px + clamp(1.35rem, 2vw, 1.75rem));
    background: var(--color-white);
    border: 0;
    border-radius: 0;
    box-shadow: none;
    filter: drop-shadow(3px 4px 4px color-mix(in srgb, var(--color-brand-navy) 24%, transparent));
    color: var(--color-white);
    clip-path: url("#sp-slot-br-clip");
    transition: transform 0.35s ease;
  }

  #diensten-slots .diensten-slot::before {
    content: "";
    position: absolute;
    inset: 5px;
    z-index: 0;
    background: var(--color-brand-navy);
    clip-path: url("#sp-slot-br-clip");
    pointer-events: none;
  }

  #diensten-slots .diensten-slot > * {
    position: relative;
    z-index: 1;
  }

  #diensten-slots .diensten-slot:hover {
    transform: translateY(-8px);
  }

  @media (prefers-reduced-motion: reduce) {
    #diensten-slots .diensten-slot {
      transition: none;
    }
  }

  #diensten-slots .diensten-slot h3 {
    margin: 0 0 0.55rem;
    text-align: left;
    color: var(--color-white);
  }

  #diensten-slots .diensten-slot h3::after {
    content: "";
    display: block;
    width: 2.4rem;
    height: 2px;
    margin-top: 0.7rem;
    background: var(--color-ink-gold);
  }

  #diensten-slots .diensten-slot h2 {
    margin: 0 0 0.85rem;
    max-width: none;
    text-align: left;
    font-size: clamp(1.85rem, 2.4vw, 2.35rem);
    color: var(--color-white);
  }

  #diensten-slots .diensten-slot p.sp-lead {
    max-width: none;
    margin: 0 0 0.75rem;
    color: var(--color-white);
  }

  #diensten-slots .diensten-slot p.sp-lead:last-child {
    margin-bottom: 0;
  }

  #diensten-slots .diensten-slot .sp-actions {
    margin-top: 0;
  }

  @media (max-width: 720px) {
    #diensten-slots .diensten-slots {
      grid-template-columns: 1fr;
    }
  }

  #route .sp-hero-steps--pyramid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.65rem 1.75rem;
    align-items: stretch;
    width: 100%;
    overflow-x: visible;
    padding-bottom: 0.35rem;
  }

  #route .sp-hero-steps--pyramid article,
  #route .sp-hero-steps--pyramid article:nth-child(n + 4) {
    grid-column: auto;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0;
    background: transparent;
    border-radius: 0;
    color: var(--color-white);
  }

  #route .sp-step-face {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: calc(5px + 1.15rem) calc(5px + 1.05rem) calc(5px + 2.75rem) calc(5px + 2.5rem);
    background: var(--color-white);
    clip-path: url("#sp-step-bl-clip");
    filter: drop-shadow(3px 4px 4px color-mix(in srgb, var(--color-brand-navy) 24%, transparent));
    color: var(--color-white);
  }

  #route .sp-step-face::before {
    content: "";
    position: absolute;
    inset: 5px;
    z-index: 0;
    background: var(--color-brand-navy);
    clip-path: url("#sp-step-bl-clip");
    pointer-events: none;
  }

  #route .sp-step-face > * {
    position: relative;
    z-index: 1;
  }

  #route .sp-hero-steps h3 {
    display: block;
    width: 100%;
    margin: 0 0 0.85rem;
    font-size: 1.35rem;
    line-height: 1.25;
    color: var(--color-white);
  }

  #route .sp-hero-steps h3 span {
    color: var(--color-white);
    font-size: 1.15rem;
  }

  #route .sp-hero-steps h3::after {
    background: var(--color-preludens-gold);
  }

  #route .sp-hero-steps p {
    max-width: none;
    font-size: 1.0625rem;
    line-height: 1.65;
    color: var(--color-white);
  }

  #route .sp-hero-steps--pyramid article:not(:last-child)::after {
    content: "→";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: calc(100% + 0.875rem);
    transform: translate(-50%, -50%);
    color: var(--color-brand-navy);
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
  }

  #route .sp-hero-steps--pyramid article:nth-child(4)::after {
    content: none;
  }

  @media (max-width: 800px) {
    #route .sp-hero-steps--pyramid {
      grid-template-columns: 1fr;
    }

    #route .sp-hero-steps--pyramid article::after {
      content: none;
    }
  }
</style>

{% capture hero_title %}Wij ontwikkelen trainingen die mensen activeren.{% endcapture %}
{% capture hero_lead %}Preludens vertaalt complexe kennis naar interactieve leerervaringen met verhaal, spel en feedback. Zo worden teams uitgedaagd om situaties te verkennen, geactiveerd om keuzes te maken en gemotiveerd om kennis toe te passen in de praktijk.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Neem contact op →" primary_href="/contact/" secondary_label="Start met een GameStorm" secondary_href="/gamestorm/" %}
{% endcapture %}
{% include panels/hero.html kicker="Diensten" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="Een team dat samen een route uitzet" figure_href="/gamestorm/" figure_caption="Van kennis naar toepasbaar gedrag." %}

{% capture gap_main %}
<p class="sp-lead">Veel leertrajecten lopen vast op hetzelfde punt: medewerkers krijgen de juiste informatie aangeboden, maar vergeten die na verloop van tijd of weten niet hoe ze deze moeten toepassen. Theorie lezen, instructies bekijken of een toets maken helpt bij kennisoverdracht, maar zorgt er niet vanzelf voor dat kennis beklijft. Daarvoor moeten mensen de informatie actief verwerken, herkennen in hun eigen praktijk en er herhaaldelijk mee oefenen.</p>
<p class="sp-lead">Met MicroGame Stories versterken we kennisretentie door storytelling, actieve uitdagingen, herhaling en directe feedback te combineren. Herkenbare verhalen geven kennis context en betekenis. Korte MicroGames dagen deelnemers uit om die kennis toe te passen, keuzes te maken en van fouten te leren.</p>
<p class="sp-lead">Door oefeningen te herhalen en de moeilijkheid geleidelijk op te bouwen, wordt kennis steeds verder versterkt. Zo ontstaat een leerervaring waarin medewerkers niet alleen begrijpen en onthouden wat belangrijk is, maar ook leren hoe ze die kennis op het juiste moment gebruiken.</p>
{% endcapture %}
{% capture gap_checks %}
{% include panels/check.html text="Storytelling geeft kennis context en betekenis." %}
{% include panels/check.html text="MicroGames maken leren actief en uitdagend." %}
{% include panels/check.html text="Directe feedback versterkt inzicht en begrip." %}
{% include panels/check.html text="Herhaling en variatie zorgen dat kennis beter blijft hangen." %}
{% include panels/check.html text="Data maakt voortgang en ontwikkeling zichtbaar." %}
{% include panels/check.html text="Reflectie verbindt het geleerde met de praktijk." %}
{% endcapture %}
{% capture gap_aside %}
{% include panels/checklist.html label="Wat onze aanpak toevoegt" items=gap_checks %}
{% endcapture %}
{% capture gap_body %}
<h2>Kennis die wordt toegepast en die blijft hangen</h2>
{% include panels/aside.html main=gap_main aside=gap_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="kennis-hangen" body=gap_body %}

{% capture routes_body %}
<h3>Vier routes om kennis speelbaar en toepasbaar te maken</h3>
<h2>Onze diensten</h2>
<p class="sp-lead">Elke leeruitdaging vraagt om een andere vorm. Soms wil je basiskennis trainen en borgen. Soms moeten mensen leren omgaan met lastige keuzes. En soms is eerst een scherpe analyse nodig van gedrag, doelen en spanningen in de praktijk. Daarom werkt Preludens met drie duidelijke routes.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="onze-diensten" body=routes_body %}

{% capture slots_body %}
<div class="diensten-slots">
  <article class="diensten-slot">
    <div>
      <h3>Kennis helder en toegankelijk aanbieden</h3>
      <h2>E-learning</h2>
      <p class="sp-lead">Niet iedere leeruitdaging vraagt om een game. Soms is een heldere, goed gestructureerde e-learning precies wat nodig is om medewerkers nieuwe kennis bij te brengen, processen uit te leggen of bestaande vaardigheden op te frissen.</p>
      <p class="sp-lead">Met Articulate Rise ontwikkelen we toegankelijke, interactieve e-learningmodules waarin informatie overzichtelijk wordt aangeboden en deelnemers in hun eigen tempo leren.</p>
    </div>
    {% include panels/actions.html primary_label="Meer over E-learning →" primary_href="/contact/" %}
  </article>
  <article class="diensten-slot">
    <div>
      <h3>Korte leerervaringen met verhaal, spel en herhaling</h3>
      <h2>MicroGame Stories</h2>
      <p class="sp-lead">MicroGame Stories zijn korte, visuele online trainingen waarin basiskennis wordt gekoppeld aan herkenbare praktijksituaties. Deelnemers volgen een verhaal, maken keuzes en oefenen tussendoor met korte MicroGames. Elk onderdeel is gericht op een concreet leerdoel. Zo krijgt kennis context, herhaling en directe feedback.</p>
      <p class="sp-lead">Een MicroGame Story is geschikt wanneer je belangrijke kennis wilt overdragen aan een grotere doelgroep, zonder mensen te belasten met lange, passieve modules.</p>
    </div>
    {% include panels/actions.html primary_label="Meer over MicroGame Stories →" primary_href="/contact/" %}
  </article>
  <article class="diensten-slot">
    <div>
      <h3>Oefenen met keuzes waar geen simpel antwoord op is</h3>
      <h2>Dilemma Storytelling</h2>
      <p class="sp-lead">Dilemma Storytelling helpt teams om lastige situaties te verkennen waarin meerdere belangen tegelijk spelen. Deelnemers krijgen realistische scenario’s voorgelegd en maken keuzes die gevolgen hebben. Niet elke situatie heeft één goed antwoord. Soms vraagt veiligheid om iets anders dan snelheid. Soms schuurt klanttevredenheid met kwaliteit. Soms moet een team leren afwegen wat op dat moment het zwaarst weegt.</p>
      <p class="sp-lead">Door keuzes zichtbaar te maken en te koppelen aan gevolgen, leren deelnemers scherper kijken naar hun eigen afwegingen.</p>
    </div>
    {% include panels/actions.html primary_label="Meer over Dilemma Storytelling →" primary_href="/contact/" %}
  </article>
  <article class="diensten-slot">
    <div>
      <h3>Eerst grip krijgen op gedrag, doelen en spelmechanismen</h3>
      <h2>Game Thinking</h2>
      <p class="sp-lead">Game Thinking is onze ontwerpaanpak voor complexe leer- en veranderopgaven. We bekijken een vraagstuk alsof het een game is. Niet om er direct een spel van te maken, maar om zichtbaar te krijgen welke doelen, regels, keuzes, spanningen, feedbackmomenten en blokkades al in de praktijk aanwezig zijn.</p>
      <p class="sp-lead">Dat noemen we Find the Game. Samen onderzoeken we wat mensen moeten leren, welk gedrag moet veranderen en waar in de praktijk beweging mogelijk is. Vanuit die analyse ontstaat een duidelijke blauwdruk voor een leerervaring, interventie of serious game.</p>
    </div>
    {% include panels/actions.html primary_label="Meer over Game Thinking →" primary_href="/contact/" %}
  </article>
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" id="diensten-slots" body=slots_body %}

{% capture route_steps %}
<article><div class="sp-step-face"><h3><span>1</span> Verkennen</h3><p>We brengen je leeropgave scherp in beeld. In een eerste gesprek of GameStorm onderzoeken we het probleem, de doelgroep, de context en de belangrijkste leerdoelen.</p></div></article>
<article><div class="sp-step-face"><h3><span>2</span> Scherpstellen</h3><p>We vertalen de leeropgave naar duidelijke doelen en ontwerpkeuzes. We maken concreet wat deelnemers na afloop moeten begrijpen, herkennen, kiezen of toepassen.</p></div></article>
<article><div class="sp-step-face"><h3><span>3</span> Inhoud verzamelen</h3><p>Jullie brengen de praktijkkennis, wij maken die speelbaar. We verzamelen trainingen, processen, casussen en expertkennis en onderzoeken hoe die kennis speelbaar wordt.</p></div></article>
<article><div class="sp-step-face"><h3><span>4</span> De juiste vorm kiezen</h3><p>Wil je basiskennis trainen, dan past een MicroGame Story. Wil je besluitvaardigheid versterken, dan Dilemma Storytelling. Is de oplossing nog niet scherp, dan starten we met Game Thinking.</p></div></article>
<article><div class="sp-step-face"><h3><span>5</span> Ontwerpen</h3><p>We vertalen kennis naar verhaal, keuzes en feedback. Samen werken we toe naar herkenbare situaties, passende spelmechanismen en een eerste verhaallijn.</p></div></article>
<article><div class="sp-step-face"><h3><span>6</span> Ontwikkelen en testen</h3><p>We maken de leerervaring klaar voor gebruik: ontwikkelen, testen en verbeteren waar nodig — van MicroGame Story tot blauwdruk of publiceerbare module.</p></div></article>
<article><div class="sp-step-face"><h3><span>7</span> Opleveren en beheren</h3><p>Je krijgt een leerervaring die beschikbaar, vindbaar en doorontwikkelbaar blijft — in je eigen leeromgeving of via Prepo.</p></div></article>
{% endcapture %}
{% capture route_body %}
<h3>Welke route past bij jouw uitdaging?</h3>
<h2>Van eerste vraag naar speelbare leerervaring</h2>
<p class="sp-lead">Niet elk vraagstuk vraagt om dezelfde oplossing. Daarom beginnen we niet bij de vorm, maar bij de leeropgave. Wat moeten mensen begrijpen, oefenen of anders gaan doen? Vanuit die vraag bepalen we welke route past: een MicroGame Story, Dilemma Storytelling, Game Thinking of een eerste GameStorm.</p>
{% include panels/steps.html variant="pyramid" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="route" body=route_body %}

{% capture cta_left %}Heb je kennis die beter moet blijven hangen? Gedrag dat moet veranderen? Of een complex vraagstuk waar je team mee moet leren omgaan?{% endcapture %}
{% capture cta_right %}In een GameStorm onderzoeken we samen waar de leeruitdaging zit en welke vorm daarbij past.{% endcapture %}
{% include panels/cta.html kicker="Ontdek welke leerroute past bij jouw team" title="Zet morgen de eerste stap" left=cta_left right=cta_right stack=true primary_label="Start met een GameStorm" primary_href="/gamestorm/" secondary_label="Neem contact op" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
