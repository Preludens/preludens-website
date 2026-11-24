---
lang: nl
layout: default
permalink: /verhalen/microgame-demo/
title: Speel een MicroGame over koeltechniek
description: >-
  Speel gratis een MicroGame uit Basis Koeltechniek. Daarna lees je wat
  deelnemers ervan leren, hoe we zo'n leerroute opzetten en waarom oefenen met
  keuzes beter blijft hangen dan lezen.
body_class: page-panels page-demo
# casus gaat mee op elk event (demo_start, demo_return, form_submit) en als
# verborgen veld naar HubSpot. Daar is het een vrij tekstveld.
casus: microgame-demo
# Alleen Nederlands; de Engelse URL toont dezelfde Nederlandse pagina.
sitemap_langs: [nl]
project: MicroGame
type: demos
featured: true
quote: false
image: basis-koeltechniek-onderdelen.jpg
summary: >-
  In een paar minuten ervaar je hoe een MicroGame abstracte kennis oefenbaar maakt.
  Je maakt een keuze en ziet meteen wat die doet.
highlights:
  - Korte, speelbare leermomenten
  - Directe feedback op je keuze
  - Kennis gekoppeld aan een herkenbare situatie

# De URL waarop de demo opent, in een nieuw tabblad. Leeg = de waarde uit
# _config.yml (preludens.demo.url). Staan ze allebei leeg, dan wijst de
# afspeelknop naar de video op deze pagina in plaats van naar een dode link.
demo_url: ""

# De video onder de hero. Tot de eigen demovideo er is, staat hier de
# explainer van Basis Koeltechniek: hetzelfde spel, andere MicroGames.
# file is de bestandsnaam in de bucket van site.media_base.
video:
  file: koeltechniek-explainer.mp4?v=2
  poster: /assets/images/verhalen/basis-koeltechniek-video-poster.jpg
  title: Basis Koeltechniek explainer (demopagina)
  label: >-
    Explainer van Basis Koeltechniek: meetpunten aanwijzen in een draaiende installatie,
    componenten op hun lijn in het h-log-P-diagram, en korte fragmenten uit alle negen
    MicroGames
  caption: >-
    Een minuut uit Basis Koeltechniek, uit vier verschillende MicroGames. Je wijst
    meetpunten aan, legt componenten op hun lijn in het h-log-P-diagram en regelt een
    expansieventiel bij.
  download_label: Download de video (mp4, 3,7 MB)

# Een citaat van een opdrachtgever. Alleen invullen met een echte uitspraak,
# met naam en functie; zolang text leeg is, staat er geen citaat op de pagina.
getuigenis:
  text: ""
  cite: ""
---
{% include locale.html %}
{% include panels/clips.html %}
{% assign demo_url = page.demo_url | default: site.preludens.demo.url | default: "" %}
{% assign demo_image = '/assets/images/verhalen/basis-koeltechniek-diagram.jpg' %}

<div class="panel-stack" data-demo-page{% if demo_url != "" %} data-demo-url="{{ demo_url }}"{% endif %}>

{%- comment -%}
  1. De hero. Eén ding te doen: de demo starten. Het beeld met de afspeelknop
  en de knop eronder openen allebei de demo in een nieuw tabblad; deze pagina
  blijft open, zodat er iets klaarstaat als de speler terugkomt.

  data-demo-start laat tracking.js demo_start vuren; data-demo-launch laat
  assets/js/demo.js onthouden dat de demo open staat.
{%- endcomment -%}
<section class="panel panel--hero demo-hero" id="hero">
  <div class="panel__inner">
    <div class="sp-hero-copy">
      <h3>MicroGame-demo</h3>
      <h1>Speel zelf een MicroGame over koeltechniek</h1>
      <p class="sp-lead">In een paar minuten herken je de onderdelen van een koelinstallatie, volg je het koudemiddel door de kringloop en gebruik je die kennis in een gesprek. Op elke keuze krijg je direct feedback.</p>
      <p class="sp-lead">De demo komt uit Basis Koeltechniek, de leerroute die we maakten met Climatools, 21CC Learning en Studium. Gratis, zonder account.</p>
      <div class="sp-actions">
        {% if demo_url != "" %}
        <a class="btn btn-primary" href="{{ demo_url }}" target="_blank" rel="noopener" data-demo-start data-demo-launch data-cta-position="hero">Start de demo<span class="sr-only"> (opent in een nieuw tabblad)</span></a>
        {% else %}
        <a class="btn btn-primary" href="#video" data-cta-position="hero">Bekijk de demo</a>
        {% endif %}
        <a class="btn btn-secondary" href="#video">Eerst de video</a>
      </div>
      {% if demo_url != "" %}<p class="demo-hero__note">De demo opent in een nieuw tabblad. Kom daarna gerust terug.</p>{% endif %}
    </div>

    <figure class="demo-launch">
      <div class="sp-hero-shadow">
        <a class="demo-launch__frame" href="{% if demo_url != "" %}{{ demo_url }}{% else %}#video{% endif %}"{% if demo_url != "" %} target="_blank" rel="noopener" data-demo-start data-demo-launch data-cta-position="hero-beeld"{% endif %}>
          <img src="{{ demo_image | relative_url }}" alt="" width="1600" height="900" fetchpriority="high" decoding="async">
          <span class="sp-video__play-disc" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="34" height="34" focusable="false">
              <path d="M12 8.2 24 16 12 23.8Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
            </svg>
          </span>
          <span class="sr-only">{% if demo_url != "" %}Start de demo (opent in een nieuw tabblad){% else %}Bekijk de demo{% endif %}</span>
        </a>
      </div>
      <figcaption>Een scherm uit Basis Koeltechniek, de leerroute waar de demo uit komt</figcaption>
    </figure>
  </div>
