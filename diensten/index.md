---
layout: default
lang: nl
title: Leerervaringen ontwikkelen die mensen activeren
description: E-learning, MicroGame Stories, Dilemma Storytelling en Game Thinking — vier routes om kennis speelbaar en toepasbaar te maken.
body_class: page-panels
permalink: /diensten/
permalink_lang:
  en: /diensten/
---

<div class="panel-stack">
{% include panels/clips.html %}
<svg class="sp-hero-clip-def" width="0" height="0" aria-hidden="true">
  <defs>
    <clipPath id="sp-step-bl-clip" clipPathUnits="objectBoundingBox">
      <path d="M0.032 0 H0.968 Q1 0 1 0.02 V0.98 Q1 1 0.968 1 H0.2 Q0.16 1 0.132 0.972 L0.028 0.868 Q0 0.84 0 0.8 V0.02 Q0 0 0.032 0 Z"/>
    </clipPath>
  </defs>
</svg>

{% capture hero_title %}Wij ontwikkelen trainingen die mensen <span class="hl">activeren</span>.{% endcapture %}
{% capture hero_lead %}Preludens vertaalt complexe kennis naar interactieve leerervaringen met verhaal, spel en feedback. Zo worden teams uitgedaagd om situaties te verkennen, geactiveerd om keuzes te maken en gemotiveerd om kennis toe te passen in de praktijk.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Neem contact op →" primary_href="/contact/" secondary_label="Start met een GameStorm" secondary_href="/gamestorm/" %}
{% endcapture %}
{% include panels/hero.html kicker="Diensten" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="Een team dat samen een route uitzet" figure_href="/gamestorm/" figure_caption="Van kennis naar toepasbaar gedrag." %}

{% capture gap_main %}
<p class="sp-lead">Veel leertrajecten lopen vast op hetzelfde punt: medewerkers krijgen de juiste informatie aangeboden, maar vergeten die na verloop van tijd of weten niet hoe ze deze moeten toepassen. Theorie lezen, instructies bekijken of een toets maken helpt bij kennisoverdracht, maar zorgt er niet vanzelf voor dat kennis beklijft. Daarvoor moeten mensen de informatie actief verwerken, herkennen in hun eigen praktijk en er herhaaldelijk mee oefenen.</p>
<p class="sp-lead">Met MicroGame Stories versterken we kennisretentie door storytelling, actieve uitdagingen, herhaling en directe feedback te combineren. Herkenbare verhalen geven kennis context en betekenis. Korte MicroGames dagen deelnemers uit om die kennis toe te passen, keuzes te maken en van fouten te leren.</p>
<p class="sp-lead">Door oefeningen te herhalen en de moeilijkheid geleidelijk op te bouwen, wordt kennis steeds verder versterkt. Zo ontstaat een leerervaring waarin medewerkers onthouden wat belangrijk is én leren hoe ze die kennis op het juiste moment gebruiken.</p>
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
<p class="sp-lead">Elke leeruitdaging vraagt om een andere vorm. Soms wil je basiskennis trainen en borgen. Soms moeten mensen leren omgaan met lastige keuzes. En soms is eerst een scherpe analyse nodig van het gedrag in de praktijk en de doelen die daarachter zitten. Daarom werkt Preludens met vier duidelijke routes.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="onze-diensten" body=routes_body %}

{% capture slots_body %}
<div class="diensten-lijst">
  <a class="diensten-regel" id="e-learning" href="{% include panels/href.html href='/e-learning/' %}">
    <h3 class="diensten-regel__naam">E-learning</h3>
    <div class="diensten-regel__tekst">
      <p class="sp-lead">Heldere modules in Articulate Rise, waarin deelnemers in eigen tempo leren.</p>
      <p class="sp-lead diensten-regel__keuze"><b>Kies dit als</b> je kennis wilt overdragen of een proces wilt uitleggen.</p>
    </div>
    <span class="diensten-regel__pijl" aria-hidden="true">&rarr;</span>
  </a>
  <a class="diensten-regel" id="microgame-stories" href="{% include panels/href.html href='/diensten/microgame-stories/' %}">
    <h3 class="diensten-regel__naam">MicroGame Stories</h3>
    <div class="diensten-regel__tekst">
      <p class="sp-lead">Een verhaal uit de praktijk met korte MicroGames om kennis te oefenen.</p>
      <p class="sp-lead diensten-regel__keuze"><b>Kies dit als</b> je een grote groep mee wilt krijgen zonder lange modules.</p>
    </div>
    <span class="diensten-regel__pijl" aria-hidden="true">&rarr;</span>
  </a>
  <a class="diensten-regel" id="dilemma-storytelling" href="{% include panels/href.html href='/diensten/dilemma-storytelling/' %}">
    <h3 class="diensten-regel__naam">Dilemma Storytelling</h3>
    <div class="diensten-regel__tekst">
      <p class="sp-lead">Realistische scenario&rsquo;s waarin de keuzes van deelnemers gevolgen hebben.</p>
      <p class="sp-lead diensten-regel__keuze"><b>Kies dit als</b> meerdere belangen tegelijk spelen en er geen simpel antwoord is.</p>
    </div>
    <span class="diensten-regel__pijl" aria-hidden="true">&rarr;</span>
  </a>
  <a class="diensten-regel" id="game-thinking" href="{% include panels/href.html href='/diensten/game-thinking/' %}">
    <h3 class="diensten-regel__naam">Game Thinking</h3>
    <div class="diensten-regel__tekst">
      <p class="sp-lead">Find the Game: we halen doelen, regels en keuzes uit de praktijk.</p>
      <p class="sp-lead diensten-regel__keuze"><b>Kies dit als</b> nog niet vastligt welke vorm bij je vraagstuk past.</p>
    </div>
    <span class="diensten-regel__pijl" aria-hidden="true">&rarr;</span>
  </a>
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
<article><div class="sp-step-face"><h3><span>7</span> Opleveren en beheren</h3><p>Je krijgt een leerervaring die vindbaar en doorontwikkelbaar blijft — in je eigen leeromgeving of via Prepo.</p></div></article>
{% endcapture %}
{% capture route_body %}
<h3>Welke route past bij jouw uitdaging?</h3>
<h2>Van eerste vraag naar speelbare leerervaring</h2>
<p class="sp-lead">Niet elk vraagstuk vraagt om dezelfde oplossing. Daarom beginnen we bij de leeropgave. Wat moeten mensen begrijpen, oefenen of anders gaan doen? Vanuit die vraag bepalen we welke route past: een MicroGame Story, Dilemma Storytelling, Game Thinking of een eerste GameStorm.</p>
{% include panels/steps.html variant="pyramid" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="route" body=route_body %}

{% capture cta_left %}Heb je kennis die beter moet blijven hangen? Gedrag dat moet veranderen? Of een complex vraagstuk waar je team mee moet leren omgaan?{% endcapture %}
{% capture cta_right %}In een GameStorm onderzoeken we samen waar de leeruitdaging zit en welke vorm daarbij past.{% endcapture %}
{% include panels/cta.html kicker="Ontdek welke leerroute past bij jouw team" title="Zet morgen de eerste stap" left=cta_left right=cta_right stack=true primary_label="Start met een GameStorm" primary_href="/gamestorm/" secondary_label="Neem contact op" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
