---
layout: landing
lang: nl
title: "Betere praktijkdagen (variant A: demo eerst)"
description: >-
  Speel twee situaties uit een voorbereiding die blijft hangen, en zie wat de
  instructeur daarna 's ochtends weet. Concept voor casus 1, variant A.
permalink: /oplossingen/varianten/a/
casus: praktijkdagen
body_class: page-panels landing-praktijkdagen landing-variant
# Vergelijkingsvariant, geen pagina voor zoekmachines.
robots: "noindex, nofollow"
sitemap: false
---

{%- comment -%}
  Variant A — demo eerst. Zie _marketing/landingspagina-varianten.md.

  Tactiek: laten ervaren vóór uitleggen. De CO-melder-interactie staat in de
  hero, de tekst eromheen is zo kort als het kan. Wat erna komt
  is alleen wat je nodig hebt om ja te zeggen: wat je net zag, één bewijs en
  het formulier.

  Volgorde: hero met interactie → wat je net speelde → bewijs → actie.
  Dat wijkt bewust af van de vaste blokvolgorde van de stubs: dit is een
  vergelijking van formats, niet van boodschappen.

  De id's van de panelen zijn de cta_position van cta_click: hero, gezien,
  bewijs, actie. Laat ze staan.
{%- endcomment -%}

{% include panels/clips.html %}
{% assign demo_url = site.preludens.demo.url %}

<div class="panel-stack" data-landing-variant="a">

<section class="panel panel--hero lv-hero lv-hero--play" id="hero">
  <div class="panel__inner">
    <div class="sp-hero-copy lv-hero__copy">
      <h1>Je herhaalt op de trainingsdag wat ze in de e-learning al gehad hebben</h1>
      <p class="sp-lead">Hang de CO-melder op, zoals een monteur dat vóór de praktijkdag oefent. Daarna zie je wat jij als instructeur 's&nbsp;ochtends weet.</p>
    </div>

    <div class="lv-hero__play">
      {% include varianten/co-melder.html position="hero" %}
    </div>

    <div class="lv-hero__next">
      <p class="lv-claim">We vervangen de praktijkdag niet. We zorgen dat die dag naar oefenen gaat.</p>
      {% if demo_url and demo_url != "" %}
        {% include panels/actions.html primary_label="Speel de hele demo (2 minuten)" primary_href=demo_url primary_demo=true casus="praktijkdagen" primary_position="hero" secondary_label="Plan een kennismaking" secondary_href="#actie" %}
      {% else %}
        {%- comment -%} Beslissing F: zolang er geen demo-URL is, is het formulier de volgende stap. {%- endcomment -%}
        {% include panels/actions.html primary_label="Plan een kennismaking" primary_href="#actie" primary_position="hero" %}
      {% endif %}
    </div>
  </div>
</section>

{% capture gezien_items %}
{% include panels/value.html title="Deelnemers oefenen vooraf met keuzes" text="Korte situaties uit hun eigen vak, met uitleg bij elke keuze. Er is geen hoofdstuk om door te klikken." %}
{% include panels/value.html title="Jij ziet waar de groep staat" text="Vóór de dag weet je welke situatie bij wie misging. Daar begin je, in plaats van bij het begin." %}
{% include panels/value.html title="Het past naast wat er al is" text="Het draait als SCORM-bestand in jullie eigen leeromgeving, naast de e-learning die er al ligt." %}
{% endcapture %}
{% capture gezien %}
<h2>Wat je net speelde</h2>
{% include panels/values.html label="Wat je net speelde" items=gezien_items %}
{% include varianten/herkenning.html %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="gezien" body=gezien %}

{% capture bewijs %}
<div class="lv-proof">
  <img src="{{ '/assets/images/verhalen/co-wijzer-slaapkamer.jpg' | relative_url }}" alt="Scène uit CO Wijzer: een slaapkamer in doorsnede, waar de speler een CO-melder op slaaphoogte hangt" width="1024" height="514" loading="lazy" decoding="async">
  <div>
    <p>De slaapkamer komt uit <strong>CO Wijzer</strong>, dat we maakten met 21CC Education en Studium. Monteurs oefenen daarin met risico's die je niet kunt zien of ruiken.</p>
    <p class="lv-proof__source">Ook van ons: Basis Koeltechniek, negen MicroGames voor installatiemonteurs, met Climatools, 21CC Learning en Studium.</p>
  </div>
</div>
{% endcapture %}
{% include panels/panel.html variant="paper" id="bewijs" body=bewijs %}

{% include panels/form.html id="actie" casus="praktijkdagen" title="Versterk jouw praktijkdag" lead="Vertel om welke training het gaat. We kijken samen welk moment van de dag je als eerste terug wilt." submit_note="Je krijgt een persoonlijk antwoord, geen nieuwsbrief." %}

</div>

<script src="{{ '/assets/js/landing-varianten.js' | relative_url }}" defer></script>
