---
lang: nl
layout: default
permalink: /verhalen/ai-wijzer/
title: "Speel de demo: AI Wijzer"
description: >-
  Speel gratis de MicroGame AI Wijzer. Je oefent welke persoonsgegevens en
  bedrijfsinformatie je wel en niet met een AI-dienst deelt, en past vier
  controles toe voordat je een prompt verstuurt.
body_class: page-panels page-demo
# casus gaat mee op elk event (demo_start, demo_return, form_submit) en als
# verborgen veld naar HubSpot. Daar is het een vrij tekstveld.
casus: ai-demo
# Alleen Nederlands; de Engelse URL toont dezelfde Nederlandse pagina.
sitemap_langs: [nl]
project: AI Wijzer
type: demos
featured: true
quote: false
banner: ""
image: /assets/images/demo/bewust-met-ai-titel.jpg
summary: >-
  Werken met AI is handig, maar wat stuur je eigenlijk mee? In deze MicroGame oefen
  je welke informatie je met een AI-dienst deelt, en welke niet.
highlights:
  - Persoonsgegevens en bedrijfsinformatie herkennen
  - Begrijpen wat een AI-dienst met je invoer doet
  - Vier controles voordat je een prompt verstuurt

# De publieke link van de game, die in een nieuw tabblad opent (Prepo-project
# "Pas op met Privacy", game "AI Bewust"). Zolang hij leeg is, wijst de
# afspeelknop naar de video op deze pagina in plaats van naar een dode link.
demo_url: "https://learn.prepo.nl/demo-s/kt5MjzM1ReigJw7rCRDhztNg_l8j-IDX/index.html"

# De video onder de hero. Leeg zolang de demovideo er niet is; dan staat het
# blok "Liever eerst kijken?" er niet. file is de bestandsnaam in de bucket
# van site.media_base, poster een pad in de site.
video:
  file: ""
  poster: /assets/images/demo/bewust-met-ai-titel.jpg
  title: AI Wijzer (demopagina)
  label: Video van de MicroGame AI Wijzer
  caption: ""
  download_label: Download de video (mp4)

# Een citaat van een opdrachtgever of speler. Alleen invullen met een echte
# uitspraak, met naam en functie; zolang text leeg is, staat er geen citaat.
getuigenis:
  text: ""
  cite: ""
---
{%- comment -%}
  De demopagina van "AI Wijzer" (0263 in de microgames-repository). De
  leerdoelen en de opbouw komen uit het game design van die game
  (docs/0263-design-v2/game-design.md daar). Verandert de game, kijk dan of
  deze pagina nog klopt.

  Gedrag: assets/js/demo.js. Na het spelen in het andere tabblad klapt onder
  de hero een kort formulier open.
{%- endcomment -%}
{% include locale.html %}
{% include panels/clips.html %}
{% assign demo_url = page.demo_url | default: "" %}
{% assign heeft_video = false %}
{% if page.video.file and page.video.file != "" and site.media_base and site.media_base != "" %}{% assign heeft_video = true %}{% endif %}
{% if heeft_video %}{% assign terugval = "#video" %}{% else %}{% assign terugval = "#contact" %}{% endif %}

<div class="panel-stack" data-demo-page{% if demo_url != "" %} data-demo-url="{{ demo_url }}"{% endif %}>

{%- comment -%} 1. De hero: één ding te doen, de demo starten {%- endcomment -%}
<section class="panel panel--hero demo-hero" id="hero">
  <div class="panel__inner">
    <div class="sp-hero-copy">
      <h3>Gratis demo</h3>
      <h1>AI Wijzer: wat stuur je eigenlijk mee?</h1>
      <p class="sp-lead">Een AI-chatbot schrijft je mail in een minuut. Maar alles wat je erin plakt, gaat naar een dienstverlener: namen, klantgegevens, cijfers. In deze MicroGame oefen je welke informatie je wel en niet deelt.</p>
      <p class="sp-lead">Je werkt bij het fictieve bedrijf Northfield, met een mailbox en een chatbot zoals je ze van je werk kent. Drie missies, en aan het eind pas je <strong>vier controles</strong> toe voordat je iets naar AI verstuurt.</p>
      <div class="sp-actions">
        {% if demo_url != "" %}
        <a class="btn btn-primary" href="{{ demo_url }}" target="_blank" rel="noopener" data-demo-start data-demo-launch data-cta-position="hero">Start de demo<span class="sr-only"> (opent in een nieuw tabblad)</span></a>
        {% else %}
        <a class="btn btn-primary" href="{{ terugval }}" data-cta-position="hero">Vraag de demo aan</a>
        {% endif %}
        <a class="btn btn-secondary" href="#leerdoelen">Wat je leert</a>
      </div>
      {% if demo_url != "" %}<p class="demo-hero__note">De demo opent in een nieuw tabblad. Kom daarna gerust terug.</p>{% endif %}
    </div>

    <figure class="demo-launch">
      <div class="sp-hero-shadow">
        <a class="demo-launch__frame" href="{% if demo_url != "" %}{{ demo_url }}{% else %}{{ terugval }}{% endif %}"{% if demo_url != "" %} target="_blank" rel="noopener" data-demo-start data-demo-launch data-cta-position="hero-beeld"{% endif %}>
          <img src="{{ page.image | relative_url }}" alt="" width="1600" height="892" fetchpriority="high" decoding="async">
          <span class="sp-video__play-disc" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="34" height="34" focusable="false">
              <path d="M12 8.2 24 16 12 23.8Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
            </svg>
          </span>
          <span class="sr-only">{% if demo_url != "" %}Start de demo (opent in een nieuw tabblad){% else %}Vraag de demo aan{% endif %}</span>
        </a>
      </div>
      <figcaption>Het titelscherm van AI Wijzer</figcaption>
    </figure>
  </div>
