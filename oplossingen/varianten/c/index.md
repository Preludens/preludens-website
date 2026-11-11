---
layout: landing
lang: nl
title: "Betere praktijkdagen (variant C: zelfselectie)"
description: >-
  Geef je de training of beslis je erover? Kies je rol en krijg het deel van
  het verhaal dat bij jou past. Concept voor casus 1, variant C.
permalink: /oplossingen/varianten/c/
casus: praktijkdagen
body_class: page-panels landing-praktijkdagen landing-variant
# Vergelijkingsvariant, geen pagina voor zoekmachines.
robots: "noindex, nofollow"
sitemap: false
---

{%- comment -%}
  Variant C — zelfselectie. Zie _marketing/landingspagina-varianten.md.

  Tactiek: een kleine eerste toezegging. De bezoeker kiest eerst een rol en
  krijgt daarna een pad op maat. Casus 1 heeft twee lezers: de instructeur
  die het probleem voelt maar niet koopt, en de koper die beslist maar niet
  voor de groep staat. Hier krijgt elk pad een eigen kop (formulering A en A2
  uit het plan van aanpak), eigen bezwaren en een eigen vervolgstap.

  Werking (assets/js/landing-varianten.js):
  - Elk blok met data-path-block hoort bij één of meer paden. Tot er gekozen
    is, staan ze dicht. Zonder JavaScript staan ze allemaal open, onder
    elkaar, en springen de keuzes naar hun anker.
  - ?pad=instructeur, ?pad=koper of ?pad=beide kiest vooraf. Gebruik dat in
    de berichten aan de twee helften van de lijst van 40.
  - De keuze is het event path_select (path_choice, path_source); de
    inschatting in het instructeurspad is question_answer (herhaal-tijd).
  - Het formulier hoort bij geen pad: het staat er altijd, ook voor wie niet
    kiest.

  De id's van de panelen zijn de cta_position van cta_click. Laat ze staan.
{%- endcomment -%}

{% include panels/clips.html %}
{% assign demo_url = site.preludens.demo.url %}
{% capture fwd_url %}{{ page.url | absolute_url }}?pad=koper&utm_source=doorgestuurd&utm_medium=email&utm_campaign=exp1-praktijkdagen{% endcapture %}
{% capture fwd_body %}Dit herken ik van onze praktijkdagen. Kijk eens naar het deel voor wie over de voorbereiding beslist: {{ fwd_url }}{% endcapture %}

<div class="panel-stack" data-landing-variant="c">

<section class="panel panel--hero lv-hero lv-hero--text" id="hero">
  <div class="panel__inner">
    <div class="sp-hero-copy lv-hero__wide">
      <h1>De praktijkdag begint nog steeds met theorie</h1>
      <p class="sp-lead">Ook als de e-learning vooraf gedaan is en de toets gehaald. Wat je eraan kunt doen, hangt af van waar je staat.</p>

      <div class="lv-paths" data-lv-paths>
        <p class="lv-paths__q" id="lv-paths-q">Waar sta jij?</p>
        <div class="lv-paths__options" role="group" aria-labelledby="lv-paths-q">
          <a class="lv-paths__option" href="#pad-instructeur" data-path="instructeur">
            <strong>Ik geef de training</strong>
            <span>Je staat zelf voor de groep</span>
          </a>
          <a class="lv-paths__option" href="#pad-koper" data-path="koper">
            <strong>Ik beslis over de training</strong>
            <span>Je kiest wat er vooraf en op de dag gebeurt</span>
          </a>
          <a class="lv-paths__option" href="#pad-instructeur" data-path="beide">
            <strong>Allebei</strong>
            <span>Je geeft de dag en kiest de voorbereiding</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{%- comment -%} Pad: instructeur (en allebei) {%- endcomment -%}
