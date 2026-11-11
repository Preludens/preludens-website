---
layout: landing
lang: nl
title: "Betere praktijkdagen (variant D: kiezen en doen)"
description: >-
  Een voorbereiding die blijft hangen, zodat de praktijkdag naar oefenen gaat.
  Hang zelf de CO-melder op en zie wat de instructeur daarna weet. Concept voor
  casus 1, variant D.
permalink: /oplossingen/varianten/d/
casus: praktijkdagen
body_class: page-panels landing-praktijkdagen landing-variant
# Vergelijkingsvariant, geen pagina voor zoekmachines.
robots: "noindex, nofollow"
sitemap: false
---

{%- comment -%}
  Variant D — kiezen en doen. Zie _marketing/landingspagina-varianten.md.

  Gebouwd op de feedback op A, B en C (11 november 2026):
  - een hero met beeld: het spel zelf, herkenbaar als voorbeeld;
  - direct onder de hero de vraag "Waar sta jij?". Een keuze geeft meteen
    een reactie en scrolt naar het deel voor die rol. Alles staat er altijd:
    wie niet kiest, scrolt gewoon door. Geen "allebei": twee blokken die
    tegelijk aandacht vragen werkt niet;
  - in elk rolblok het grootste aandachtspunt voor die rol, plus een vraag
    met directe feedback;
  - de CO-melder ophangen in plaats van een vraag-en-antwoord;
  - beeld in elk blok, de schuine sneden van de huisstijl, en een donker
    formulierblok.

  Elke knop laat een event achter (assets/js/landing-varianten.js):
  path_select, question_answer, demo_start, demo_complete, faq_open,
  cta_click, video_play. De id's van de panelen zijn de cta_position van
  cta_click. Laat ze staan.
{%- endcomment -%}

{% include panels/clips.html %}
{% assign demo_url = site.preludens.demo.url %}
{%- comment -%} Beelden en afsprakenlink: _data/varianten.yml {%- endcomment -%}
{% assign beeld = site.data.varianten.d %}

<div class="panel-stack" data-landing-variant="d">

{%- comment -%} 1. Hero: het probleem in hun woorden, en het spel als beeld {%- endcomment -%}
<section class="panel panel--hero lv-hero lv-hero--media" id="hero">
  <div class="panel__inner">
    <div class="sp-hero-copy">
      <h1>Je herhaalt op de trainingsdag wat ze in de e-learning al gehad hebben</h1>
      <p class="sp-lead">Wij maken de voorbereiding speelbaar. Deelnemers oefenen vooraf met situaties uit hun vak, en de instructeur ziet 's&nbsp;ochtends waar de groep staat. Zo gaat de praktijkdag naar oefenen.</p>
      <div class="sp-actions">
        <a class="btn btn-primary" href="#probeer" data-cta-position="hero">Probeer het zelf</a>
        {% include varianten/afspraak.html position="hero" style="secondary" bare=true %}
      </div>
    </div>
    <div class="lv-hero__media">
      {% assign co_video = site.media_base | append: "cowijzer-melder-explainer.mp4?v=2" %}
      {% include panels/video.html src=co_video poster=beeld.hero_poster title="CO Wijzer explainer (hero)" label="Explainer van CO Wijzer: een huis in doorsnede waarin per ruimte een CO-melder wordt geplaatst" caption="Voorbeeld uit ons werk: CO Wijzer, de voorbereiding voor monteurs. Een minuut uit het spel." download_label="Download de video (mp4, 2,5 MB)" play_label="Speel het voorbeeld af" %}
    </div>
  </div>
</section>