</section>

{%- comment -%}
  2. Terug uit de demo. Verborgen tot assets/js/demo.js ziet dat iemand de demo
  heeft geopend en terugkomt; dan komt het tevoorschijn met een korte
  animatie. Eerst één vraag (ja of nee), pas na "ja" de velden: zo staat er
  geen formulier in de weg van wie verder wil lezen. Gekozen uit drie
  varianten op 24 november 2026 (variant B, progressive disclosure). Zonder
  JavaScript blijft het dicht; het formulier onderaan staat er altijd.
{%- endcomment -%}
<section class="panel panel--paper demo-return" id="na-de-demo" data-demo-return hidden aria-labelledby="na-de-demo-titel">
  <div class="panel__inner">
    <div class="demo-ask" data-demo-ask>
      <img class="demo-ask__thumb" src="{{ '/assets/images/demo/bewust-met-ai-m3-beeld-3-eindcontrole.jpg' | relative_url }}" alt="" width="900" height="900" loading="lazy" decoding="async">
      <div class="demo-ask__body">
        <p class="demo-ask__kicker">Bedankt voor het spelen</p>
        <h2 id="na-de-demo-titel">Wil je zo'n MicroGame voor jouw organisatie?</h2>
        <div class="demo-ask__choice" data-demo-ask-choice>
          <button class="btn btn-primary" type="button" data-demo-ask-yes data-cta-position="na-de-demo">Ja, neem contact met me op</button>
          <a class="btn btn-secondary" href="#leerdoelen" data-cta-position="na-de-demo">Eerst verder lezen</a>
        </div>
        <div class="demo-ask__form" data-demo-ask-form hidden>
          <p class="demo-ask__reply">Fijn. Hoe kunnen we je bereiken?</p>
          {% include panels/form.html id="na-de-demo-formulier" bare=true casus=page.casus compact=true message="Wil contact na het spelen van de demo AI Wijzer" title="" submit_label="Neem contact met me op" submit_note="We reageren binnen één werkdag." %}
        </div>
      </div>
    </div>
  </div>
</section>

{%- comment -%} 3. De video, zodra die er is {%- endcomment -%}
{% if heeft_video %}
{% capture video_body %}
<h2>Liever eerst kijken?</h2>
<p class="sp-lead sp-lead--center">Een korte rondleiding door de demo: wat je ziet, waar je kiest en wat de feedback doet.</p>
{% assign video_src = site.media_base | append: page.video.file %}
<div class="demo-video">
{% include panels/video.html src=video_src poster=page.video.poster title=page.video.title label=page.video.label caption=page.video.caption download_label=page.video.download_label play_label="Speel de video af" %}
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" id="video" body=video_body %}
{% endif %}