<div data-path-block="instructeur beide">
{% capture instructeur %}
<h2 tabindex="-1">Je herhaalt op de dag wat ze in de e-learning al gehad hebben</h2>
<p class="sp-lead">Je weet 's&nbsp;ochtends niet wie wat begrepen heeft, dus begin je bij het begin. Dat is goed lesgeven. Het kost alleen tijd die je liever in de hal had gebruikt.</p>
<div class="lv-question" data-lv-question data-question-id="herhaal-tijd">
  <p class="lv-question__q" id="lv-estimate-q">Hoeveel van je ochtend gaat er op aan herhalen?</p>
  <div class="lv-question__options" role="group" aria-labelledby="lv-estimate-q">
    <button type="button" data-answer="kwartier">Een kwartier</button>
    <button type="button" data-answer="uur">Ongeveer een uur</button>
    <button type="button" data-answer="halve-ochtend">Een halve ochtend</button>
    <button type="button" data-answer="meer">Meer dan dat</button>
  </div>
  <div class="lv-question__reply" aria-live="polite">
    <p data-reply-for="kwartier" hidden>Dat is weinig. Dan is de vraag eerder of je weet wie wat mist. Dat laat het voorbeeld hieronder zien.</p>
    <p data-reply-for="uur" hidden>Op een praktijkdag van zes uur is dat een zesde van de dag. Het voorbeeld hieronder laat zien hoe je dat uur gerichter besteedt.</p>
    <p data-reply-for="halve-ochtend" hidden>Dan gaat de ochtend op aan wat ze al gehad hebben, en begint het oefenen pas tegen elven. Het voorbeeld hieronder laat zien waar je dan wel begint.</p>
    <p data-reply-for="meer" hidden>Dan is de praktijkdag een theoriedag met een stuk praktijk. Daar is het meeste te winnen.</p>
  </div>
</div>
{% endcapture %}
{% include panels/panel.html variant="paper" id="pad-instructeur" body=instructeur %}
</div>

{%- comment -%} Pad: koper (en allebei) {%- endcomment -%}
<div data-path-block="koper beide">
{% capture koper_items %}
{% include panels/value.html title="Een voorbereiding die blijft hangen" text="Korte speelbare situaties uit het vak, met uitleg bij elke keuze. Geen hoofdstuk om door te klikken." %}
{% include panels/value.html title="Inzicht voor de instructeur" text="Vóór de dag is te zien waar de groep staat, zodat de dag daar begint." %}
{% include panels/value.html title="In jullie eigen leeromgeving" text="Als SCORM-bestand naast de e-learning die er al is, of via een gewone link." %}
{% endcapture %}
{% capture koper %}
<h2 tabindex="-1">De praktijkdag is al korter gemaakt, en begint nog steeds met theorie</h2>
<p class="sp-lead">De klant wilde minder verlet. Dus kwam er een e-learning vooraf en werd de dag korter. Toch melden instructeurs dat ze de ochtend kwijt zijn aan uitleg, en dat het oefenen in de knel komt.</p>
<p class="sp-lead">Een gehaalde toegangstoets zegt dat iemand de stof die week kende. Niet wat er op de dag nog van over is.</p>
{% include panels/values.html label="Wat je krijgt" items=koper_items %}
<p class="lv-claim">We vervangen de praktijkdag niet. We zorgen dat die dag naar oefenen gaat.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="pad-koper" body=koper %}
</div>

{%- comment -%} Voor alle paden: de CO-melder {%- endcomment -%}
<div data-path-block="instructeur koper beide">
{% capture voorbeeld %}
<h2 tabindex="-1">Speel het zelf</h2>
<p class="sp-lead sp-lead--center">Hang de CO-melder op, zoals monteurs dat in CO Wijzer oefenen. Daarna zie je wat de instructeur ziet. Het duurt nog geen minuut.</p>
<div class="lv-inline-play">
  {% include varianten/co-melder.html position="voorbeeld" %}
  {% if demo_url and demo_url != "" %}
  <div class="lv-after">
    {% include panels/actions.html primary_label="Speel de hele demo (2 minuten)" primary_href=demo_url primary_demo=true casus="praktijkdagen" primary_position="voorbeeld" %}
  </div>
  {% endif %}
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" id="voorbeeld" body=voorbeeld %}
</div>

