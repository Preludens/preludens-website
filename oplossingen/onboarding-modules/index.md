---
layout: landing
lang: nl
title: "Onboarding in losse modules"
description: >-
  Plaatsaanduiding. De meta-omschrijving komt uit _marketing/casus-4-onboarding-modules.md,
  samen met de rest van de kopij.
permalink: /oplossingen/onboarding-modules/
casus: onboarding-modules
body_class: page-panels landing-onboarding-modules
# Stub: er staat nog geen kopij op deze pagina. Tot die er is houden we hem uit
# de zoekresultaten en uit de sitemap. Beslissing G is om alle vier te
# indexeren zodra ze af zijn — haal dan deze twee regels weg, de canonical
# staat er dan al via jekyll-seo-tag.
robots: "noindex, nofollow"
sitemap: false
---

{%- comment -%}
  Landingspagina 4 — Onboarding in losse modules
  Kopij: _marketing/casus-4-onboarding-modules.md · UTM-campagne: exp4-onboarding-modules

  De blokvolgorde ligt vast en is hier de structuur van het bestand:
  hero → herkenning → wat je krijgt → hoe het werkt → bewijs → bezwaren → actie.
  Verplaats de blokken niet; de vier pagina's moeten onderling vergelijkbaar
  blijven, anders meet je straks het verschil tussen twee indelingen in plaats
  van tussen twee boodschappen.

  Elke `landing-placeholder` is een plek waar tekst komt. Vervang hem door de
  echte alinea's; laat het paneel en zijn id staan, want cta_click gebruikt die
  id als `cta_position`.

  De panelen komen uit _includes/panels/. Voeg hier niets nieuws toe wat daar
  al bestaat.
{%- endcomment -%}

<div class="panel-stack">

{%- comment -%} 1. Hero — wie je bent en wat je hier kunt doen {%- endcomment -%}
{% assign demo_url = site.preludens.demo.url %}
{% if demo_url and demo_url != "" %}
  {% capture hero_actions %}{% include panels/actions.html primary_label="Speel de demo" primary_href=demo_url primary_demo=true casus="onboarding-modules" primary_position="hero" secondary_label="Vraag een gesprek aan" secondary_href="#actie" %}{% endcapture %}
{% else %}
  {%- comment -%}
    Beslissing F staat open: er is nog geen URL waarop de demo direct opent.
    Zolang preludens.demo.url leeg is, is het formulier de primaire actie.
    Vul die waarde in _config.yml en de demo wordt hier de eerste knop, met
    demo_start eraan.
  {%- endcomment -%}
  {% capture hero_actions %}{% include panels/actions.html primary_label="Vraag een gesprek aan" primary_href="#actie" primary_position="hero" %}{% endcapture %}
{% endif %}
{% include panels/hero.html kicker="Plaatsaanduiding: bovenkop" title="Plaatsaanduiding: kop van de pagina" lead="Plaatsaanduiding: de belofte in één of twee zinnen." actions=hero_actions %}

{%- comment -%} 2. Herkenning — het probleem in hun eigen woorden {%- endcomment -%}
{% capture herkenning %}
<h2>Plaatsaanduiding: herkenning</h2>
<p class="landing-placeholder">Het probleem in de woorden van de lezer. Bron: paragraaf 2 van _marketing/casus-4-onboarding-modules.md.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="herkenning" body=herkenning %}

{%- comment -%} 3. Wat je krijgt {%- endcomment -%}
{% capture krijgt_items %}
{% include panels/value.html title="Plaatsaanduiding" text="Wat de lezer concreet krijgt. Eerste van drie." %}
{% include panels/value.html title="Plaatsaanduiding" text="Wat de lezer concreet krijgt. Tweede van drie." %}
{% include panels/value.html title="Plaatsaanduiding" text="Wat de lezer concreet krijgt. Derde van drie." %}
{% endcapture %}
{% capture krijgt %}
<h2>Plaatsaanduiding: wat je krijgt</h2>
{% include panels/values.html label="Wat je krijgt" items=krijgt_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="wat-je-krijgt" body=krijgt %}

{%- comment -%} 4. Hoe het werkt {%- endcomment -%}
{% capture stappen %}
{% include panels/step.html num="1" title="Plaatsaanduiding" text="Eerste stap." %}
{% include panels/step.html num="2" title="Plaatsaanduiding" text="Tweede stap." %}
{% include panels/step.html num="3" title="Plaatsaanduiding" text="Derde stap." %}
{% endcapture %}
{% capture werkt %}
<h2>Plaatsaanduiding: hoe het werkt</h2>
{% include panels/steps.html variant="cards" items=stappen %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="hoe-het-werkt" body=werkt %}

{%- comment -%}
  5. Bewijs — werk dat er al staat. Hier horen de verhalen uit /verhalen/ bij,
  met panels/media.html of panels/video.html. Welk project en welke film, staat
  in paragraaf 5 van de casus; het beeld staat onder assets/images/verhalen/.
{%- endcomment -%}
{% capture bewijs %}
<h2>Plaatsaanduiding: bewijs</h2>
<p class="landing-placeholder">Eén project dat deze lezer herkent, met beeld uit assets/images/verhalen/ via panels/media.html, of de explainer via panels/video.html. video_play en video_75 vuren dan automatisch.</p>
{% endcapture %}
{% include panels/panel.html variant="harbor" id="bewijs" body=bewijs %}

{%- comment -%} 6. Bezwaren — de vragen die ze stellen voordat ze ja zeggen {%- endcomment -%}
{% capture vragen %}
{% include panels/faq-item.html question="Plaatsaanduiding: eerste bezwaar" answer="Het antwoord, zonder eromheen te draaien." %}
{% include panels/faq-item.html question="Plaatsaanduiding: tweede bezwaar" answer="Het antwoord, zonder eromheen te draaien." %}
{% include panels/faq-item.html question="Plaatsaanduiding: derde bezwaar" answer="Het antwoord, zonder eromheen te draaien." %}
{% endcapture %}
{% capture bezwaren %}
<h2>Plaatsaanduiding: bezwaren</h2>
{% include panels/faq.html label="Veelgestelde vragen" items=vragen %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="bezwaren" body=bezwaren %}

{%- comment -%} 7. Actie — de uitgang van de pagina {%- endcomment -%}
{% include panels/form.html id="actie" casus="onboarding-modules" title="Plaatsaanduiding: kop boven het formulier" lead="Plaatsaanduiding: één zin over wat er gebeurt nadat iemand dit verstuurt." submit_note="Plaatsaanduiding: wat de lezer terugkrijgt, en wanneer." %}

</div>
