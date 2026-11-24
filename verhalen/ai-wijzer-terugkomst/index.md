---
layout: default
lang: nl
title: "Preview: het blok na de demo"
description: Drie ontwerpen voor het blok dat verschijnt als iemand terugkomt van de demo AI Wijzer.
permalink: /verhalen/ai-wijzer/terugkomst/
body_class: page-panels page-demo
casus: preview-demo-terug
# Werkpagina om te kiezen, geen pagina voor zoekmachines.
robots: "noindex, nofollow"
sitemap: false
---
{%- comment -%}
  Drie varianten van het blok "Bedankt voor het spelen" op
  /verhalen/ai-wijzer/, elk vanuit een andere ontwerpmethode. Kies er één;
  die gaat naar _verhalen/ai-wijzer.md en deze pagina kan weg.

  De formulieren zijn echt: ze posten naar HubSpot met casus
  "preview-demo-terug", zodat een testinzending als test herkenbaar is.
{%- endcomment -%}
{% include locale.html %}
{% include panels/clips.html %}
{% assign titel = '/assets/images/demo/bewust-met-ai-titel.jpg' | relative_url %}

<div class="panel-stack">

{% capture intro %}
<h1>Het blok na de demo, drie keer</h1>
<p class="sp-lead">Dit blok klapt open onder de hero als iemand terugkomt van de demo AI Wijzer. Hieronder staan drie ontwerpen, elk vanuit een andere methode. Ze staan onder elkaar; op de echte pagina staat er straks één.</p>
<p><a href="{{ '/verhalen/ai-wijzer/' | relative_url }}">Naar de demopagina zoals hij nu is</a></p>
{% endcapture %}
{% include panels/panel.html variant="paper" body=intro %}

{%- comment -%} ===== A. Peak-end-regel ===== {%- endcomment -%}
<div class="dt-label">
  <div class="panel__inner">
    <p class="dt-label__name"><strong>A · Peak-end-regel</strong> (Kahneman)</p>
    <p>Mensen onthouden een ervaring vooral aan het hoogtepunt en aan het einde. Dit blok maakt het einde van de demo een moment: het donkere kantoor uit de game loopt door, het spelen wordt bevestigd, en de vraag is kort. Eén regel tekst, drie velden, één knop.</p>
  </div>
</div>
<section class="dt-peak" aria-labelledby="dt-peak-title">
  <div class="dt-peak__art" style="background-image: url('{{ titel }}');" aria-hidden="true"></div>
  <div class="panel__inner dt-peak__inner">
    <p class="dt-peak__badge">
      <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false"><path d="M4.5 10.5 8.2 14 15.5 6.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Je hebt AI Wijzer gespeeld
    </p>
    <h2 id="dt-peak-title">Bedankt voor het spelen</h2>
    <p class="sp-lead">Wil je dit ook voor jouw organisatie, met jullie eigen AI-beleid? Laat je gegevens achter, dan nemen we contact met je op.</p>
    {% include panels/form.html id="dt-peak-form" bare=true casus=page.casus compact=true message="Preview A (peak-end): wil contact na de demo AI Wijzer" title="" submit_label="Neem contact met me op" submit_note="Liever zelf bellen? 015 202 404 7" %}
  </div>
</section>

{%- comment -%} ===== B. Eén vraag tegelijk ===== {%- endcomment -%}
<div class="dt-label">
  <div class="panel__inner">
    <p class="dt-label__name"><strong>B · Eén vraag tegelijk</strong> (progressive disclosure)</p>
    <p>Eerst één vraag met twee antwoorden, pas daarna velden. Een ja-of-nee kost geen moeite, en wie ja zegt, vult de velden daarna makkelijker in (foot-in-the-door). Wie nee zegt, gaat gewoon verder op de pagina, zonder formulier dat in de weg staat.</p>
  </div>