{%- comment -%} Pad: instructeur. Doorsturen is hier de echte vervolgstap. {%- endcomment -%}
<div data-path-block="instructeur">
{% capture instr_vragen %}
{% include panels/faq-item.html question="Wordt mijn dag dan nog korter?" answer="Daar sturen we niet op. Het doel is meer oefentijd op dezelfde dag. Onderzoek naar voorbereiding vooraf vindt het grootste effect juist als de contacttijd niet wordt ingekort." %}
{% include panels/faq-item.html question="Wat moet ik er zelf voor doen?" answer="Vertellen waar het op de dag misgaat en welke uitleg elke keer terugkomt. Daar beginnen we mee. Daarna kijk je vóór de dag naar het overzicht van je groep." %}
{% include panels/faq-item.html question="Ik heb niets te zeggen over de e-learning." answer="Dat hoeft ook niet. Dit komt ernaast, en aan de e-learning hoeft niets te veranderen. Wie de voorbereiding kiest, moet het wel willen. Daarvoor is de knop hieronder." %}
{% endcapture %}
{% capture doorsturen %}
<h2 tabindex="-1">Stuur het door naar wie over de voorbereiding beslist</h2>
<p class="sp-lead">Jij merkt het op de dag, iemand anders kiest de e-learning. Stuur deze pagina door: de link opent bij het deel voor wie beslist.</p>
<div class="sp-actions">
  <a class="btn btn-primary" href="mailto:?subject={{ 'De ochtend van onze praktijkdag' | url_encode | replace: '+', '%20' }}&amp;body={{ fwd_body | strip | url_encode | replace: '+', '%20' }}" data-cta-position="doorsturen">Stuur deze pagina door</a>
  <a class="btn btn-secondary" href="#actie">Of laat zelf iets van je horen</a>
</div>
{% include panels/faq.html label="Vragen van instructeurs" items=instr_vragen %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="doorsturen" body=doorsturen %}
</div>

{%- comment -%} Pad: koper (en allebei) {%- endcomment -%}
<div data-path-block="koper beide">
{% capture bewijs %}
<div class="lv-proof">
  <img src="{{ '/assets/images/verhalen/co-wijzer-slaapkamer.jpg' | relative_url }}" alt="Scène uit CO Wijzer: een slaapkamer in doorsnede, waar de speler een CO-melder op slaaphoogte hangt" width="1024" height="514" loading="lazy" decoding="async">
  <div>
    <p>21CC Education kwam bij ons met deze vraag: hun praktijkdagen moesten meer opleveren, en daar hoorde een voorbereiding vooraf bij. Met hen en Studium maakten we <strong>CO Wijzer</strong>.</p>
    <p class="lv-proof__source">Bij een andere opdrachtgever, een vijfdaagse training op locatie, konden twee dagen vervallen toen de deelnemers vooraf oefenden. Dat is één traject en geen belofte: wij sturen op meer oefentijd, niet op minder dagen.</p>
  </div>
</div>
{% endcapture %}
{% include panels/panel.html variant="paper" id="bewijs" body=bewijs %}

{% capture koper_vragen %}
{% include panels/faq-item.html question="Draait het in onze leeromgeving?" answer="Ja. Je krijgt een SCORM-bestand dat je in je eigen LMS zet, naast de e-learning die er al staat. Zonder LMS kan het ook via een gewone link, in onze omgeving Prepo." %}
{% include panels/faq-item.html question="Mag dit naast de verplichte e-learning?" answer="Het komt ernaast, niet in de plaats ervan. Is de e-learning een eis van een exameninstelling of normsteller, dan blijft die zoals hij is. Of er voor jullie training iets geregeld moet worden, zoeken we per training samen uit." %}
{% include panels/faq-item.html question="De e-learning komt van onze leverancier. Moeten we daaraan sleutelen?" answer="Nee. Aan wat je hebt ingekocht hoeft niets te veranderen. Heb je de e-learning zelf gemaakt, dan kan hij misschien korter. Dat is een keuze, geen voorwaarde." %}
{% include panels/faq-item.html question="Onze deelnemers zijn geen gamers." answer="Dat hoeven ze ook niet te zijn. Een situatie duurt een paar minuten en lijkt op hun werk: een klant, een installatie, een keuze." %}
{% include panels/faq-item.html question="Wat kost het?" answer="Dat hangt af van het aantal situaties en van waar het draait. Je kunt klein beginnen: één moment uit één training. Dan weet je of het werkt voordat je meer doet." %}
{% endcapture %}
{% capture bezwaren %}
<h2>Wat je je misschien afvraagt</h2>
{% include panels/faq.html label="Vragen van wie beslist" items=koper_vragen %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="bezwaren" body=bezwaren %}
</div>

{% include varianten/afspraak-embed.html %}

{% include panels/form.html id="actie" casus="praktijkdagen" title="Of stuur ons een bericht" lead="Vertel om welke training het gaat. We nemen contact met je op." submit_note="Je krijgt een persoonlijk antwoord, geen nieuwsbrief." %}

</div>

<script src="{{ '/assets/js/landing-varianten.js' | relative_url }}" defer></script>