{%- comment -%} 4. De leerdoelen, per missie {%- endcomment -%}
{% capture leerdoelen %}
<h2>Wat je in de demo leert</h2>
<p class="sp-lead">De game loopt in drie missies op: eerst herkennen, dan begrijpen wat er met je informatie gebeurt, en dan zelf een prompt verantwoord voorbereiden.</p>
<ol class="lv-steps demo-goals">
  <li>
    <img src="{{ '/assets/images/demo/bewust-met-ai-m1-beeld-1-inbox-bureau.jpg' | relative_url }}" alt="Een medewerker aan zijn bureau, met de mailbox van Northfield op het scherm" width="900" height="900" loading="lazy" decoding="async">
    <h3>Herkennen wat er in een mail staat</h3>
    <p>In de mailbox van Northfield beoordeel je berichten: algemeen of specifiek, openbaar, intern of vertrouwelijk. Daarna zoek je de fragmenten met persoonsgegevens en bedrijfsinformatie, van contactgegevens tot gezondheid en contracten.</p>
  </li>
  <li>
    <img src="{{ '/assets/images/demo/bewust-met-ai-m2-beeld-3-profiel-verbanden.jpg' | relative_url }}" alt="Collega's die op een whiteboard verbanden leggen tussen een persoon, een plaats, een tijdstip en een dossier" width="900" height="900" loading="lazy" decoding="async">
    <h3>Begrijpen wat AI met je invoer doet</h3>
    <p>Je volgt je informatie achter de schermen. Modeltraining uitzetten is niet hetzelfde als niet bewaren. Een kort antwoord betekent niet dat er weinig is verwerkt. En functie, vestiging en omstandigheden samen wijzen soms precies één persoon aan.</p>
  </li>
  <li>
    <img src="{{ '/assets/images/demo/bewust-met-ai-m3-beeld-3-eindcontrole.jpg' | relative_url }}" alt="Een medewerker die een prompt controleert voordat hij hem verstuurt" width="900" height="900" loading="lazy" decoding="async">
    <h3>Een prompt verantwoord versturen</h3>
    <p>Je bereidt zelf prompts voor. Welke informatie is nodig? Mag dat in deze AI-omgeving? Staan de instellingen goed? Klopt de hele prompt? Dan kies je: aanpassen, stoppen of versturen.</p>
  </li>
</ol>

<h3 class="demo-subhead">Hoe het spel die doelen haalt</h3>
{% capture hoe_items %}
{% include panels/step.html title="Een werkplek die je herkent" text="Een mailbox, een chatbot, een voortgangsupdate voor je leidinggevende. Je oefent met het soort berichten dat je elke week verstuurt, alleen bij een fictief bedrijf." %}
{% include panels/step.html title="Feedback op elke keuze" text="Wijs je een fragment verkeerd aan of verstuur je te veel, dan zie je meteen wat er misging en waarom. Zo weet je wat er de volgende keer van je verwacht wordt." %}
{% include panels/step.html title="Van herkennen naar zelf doen" text="Elke missie bouwt op de vorige. Wat je in missie 1 leert herkennen, gebruik je in missie 3 om zelf te beslissen of een prompt weg mag." %}
{% endcapture %}
{% include panels/steps.html variant="grid" items=hoe_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="leerdoelen" body=leerdoelen %}

{%- comment -%} 5. Het proces: wat een klant kan verwachten {%- endcomment -%}
{% capture aanpak %}
<h2>Zo maken we dit, ook voor jouw organisatie</h2>
<p class="sp-lead sp-lead--center">AI Wijzer begon niet met een spel, maar met de vraag wat een medewerker moet kunnen voordat hij op verzenden klikt. Zo gaat het bij elk traject.</p>
{% capture aanpak_items %}
{% include panels/step.html num="01" title="We bepalen de leerdoelen, per niveau" text="Wat moet iemand onthouden, wat moet hij begrijpen en wat moet hij kunnen toepassen? Voor deze game werden dat acht leerdoelen, verdeeld over drie missies." %}
{% include panels/step.html num="02" title="Elk leerdoel wordt een opdracht" text="Een leerdoel krijgt een situatie waarin je moet kiezen: lijnen trekken in een mailbox, verbanden leggen, een prompt inkorten. Zo werden het tien opdrachten." %}
{% include panels/step.html num="03" title="Jullie beleid, jullie situaties" text="In de demo werk je bij Northfield. In een versie voor jullie staan bij elke keuze jullie eigen AI-beleid, jullie toegestane tools en de situaties die bij jullie voorkomen. Het beleid schrijven we niet; dat weten jullie het best." %}
{% include panels/step.html num="04" title="Testen en aanscherpen" text="We testen elke versie op laptop en telefoon en scherpen aan waar spelers vastlopen. Via Prepo staat een nieuwe versie meteen klaar, ook voor testers bij jullie." %}
{% include panels/step.html num="05" title="Het draait waar jouw mensen leren" text="Als SCORM-bestand in je eigen LMS, naast de onboarding die er al is. Zonder LMS via een link in Prepo. Je ziet wie een module heeft gedaan en waar mensen verkeerd kiezen." %}
{% endcapture %}
{% include panels/steps.html variant="flow" items=aanpak_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="aanpak" body=aanpak %}