</section>

{%- comment -%}
  2. Terug uit de demo. Verborgen tot assets/js/demo.js ziet dat iemand de demo
  heeft geopend en na een tijdje naar dit tabblad terugkomt (of tot de demo
  zelf demo_complete stuurt). Dan klapt dit blok open onder de hero en scrolt
  de pagina ernaartoe. Zonder JavaScript blijft het dicht; het formulier
  onderaan staat er altijd.
{%- endcomment -%}
<div class="demo-return" id="na-de-demo" data-demo-return hidden>
{% capture terug_lead %}Zo voelt het als je kennis gebruikt in plaats van leest. Wil je ook een spel of e-learning die je deelnemers aan het werk zet en die ze willen afmaken? Laat je naam en een e-mailadres of telefoonnummer achter, dan nemen we contact met je op.{% endcapture %}
{% include panels/form.html id="na-de-demo-formulier" casus=page.casus compact=true message="Wil contact na het spelen van de MicroGame-demo" title="Bedankt voor het spelen" lead=terug_lead submit_label="Neem contact met me op" submit_note="Liever zelf bellen? 015 202 404 7" %}
</div>

{%- comment -%} 3. De video. Altijd bereikbaar, ook voor wie niet speelt. {%- endcomment -%}
{% capture video_body %}
<h2>Liever eerst kijken?</h2>
<p class="sp-lead sp-lead--center">Een minuut uit het spel: wat de deelnemer ziet, waar hij moet kiezen en wat de feedback doet.</p>
{% if page.video and site.media_base and site.media_base != "" %}
{% assign video_src = site.media_base | append: page.video.file %}
<div class="demo-video">
{% include panels/video.html src=video_src poster=page.video.poster title=page.video.title label=page.video.label caption=page.video.caption download_label=page.video.download_label play_label="Speel de video af" %}
</div>
{% endif %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="video" body=video_body %}

{%- comment -%} 4. Leerdoelen, en hoe het spel ze haalt {%- endcomment -%}
{% capture leerdoelen %}
<h2>Wat je in de demo leert</h2>
<p class="sp-lead">Elke MicroGame begint bij een leerdoel: wat moet iemand na afloop kunnen herkennen, kiezen of doen? In deze demo zijn dat er drie.</p>
<ol class="lv-steps demo-goals">
  <li>
    <img src="{{ '/assets/images/verhalen/basis-koeltechniek-onderdelen.jpg' | relative_url }}" alt="Een koelinstallatie waarin de deelnemer onderdelen aanwijst" width="1600" height="900" loading="lazy" decoding="async">
    <h3>Onderdelen herkennen</h3>
    <p>Je wijst de onderdelen van een koelcircuit aan. Wijs je mis, dan zie je meteen welk onderdeel het wel is en wat het doet.</p>
  </li>
  <li>
    <img src="{{ '/assets/images/verhalen/basis-koeltechniek-kringloop.jpg' | relative_url }}" alt="Het koudemiddel dat door de kringloop van de installatie loopt" width="1600" height="900" loading="lazy" decoding="async">
    <h3>De kringloop volgen</h3>
    <p>Je plaatst het koudemiddel in elke stap van het proces: waar het verdampt, wordt samengeperst, condenseert en weer expandeert.</p>
  </li>
  <li>
    <img src="{{ '/assets/images/verhalen/basis-koeltechniek-gesprek.jpg' | relative_url }}" alt="Een gesprek uit het werk waarin de deelnemer een antwoord kiest" width="1600" height="900" loading="lazy" decoding="async">
    <h3>De theorie gebruiken</h3>
    <p>In een gesprek uit het werk gebruik je wat je net hebt geoefend. Op elk antwoord volgt uitleg, goed of fout.</p>
  </li>