{%- comment -%} 2. Waar sta jij? Kiezen scrolt, niet kiezen mag ook. {%- endcomment -%}
{% capture kies %}
<h2>Waar sta jij?</h2>
<p class="sp-lead sp-lead--center">Kies, en je gaat naar het deel dat voor jou het belangrijkst is. Je kunt ook gewoon verder lezen.</p>
<div class="lv-choose" data-lv-choose>
  <div class="lv-choose__options" role="group" aria-label="Kies je rol">
    <a class="lv-choose__option" href="#voor-instructeur" data-choose="instructeur" data-reply="Jij geeft de training. Hieronder: wat jij ervan merkt op de dag.">
      <img src="{{ beeld.kies_instructeur.src | relative_url }}" alt="{{ beeld.kies_instructeur.alt }}" width="1024" height="448" loading="lazy" decoding="async">
      <span class="lv-choose__body"><strong>Ik geef de training</strong><span>Je staat zelf voor de groep</span></span>
    </a>
    <a class="lv-choose__option" href="#voor-koper" data-choose="koper" data-reply="Jij beslist over de training. Hieronder: wat het jullie oplevert, en hoe het past bij wat er al is.">
      <img src="{{ beeld.kies_koper.src | relative_url }}" alt="{{ beeld.kies_koper.alt }}" width="1024" height="448" loading="lazy" decoding="async">
      <span class="lv-choose__body"><strong>Ik beslis over de training</strong><span>Je kiest wat er vooraf en op de dag gebeurt</span></span>
    </a>
  </div>
  <p class="lv-choose__reply" data-choose-reply aria-live="polite" hidden></p>
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" id="kies" body=kies %}

{%- comment -%} 3. Voor wie de training geeft {%- endcomment -%}
{% capture instructeur_body %}
<p class="lv-for-you" data-for-you="instructeur" hidden>Jij koos: ik geef de training</p>
<h2 tabindex="-1">Je weet 's&nbsp;ochtends niet wie wat mist</h2>
<p class="sp-lead">Dus begin je bij het begin, voor de zekerheid. Dat is goed lesgeven, en het kost de ochtend.</p>
<p class="sp-lead">Hebben deelnemers vooraf al gekozen in situaties uit hun vak, dan zie jij vóór de dag waar het misging. Daar begin je. De rest van de dag is voor de hal.</p>
<div class="lv-question" data-lv-question data-question-id="herhaal-tijd">
  <p class="lv-question__q" id="q-herhaal">Hoeveel van je ochtend gaat er op aan herhalen?</p>
  <div class="lv-question__options" role="group" aria-labelledby="q-herhaal">
    <button type="button" data-answer="kwartier">Een kwartier</button>
    <button type="button" data-answer="uur">Ongeveer een uur</button>
    <button type="button" data-answer="halve-ochtend">Een halve ochtend</button>
    <button type="button" data-answer="meer">Meer dan dat</button>
  </div>
  <div class="lv-question__reply" aria-live="polite">
    <p data-reply-for="kwartier" hidden>Dat is weinig. Dan is de vraag eerder of je weet wie wat mist. De melder hieronder laat zien hoe je dat vooraf ziet.</p>
    <p data-reply-for="uur" hidden>Op een praktijkdag van zes uur is dat een zesde van de dag. Met een voorbereiding die blijft hangen, besteed je dat uur aan wie het nodig heeft.</p>
    <p data-reply-for="halve-ochtend" hidden>Dan begint het oefenen pas tegen elven. Als je weet waar de groep staat, begin je daar, en niet bij hoofdstuk één.</p>
    <p data-reply-for="meer" hidden>Dan is de praktijkdag een theoriedag met een stuk praktijk. Daar is het meeste te winnen.</p>
  </div>
</div>
{% endcapture %}
{% capture instructeur %}
{% include panels/media.html src=beeld.instructeur.src alt=beeld.instructeur.alt ratio="16 / 9" angle=true body=instructeur_body %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="voor-instructeur" body=instructeur %}