</div>
<section class="panel panel--paper dt-step" aria-labelledby="dt-step-title" data-dt-step>
  <div class="panel__inner">
    <div class="dt-step__card">
      <img class="dt-step__thumb" src="{{ '/assets/images/demo/bewust-met-ai-m3-beeld-3-eindcontrole.jpg' | relative_url }}" alt="" width="900" height="900" loading="lazy" decoding="async">
      <div class="dt-step__body">
        <p class="dt-step__kicker">Bedankt voor het spelen</p>
        <h2 id="dt-step-title">Wil je zo'n MicroGame voor jouw organisatie?</h2>
        <div class="dt-step__choice" data-dt-choice>
          <button class="btn btn-primary" type="button" data-dt-yes>Ja, neem contact met me op</button>
          <a class="btn btn-secondary" href="#dt-debrief" data-dt-no>Eerst verder lezen</a>
        </div>
        <div class="dt-step__form" data-dt-form hidden>
          <p class="dt-step__reply">Fijn. Hoe kunnen we je bereiken?</p>
          {% include panels/form.html id="dt-step-form" bare=true casus=page.casus compact=true message="Preview B (een vraag tegelijk): wil contact na de demo AI Wijzer" title="" submit_label="Neem contact met me op" submit_note="We reageren binnen één werkdag." %}
        </div>
      </div>
    </div>
  </div>
</section>

{%- comment -%} ===== C. Debriefing ===== {%- endcomment -%}
<div class="dt-label">
  <div class="panel__inner">
    <p class="dt-label__name"><strong>C · Debriefing</strong> (leercyclus van Kolb)</p>
    <p>Na een ervaring komt de reflectie; zo eindigen onze eigen MicroGames ook. Het blok zet eerst op een rij wat de speler net heeft geoefend: de vier controles uit missie 3. Daarnaast de vraag, als logisch vervolg: dit kan jouw team ook leren.</p>
  </div>
</div>
<section class="panel panel--mist dt-debrief" id="dt-debrief" aria-labelledby="dt-debrief-title">
  <div class="panel__inner">
    <div class="dt-debrief__grid">
      <div class="dt-debrief__recap">
        <p class="dt-debrief__kicker">Bedankt voor het spelen</p>
        <h2 id="dt-debrief-title">Dit heb je net geoefend</h2>
        <p>Vier controles voordat je iets naar een AI-dienst stuurt:</p>
        <ol class="dt-debrief__checks">
          <li><strong>Wat is nodig?</strong> Alleen de informatie die het antwoord beter maakt.</li>
          <li><strong>Mag het hier?</strong> Past deze informatie bij deze AI-omgeving en dit account?</li>
          <li><strong>Kloppen de instellingen?</strong> Modeltraining uit is nog niet hetzelfde als niet bewaren.</li>
          <li><strong>Klopt de hele prompt?</strong> Inclusief bijlagen. Twijfel je, verstuur dan nog niet.</li>
        </ol>
      </div>
      <div class="dt-debrief__ask">
        <h3>Wil je dat jouw team dit ook kan?</h3>
        <p>Met jullie eigen AI-beleid, jullie tools en jullie situaties. Laat je gegevens achter, dan nemen we contact op.</p>
        {% include panels/form.html id="dt-debrief-form" bare=true casus=page.casus compact=true message="Preview C (debriefing): wil contact na de demo AI Wijzer" title="" submit_label="Neem contact met me op" submit_note="Liever bellen? 015 202 404 7" %}
      </div>
    </div>
  </div>
</section>

{% include panels/footer-reveal.html %}
</div>

<script>
  /* Variant B: eerst de vraag, dan het formulier. */
  (function () {
    var root = document.querySelector("[data-dt-step]");
    if (!root) return;
    var choice = root.querySelector("[data-dt-choice]");
    var form = root.querySelector("[data-dt-form]");
    root.querySelector("[data-dt-yes]").addEventListener("click", function () {
      choice.hidden = true;
      form.hidden = false;
      var first = form.querySelector("input:not([type=hidden])");
      if (first) first.focus();
    });
  })();
</script>