</ol>

<h3 class="demo-subhead">Hoe het spel die doelen haalt</h3>
{% capture hoe_items %}
{% include panels/step.html title="Eerst uitleg, dan zelf doen" text="Een begrip wordt kort uitgelegd en daarna meteen gebruikt. Je leest niet door tot je het snapt; je probeert het." %}
{% include panels/step.html title="Feedback op elke keuze" text="Goed of fout, je ziet direct wat je keuze doet en waarom. Zo weet je wat er de volgende keer van je verwacht wordt." %}
{% include panels/step.html title="Fout gaan mag" text="Een MicroGame is een veilige plek om te oefenen. Wie fout kiest, probeert het opnieuw en onthoudt juist dat moment." %}
{% endcapture %}
{% include panels/steps.html variant="grid" items=hoe_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="leerdoelen" body=leerdoelen %}

{%- comment -%} 5. Het proces: wat een klant kan verwachten {%- endcomment -%}
{% capture aanpak %}
<h2>Zo maken we dit, ook voor jouw training</h2>
<p class="sp-lead sp-lead--center">Basis Koeltechniek begon niet met een game, maar met de vraag wat een monteur met de theorie moet kunnen. Zo gaat het bij elk traject.</p>
{% capture aanpak_items %}
{% include panels/step.html num="01" title="We bepalen samen de leerdoelen" text="In designworkshops met jouw experts brengen we de inhoud in kaart. Niet alleen wat iemand moet weten, maar vooral wat hij ermee moet kunnen. Vaak begint dat met een GameStorm van een dagdeel." %}
{% include panels/step.html num="02" title="Leerdoelen worden uitdagingen" text="Elk leerdoel krijgt een situatie waarin de deelnemer moet kiezen. Bij Basis Koeltechniek werden dat negen MicroGames." %}
{% include panels/step.html num="03" title="Vakexperts testen mee" text="Tijdens het bouwen spelen experts elke versie en toetsen ze de techniek, de termen en de situaties. Via Prepo staat een nieuwe versie meteen voor ze klaar." %}
{% include panels/step.html num="04" title="Een verhaal geeft samenhang" text="Verhaallijnen zetten de MicroGames in een herkenbare werkdag. Bij Basis Koeltechniek zijn het er twee, in beeld gebracht door 21CC Learning." %}
{% include panels/step.html num="05" title="Het draait waar jouw mensen leren" text="Als SCORM-bestand in je eigen leeromgeving, naast wat er al staat. Zonder LMS kan het via een gewone link in Prepo." %}
{% endcapture %}
{% include panels/steps.html variant="flow" items=aanpak_items %}
<p class="demo-more"><a href="{{ '/verhalen/basis-koeltechniek/' | relative_url }}">Lees het hele verhaal van Basis Koeltechniek</a></p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="aanpak" body=aanpak %}

{%- comment -%}
  6. De methode en het onderzoek erachter. Alleen bevindingen met een bron
  die we kunnen noemen; de bronnen staan eronder met een link.
{%- endcomment -%}
{% capture waarom %}
<h2>Waarom oefenen met keuzes beter blijft hangen</h2>
<p class="sp-lead">We ontwerpen elke MicroGame vanuit <a href="{{ '/ontwerpmethodiek/' | relative_url }}">zeven principes</a>. Drie ervan steunen op onderzoek dat we je graag laten zien.</p>
{% capture waarom_items %}
{% include panels/step.html num="01" title="Ophalen werkt beter dan herlezen" text="Wie kennis zelf moet ophalen, onthoudt meer dan wie de stof nog eens doorleest. Een meta-analyse van 61 studies vond een gemiddeld effect van g = 0,50, en een groter effect als de toets pas een dag of later kwam (Rowland, 2014). In een MicroGame haal je kennis op bij elke keuze." %}
{% include panels/step.html num="02" title="Feedback direct op de keuze" text="Feedback hoort bij de sterkste invloeden op leren, mits hij zegt wat er goed of fout ging en wat de volgende stap is (Hattie en Timperley, 2007). Daarom volgt op elke actie meteen een korte reactie, zonder afleiding." %}
{% include panels/step.html num="03" title="Een spel als deel van een leerroute" text="Serious games leveren meer kennis en betere retentie op dan gewone instructie, vooral als ze worden aangevuld met andere instructie en over meerdere sessies lopen (Wouters e.a., 2013). Daarom zetten we MicroGames in een leerroute, naast uitleg en praktijk." %}
{% endcapture %}
{% include panels/steps.html variant="grid" items=waarom_items %}
<div class="demo-caveat">
  <h3>Wat het onderzoek ook zegt</h3>
  <p>Een spel maakt leren niet vanzelf leuker. In dezelfde meta-analyse waren games niet aantoonbaar motiverender dan gewone instructie. Motivatie komt uit een situatie die je herkent en het gevoel dat je beter wordt. Daar ontwerpen we op, en niet op punten, badges of een scorebord.</p>