{%- comment -%} 4. Voor wie over de training beslist {%- endcomment -%}
{% capture koper_body %}
<p class="lv-for-you" data-for-you="koper" hidden>Jij koos: ik beslis over de training</p>
<h2 tabindex="-1">De dag is al korter gemaakt, en begint nog steeds met theorie</h2>
<p class="sp-lead">De klant wilde minder verlet, dus kwam er een e-learning vooraf. Een gehaalde toegangstoets zegt alleen dat iemand de stof die week kende, niet wat er op de dag nog van over is.</p>
<p class="sp-lead">Wij maken van de momenten waar de dag op vastloopt korte speelbare situaties. Die draaien in jullie eigen leeromgeving, naast de e-learning die er al is.</p>
<div class="lv-question" data-lv-question data-question-id="eigenaar-elearning">
  <p class="lv-question__q" id="q-eigenaar">Van wie is de e-learning die jullie nu vooraf gebruiken?</p>
  <div class="lv-question__options" role="group" aria-labelledby="q-eigenaar">
    <button type="button" data-answer="zelf">Die maken we zelf</button>
    <button type="button" data-answer="leverancier">Die komt van een leverancier</button>
    <button type="button" data-answer="normsteller">Die is verplicht vanuit een normsteller</button>
  </div>
  <div class="lv-question__reply" aria-live="polite">
    <p data-reply-for="zelf" hidden>Dan kan hij misschien korter: wat deelnemers al spelend oefenen, hoef je niet ook nog uit te leggen. Dat is een keuze, geen voorwaarde.</p>
    <p data-reply-for="leverancier" hidden>Dan blijft die zoals hij is. De situaties komen ernaast, voor de momenten waar jullie dag op vastloopt.</p>
    <p data-reply-for="normsteller" hidden>Dan blijft de verplichte e-learning staan, met toets en al. Dit komt ernaast, en gaat over wat er op de dag nog van over is.</p>
  </div>
</div>
{% endcapture %}
{% capture koper %}
{% include panels/media.html src=beeld.koper.src alt=beeld.koper.alt ratio="16 / 9" angle="flip" reverse=true body=koper_body %}
{% endcapture %}
{% include panels/panel.html variant="harbor" id="voor-koper" body=koper %}

{%- comment -%} 5. Probeer het zelf: de CO-melder {%- endcomment -%}
{% capture probeer %}
<h2>Hang de CO-melder op</h2>
<p class="sp-lead sp-lead--center">Zo oefent een monteur in CO Wijzer, vóór de praktijkdag. Daarna zie je wat de instructeur ziet.</p>
<div class="lv-inline-play">
  {% include varianten/co-melder.html position="probeer" %}
  <div class="lv-after">
    <p class="lv-claim">We vervangen de praktijkdag niet. We zorgen dat die dag naar oefenen gaat.</p>
    {% if demo_url and demo_url != "" %}
      {% include panels/actions.html primary_label="Speel de hele demo (2 minuten)" primary_href=demo_url primary_demo=true casus="praktijkdagen" primary_position="probeer" %}
    {% else %}
      {% include varianten/afspraak.html position="probeer" secondary_label="Stuur een bericht" secondary_href="#actie" %}
    {% endif %}
  </div>
</div>
{% endcapture %}
{% include panels/panel.html variant="paper" id="probeer" body=probeer %}

{%- comment -%} 6. Hoe het werkt, met beeld per stap {%- endcomment -%}
{% capture werkt %}
<h2>Hoe het werkt</h2>
<ol class="lv-steps">
  <li>
    <img src="{{ beeld.stap_1.src | relative_url }}" alt="{{ beeld.stap_1.alt }}" width="1024" height="640" loading="lazy" decoding="async">
    <h3>We zoeken waar de dag op vastloopt</h3>
    <p>Samen met jullie instructeurs: welke uitleg komt elke keer terug, en waar gaat het in de hal mis?</p>
  </li>
  <li>
    <img src="{{ beeld.stap_2.src | relative_url }}" alt="{{ beeld.stap_2.alt }}" width="1024" height="640" loading="lazy" decoding="async">
    <h3>Dat worden korte speelbare situaties</h3>
    <p>De deelnemer kiest, ziet wat er gebeurt en krijgt uitleg. Een paar minuten per situatie, in jullie eigen leeromgeving.</p>
  </li>
  <li>
    <img src="{{ beeld.stap_3.src | relative_url }}" alt="{{ beeld.stap_3.alt }}" width="1024" height="640" loading="lazy" decoding="async">
    <h3>De instructeur ziet waar de groep staat</h3>
    <p>Vóór de dag, per situatie. De dag begint bij wat misging.</p>
  </li>
</ol>
{% endcapture %}
{% include panels/panel.html variant="mist" id="hoe-het-werkt" body=werkt %}

