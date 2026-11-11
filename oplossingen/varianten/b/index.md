---
layout: landing
lang: nl
title: "Betere praktijkdagen (variant B: verhaal en bezwaren)"
description: >-
  Waarom de praktijkdag nog steeds met theorie begint, wat een voorbereiding
  anders kan doen en hoe dat naast de verplichte e-learning past. Concept voor
  casus 1, variant B.
permalink: /oplossingen/varianten/b/
casus: praktijkdagen
body_class: page-panels landing-praktijkdagen landing-variant
# Vergelijkingsvariant, geen pagina voor zoekmachines.
robots: "noindex, nofollow"
sitemap: false
---

{%- comment -%}
  Variant B — verhaal en bezwaren. Zie _marketing/landingspagina-varianten.md.

  Tactiek: eerst vertrouwen. Voor koud verkeer uit een persoonlijk bericht:
  iemand die niet om deze pagina vroeg, wil eerst weten of we het probleem
  begrijpen en of het past bij wat er al is, en speelt of vult pas daarna
  iets in. De pagina volgt de verhaallijn uit content-structuur-en-copy.md:
  herkenning → inzicht → aanpak → voorbeeld → bewijs → bezwaren → actie.

  De id's van de panelen zijn de cta_position van cta_click. Laat ze staan.
{%- endcomment -%}

{% include panels/clips.html %}
{% assign demo_url = site.preludens.demo.url %}

<div class="panel-stack" data-landing-variant="b">

<section class="panel panel--hero lv-hero lv-hero--text" id="hero">
  <div class="panel__inner">
    <div class="sp-hero-copy">
      <h1>Je herhaalt op de trainingsdag wat ze in de e-learning al gehad hebben</h1>
      <p class="sp-lead">De e-learning is gedaan en de toets is gehaald. Toch begint de praktijkdag met een rondje theorie, voor de zekerheid. Dat ligt niet aan de instructeur, en ook niet aan de e-learning.</p>
      <p class="sp-lead">Hieronder lees je waarom het zo loopt, wat een voorbereiding anders kan doen, en hoe dat past naast wat jullie al hebben.</p>
      {% include panels/actions.html primary_label="Speel een voorbeeld" primary_href="#voorbeeld" primary_position="hero" secondary_label="Laat zien hoe dit bij jouw training past" secondary_href="#actie" %}
    </div>
  </div>
</section>

{% capture momenten %}
{% include panels/value.html title="De avond ervoor" text="Een deel van de groep klikt de e-learning op de laatste avond door. De toets halen ze. Wat ze geleerd hebben, is drie weken later grotendeels weg." %}
{% include panels/value.html title="Kwart over negen" text="Je weet niet wie wat begrepen heeft. Dus begin je bij het begin, zodat niemand achterblijft." %}
{% include panels/value.html title="Na de lunch" text="Het oefenen in de hal schuift op. Wat overblijft, gaat sneller dan je zou willen." %}
{% endcapture %}
{% capture herkenning %}
<h2>Drie momenten van een praktijkdag</h2>
{% include panels/values.html label="Drie momenten van een praktijkdag" items=momenten %}
{% include varianten/herkenning.html %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="herkenning" body=herkenning %}

{% capture inzicht %}
<h2>Terughalen is goed lesgeven</h2>
<p class="sp-lead sp-lead--center">Een instructeur die op de dag de theorie ophaalt, doet niets verkeerd. Onderzoek naar het testeffect laat zien dat stof beter blijft hangen als je hem ophaalt en toepast, dan als je hem nog eens leest.</p>
<p class="sp-lead sp-lead--center">Het verschil zit in wat er vooraf gebeurde. Een e-learning laat lezen en klikken. Een gehaalde toegangstoets zegt dat iemand de stof die week kende, niet wat er op de dag nog van over is.</p>
<p class="sp-lead sp-lead--center">Hebben deelnemers vooraf al moeten kiezen, in situaties uit hun eigen werk, dan gaat het terughalen op de dag sneller. En de instructeur weet waar de groep staat.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="inzicht" body=inzicht %}

{% capture stappen %}
{% include panels/step.html num="1" title="We zoeken de momenten waar de dag op vastloopt" text="Samen met jullie instructeurs: welke uitleg komt elke dag opnieuw terug, en waar gaat het in de hal mis?" %}
{% include panels/step.html num="2" title="Die momenten worden korte speelbare situaties" text="De deelnemer kiest, ziet wat er gebeurt en krijgt uitleg. Een paar minuten per situatie, in jullie eigen leeromgeving." %}
{% include panels/step.html num="3" title="De instructeur ziet vooraf waar de groep staat" text="De dag begint bij wat misging, en niet bij hoofdstuk één. De rest van de tijd is voor oefenen." %}
{% endcapture %}
{% capture werkt %}
<h2>Hoe het werkt</h2>
{% include panels/steps.html variant="cards" items=stappen %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="hoe-het-werkt" body=werkt %}