</div>
<ol class="demo-sources">
  <li>Rowland, C. A. (2014). The effect of testing versus restudy on retention: A meta-analytic review of the testing effect. <em>Psychological Bulletin, 140</em>(6), 1432–1463. <a href="https://doi.org/10.1037/a0037559" rel="noopener">doi.org/10.1037/a0037559</a></li>
  <li>Hattie, J. en Timperley, H. (2007). The power of feedback. <em>Review of Educational Research, 77</em>(1), 81–112. <a href="https://doi.org/10.3102/003465430298487" rel="noopener">doi.org/10.3102/003465430298487</a></li>
  <li>Wouters, P., van Nimwegen, C., van Oostendorp, H. en van der Spek, E. D. (2013). A meta-analysis of the cognitive and motivational effects of serious games. <em>Journal of Educational Psychology, 105</em>(2), 249–265. <a href="https://doi.org/10.1037/a0031311" rel="noopener">doi.org/10.1037/a0031311</a></li>
</ol>
{% endcapture %}
{% include panels/panel.html variant="paper" id="waarom" body=waarom %}

{%- comment -%} 7. Bewijs uit de praktijk, met een citaat zodra er een echt citaat is {%- endcomment -%}
{% capture bewijs %}
<h2>Gemaakt met en voor de praktijk</h2>
{% if page.getuigenis.text and page.getuigenis.text != "" %}
{% include panels/quote.html text=page.getuigenis.text cite=page.getuigenis.cite %}
{% endif %}
<p class="sp-lead sp-lead--center">Basis Koeltechniek maakten we voor Climatools, samen met 21CC Learning en Studium. Negen MicroGames en twee verhaallijnen, getest en aangescherpt door vakexperts, en samengebracht in het leerplatform van 21CC Learning. Met 21CC Education en Studium maakten we eerder CO Wijzer, de voorbereiding voor monteurs op de praktijkdag.</p>
<dl class="demo-facts">
  <div><dt>MicroGames</dt><dd>9</dd></div>
  <div><dt>Verhaallijnen</dt><dd>2</dd></div>
  <div><dt>Opgeleverd</dt><dd>2026</dd></div>
</dl>
{% endcapture %}
{% include panels/panel.html variant="mist" id="bewijs" body=bewijs %}

{%- comment -%} 8. Vragen {%- endcomment -%}
{% capture vragen %}
{% include panels/faq-item.html question="Hoe lang duurt de demo?" answer="Een paar minuten. Je kunt op elk moment stoppen en later terugkomen." %}
{% include panels/faq-item.html question="Moet ik iets installeren of een account maken?" answer="Nee. De demo draait in je browser en opent in een nieuw tabblad. Deze pagina blijft open." %}
{% include panels/faq-item.html question="Kan dit ook over ons vak gaan?" answer="Ja. Koeltechniek is het voorbeeld. We maakten MicroGames over onder meer nautisch toezicht, IT-veiligheid, CO-melders en containerplanning. De aanpak is steeds dezelfde: eerst de leerdoelen, dan de situaties." %}
{% include panels/faq-item.html question="Draait het in onze leeromgeving?" answer="Ja. Je krijgt een SCORM-bestand dat je in je eigen LMS zet, naast de e-learning die er al staat. Zonder LMS kan het ook via een gewone link, in onze omgeving Prepo." %}
{% include panels/faq-item.html question="Wat kost het?" answer="Dat hangt af van het aantal situaties en van waar het draait. Je kunt klein beginnen: één moment uit één training. Dan weet je of het werkt voordat je meer doet." %}
{% endcapture %}
{% capture vragen_body %}
<h2>Wat je je misschien afvraagt</h2>
{% include panels/faq.html label="Vragen over de demo" items=vragen %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=vragen_body %}

{%- comment -%} 9. Het formulier, voor iedereen, gespeeld of niet {%- endcomment -%}
{% include panels/form.html id="contact" casus=page.casus compact=true message="Wil contact na het bekijken van de MicroGame-demo" title="Wil je dit ook voor jouw training?" lead="Laat je naam en een e-mailadres of telefoonnummer achter. We bellen of mailen je om te horen waar jouw deelnemers mee moeten oefenen." submit_label="Neem contact met me op" submit_note="Je krijgt een persoonlijk antwoord, geen nieuwsbrief." %}

{% include panels/footer-reveal.html %}
</div>

<script src="{{ '/assets/js/demo.js' | relative_url }}" defer></script>