{%- comment -%}
  6. De methode en het onderzoek erachter. Alleen bevindingen met een bron
  die we kunnen noemen; de bronnen staan eronder met een link.
{%- endcomment -%}
{% capture waarom %}
<h2>Waarom oefenen beter werkt dan een beleid lezen</h2>
<p class="sp-lead">Een AI-beleid staat vaak op intranet. Wat het betekent op een dinsdagochtend met een volle inbox, weet bijna niemand. We ontwerpen elke MicroGame vanuit <a href="{{ '/ontwerpmethodiek/' | relative_url }}">zeven principes</a>; drie ervan steunen op onderzoek.</p>
{% capture waarom_items %}
{% include panels/step.html num="01" title="Ophalen werkt beter dan herlezen" text="Wie kennis zelf moet ophalen, onthoudt meer dan wie de stof nog eens doorleest. Een meta-analyse van 61 studies vond een gemiddeld effect van g = 0,50, en een groter effect als de toets pas een dag of later kwam (Rowland, 2014). In een MicroGame haal je kennis op bij elke keuze." %}
{% include panels/step.html num="02" title="Feedback direct op de keuze" text="Feedback hoort bij de sterkste invloeden op leren, mits hij zegt wat er goed of fout ging en wat de volgende stap is (Hattie en Timperley, 2007). Daarom volgt op elke actie meteen een korte reactie, zonder afleiding." %}
{% include panels/step.html num="03" title="Een spel als deel van een leerroute" text="Serious games leveren meer kennis en betere retentie op dan gewone instructie, vooral als ze worden aangevuld met andere instructie en over meerdere sessies lopen (Wouters e.a., 2013). Daarom past een module naast jullie beleid en onboarding, niet in plaats daarvan." %}
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

{%- comment -%} 7. Bewijs, met een citaat zodra er een echt citaat is {%- endcomment -%}
{% capture bewijs %}
<h2>De demo in cijfers</h2>
{% if page.getuigenis.text and page.getuigenis.text != "" %}
{% include panels/quote.html text=page.getuigenis.text cite=page.getuigenis.cite %}
{% endif %}
<dl class="demo-facts">
  <div><dt>Missies</dt><dd>3</dd></div>
  <div><dt>Opdrachten</dt><dd>10</dd></div>
  <div><dt>Controles vóór verzenden</dt><dd>4</dd></div>
</dl>
<p class="sp-lead sp-lead--center">Met dezelfde aanpak maakten we eerder <a href="{{ '/verhalen/nnvo-it-veiligheid/' | relative_url }}">MicroGames over IT-veiligheid voor NNVO</a> en <a href="{{ '/verhalen/basis-koeltechniek/' | relative_url }}">negen MicroGames over koeltechniek</a> voor Climatools, 21CC Learning en Studium.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="bewijs" body=bewijs %}

{%- comment -%} 8. Vragen {%- endcomment -%}
{% capture vragen %}
{% include panels/faq-item.html question="Moet ik iets installeren of een account maken?" answer="Nee. De demo draait in je browser, op laptop of telefoon, en opent in een nieuw tabblad. Deze pagina blijft open." %}
{% include panels/faq-item.html question="Kan dit met ons eigen AI-beleid?" answer="Ja, daar is het voor. Jullie weten welke tools mogen en wat er wel en niet in mag; wij maken daar situaties van. Het beleid zelf schrijven we niet. Is er nog geen beleid, dan is dat de eerste stap." %}
{% include panels/faq-item.html question="Regelt dit onze AI-geletterdheid of compliance?" answer="Nee, dat beloven we niet. Wat het wel doet: zorgen dat mensen weten wat ze moeten doen als ze een AI-tool openen, en laten zien waar ze nog verkeerd kiezen." %}
{% include panels/faq-item.html question="Draait het in onze leeromgeving?" answer="Ja. Je krijgt een SCORM-bestand dat je in je eigen LMS zet. Zonder LMS kan het ook via een gewone link, in onze omgeving Prepo." %}
{% include panels/faq-item.html question="In welke talen?" answer="De demo is er in het Nederlands en het Engels." %}
{% include panels/faq-item.html question="Wat kost het?" answer="Dat hangt af van het aantal situaties en van waar het draait. Je kunt klein beginnen: één module over één onderwerp. Dan weet je of het werkt voordat je meer doet." %}
{% endcapture %}
{% capture vragen_body %}
<h2>Wat je je misschien afvraagt</h2>
{% include panels/faq.html label="Vragen over de demo" items=vragen %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=vragen_body %}

{%- comment -%} 9. Het formulier, voor iedereen, gespeeld of niet {%- endcomment -%}
{% include panels/form.html id="contact" casus=page.casus compact=true message="Wil contact over de demo AI Wijzer" title="Wil je dit ook voor jouw organisatie?" lead="Een module over AI-gebruik met jullie eigen beleid, of een ander spel of e-learning die echt werkt. Laat je naam en een e-mailadres of telefoonnummer achter; we bellen of mailen je om te horen waar jouw mensen mee moeten oefenen." submit_label="Neem contact met me op" submit_note="Je krijgt een persoonlijk antwoord, geen nieuwsbrief." %}

{% include panels/footer-reveal.html %}
</div>

<script src="{{ '/assets/js/demo.js' | relative_url }}" defer></script>