{%- comment -%} 7. Bewijs {%- endcomment -%}
{% capture bewijs_body %}
<h2>Waar het eerder werkte</h2>
<p class="sp-lead">21CC Education kwam bij ons met de vraag die op deze pagina staat: hun praktijkdagen moesten meer opleveren, en daar hoorde een voorbereiding vooraf bij. Met hen en Studium maakten we <strong>CO Wijzer</strong>. Met Climatools, 21CC Learning en Studium volgde <strong>Basis Koeltechniek</strong>: negen MicroGames voor installatiemonteurs.</p>
<p class="sp-lead">Bij een andere opdrachtgever, een vijfdaagse training op locatie, konden twee dagen vervallen toen de deelnemers vooraf oefenden. Dat is één traject en geen belofte. Wij sturen op meer oefentijd op de dag, niet op minder dagen.</p>
{% endcapture %}
{% capture bewijs %}
{% include panels/media.html src=beeld.bewijs.src alt=beeld.bewijs.alt ratio="16 / 9" angle=true body=bewijs_body %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="bewijs" body=bewijs %}

{%- comment -%} 8. Bezwaren {%- endcomment -%}
{% capture vragen %}
{% include panels/faq-item.html question="Vervangt dit de praktijkdag?" answer="Nee. We vervangen de praktijkdag niet. Wat in de hal geoefend moet worden, blijft in de hal. De voorbereiding zorgt dat er meer tijd voor overblijft." %}
{% include panels/faq-item.html question="Draait het in onze leeromgeving?" answer="Ja. Je krijgt een SCORM-bestand dat je in je eigen LMS zet, naast de e-learning die er al staat. Zonder LMS kan het ook via een gewone link, in onze omgeving Prepo." %}
{% include panels/faq-item.html question="Onze deelnemers zijn geen gamers." answer="Dat hoeven ze ook niet te zijn. Een situatie duurt een paar minuten en lijkt op hun werk: een klant, een installatie, een keuze. Ze spelen het op de telefoon of de laptop." %}
{% include panels/faq-item.html question="Wordt de praktijkdag dan nog korter?" answer="Dat beslissen jullie. Wij sturen op meer oefentijd op dezelfde dag. Onderzoek naar voorbereiding vooraf vindt het grootste effect juist als de contacttijd niet wordt ingekort." %}
{% include panels/faq-item.html question="Wat kost het?" answer="Dat hangt af van het aantal situaties en van waar het draait. Je kunt klein beginnen: één moment uit één training. Dan weet je of het werkt voordat je meer doet." %}
{% endcapture %}
{% capture bezwaren %}
<h2>Wat je je misschien afvraagt</h2>
{% include panels/faq.html label="Vragen over de voorbereiding" items=vragen %}
<div class="lv-faq-more">
  <p>Staat je vraag er niet bij? Dan bespreken we hem graag.</p>
  {% include varianten/afspraak.html position="bezwaren" secondary_label="Stel je vraag per bericht" secondary_href="#actie" %}
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" id="bezwaren" body=bezwaren %}

{%- comment -%}
  9. De uitgang: eerst direct een afspraak, daaronder het formulier. Twee
  wegen naar hetzelfde, in één donker vlak, zodat ze niet om aandacht
  concurreren. De afsprakenlink staat in _data/varianten.yml.
{%- endcomment -%}
<section class="panel lv-afspraak-band" id="afspraak">
  <div class="panel__inner">
    <div class="lv-afspraak-band__body">
      <h2>Versterk jouw praktijkdag</h2>
      <p class="sp-lead">Plan direct een online kennismaking. We kijken samen welk moment van de dag je als eerste terug wilt, en hoe een voorbereiding daar past.</p>
      {% include varianten/afspraak.html position="afspraak" note=true %}
    </div>
  </div>
</section>

{% include panels/form.html id="actie" casus="praktijkdagen" title="Of stuur ons een bericht" lead="Vertel om welke training het gaat. We nemen contact met je op." submit_note="Je krijgt een persoonlijk antwoord, geen nieuwsbrief." %}

</div>

<script src="{{ '/assets/js/landing-varianten.js' | relative_url }}" defer></script>