{% capture voorbeeld %}
<h2>Speel het zelf</h2>
<p class="sp-lead sp-lead--center">Hang de CO-melder op, zoals monteurs dat in CO Wijzer oefenen. Daarna zie je wat de instructeur ziet. Het duurt nog geen minuut.</p>
<div class="lv-inline-play">
  {% include varianten/co-melder.html position="voorbeeld" %}
  <div class="lv-after">
    <p class="lv-claim">We vervangen de praktijkdag niet. We zorgen dat die dag naar oefenen gaat.</p>
    {% if demo_url and demo_url != "" %}
      {% include panels/actions.html primary_label="Speel de hele demo (2 minuten)" primary_href=demo_url primary_demo=true casus="praktijkdagen" primary_position="voorbeeld" %}
    {% endif %}
  </div>
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" id="voorbeeld" body=voorbeeld %}

{% capture bewijs %}
<h2>Waar het eerder werkte</h2>
<div class="lv-evidence">
  {% assign co_video = site.media_base | append: "cowijzer-melder-explainer.mp4?v=2" %}
  {% include panels/video.html src=co_video poster="/assets/images/verhalen/co-wijzer-melder-video-poster.jpg" title="CO Wijzer explainer" label="Explainer van CO Wijzer: een huis in doorsnede waarin per ruimte een CO-melder wordt geplaatst" caption="Een minuut uit CO Wijzer. Per ruimte hang je een CO-melder op; in de slaapkamer gaat het eerst mis." download_label="Download de video (mp4, 2,5 MB)" %}
  <div>
    <p class="sp-lead">21CC Education kwam bij ons met de vraag die op deze pagina staat: hun praktijkdagen moesten meer opleveren, en daar hoorde een voorbereiding vooraf bij. Met hen en Studium maakten we <strong>CO Wijzer</strong>, waarin monteurs oefenen met risico's die je niet kunt zien of ruiken.</p>
    <p class="sp-lead">Bij een andere opdrachtgever, een vijfdaagse training op locatie, konden twee dagen vervallen toen de deelnemers vooraf oefenden. Dat is één traject en geen belofte. Wij sturen op meer oefentijd op de dag, niet op minder dagen.</p>
  </div>
</div>
{% endcapture %}
{% include panels/panel.html variant="paper" id="bewijs" body=bewijs %}

{% capture vragen %}
{% include panels/faq-item.html question="Vervangt dit de praktijkdag?" answer="Nee. We vervangen de praktijkdag niet. Wat in de hal geoefend moet worden, blijft in de hal. De voorbereiding zorgt dat er meer tijd voor overblijft." open=true %}
{% include panels/faq-item.html question="Draait het in onze leeromgeving?" answer="Ja. Je krijgt een SCORM-bestand dat je in je eigen LMS zet, naast de e-learning die er al staat. Zonder LMS kan het ook via een gewone link, in onze omgeving Prepo." %}
{% include panels/faq-item.html question="Mag dit naast de verplichte e-learning?" answer="Het komt ernaast, niet in de plaats ervan. Is de e-learning een eis van een exameninstelling of normsteller, dan blijft die zoals hij is. Of er voor jullie training iets geregeld moet worden, zoeken we per training samen uit." %}
{% include panels/faq-item.html question="De e-learning komt van onze leverancier. Moeten we daaraan sleutelen?" answer="Nee. Aan wat je hebt ingekocht hoeft niets te veranderen. Heb je de e-learning zelf gemaakt, dan kan hij misschien korter: wat deelnemers al spelend oefenen, hoef je niet ook nog uit te leggen. Dat is een keuze, geen voorwaarde." %}
{% include panels/faq-item.html question="Onze deelnemers zijn geen gamers." answer="Dat hoeven ze ook niet te zijn. Een situatie duurt een paar minuten en lijkt op hun werk: een klant, een installatie, een keuze. Wie liever met de handen werkt dan achter een scherm zit, kan het ook op de telefoon spelen." %}
{% include panels/faq-item.html question="Wordt de praktijkdag dan nog korter?" answer="Dat beslissen jullie. Wij sturen op meer oefentijd op dezelfde dag. Onderzoek naar voorbereiding vooraf vindt het grootste effect juist als de contacttijd niet wordt ingekort." %}
{% include panels/faq-item.html question="Wie ziet wat deelnemers vooraf deden?" answer="De instructeur, als jullie dat willen. In Prepo zie je deelname, voortgang en scores. Wat je per groep te zien krijgt, stemmen we af op wat een instructeur 's&nbsp;ochtends nodig heeft." %}
{% include panels/faq-item.html question="Kunnen we dit niet zelf maken, met een AI-tool?" answer="Vragen en een quiz maak je daar prima mee. Wat een tool niet levert, is de vertaling van vakinhoud naar een situatie die klopt: met de instructeurs uitzoeken waar het misgaat en waarom. Daar zit ons werk." %}
{% include panels/faq-item.html question="Wat kost het?" answer="Dat hangt af van het aantal situaties en van waar het draait. Je kunt klein beginnen: één moment uit één training. Dan weet je of het werkt voordat je meer doet." %}
{% endcapture %}
{% capture bezwaren %}
<h2>Vragen die je nu misschien hebt</h2>
{% include panels/faq.html label="Vragen over de voorbereiding" items=vragen %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="bezwaren" body=bezwaren %}

{% include panels/form.html id="actie" casus="praktijkdagen" title="Laat zien hoe dit bij jouw training past" lead="Vertel om welke training het gaat. We kijken samen welk moment van de dag je als eerste terug wilt." submit_note="Je krijgt een persoonlijk antwoord, geen nieuwsbrief." %}

</div>

<script src="{{ '/assets/js/landing-varianten.js' | relative_url }}" defer></script>
