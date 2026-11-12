---
layout: landing
lang: nl
title: "Betere praktijkdagen"
description: >-
  Deelnemers oefenen vooraf met situaties uit hun vak, en de instructeur ziet vóór de praktijkdag waar de groep staat. Zo gaat de dag naar oefenen.
permalink: /oplossingen/praktijkdagen/
casus: praktijkdagen
body_class: page-panels landing-praktijkdagen
# Nog niet live: tot de experimenten starten houden we de pagina uit de
# zoekresultaten en uit de sitemap. Beslissing G is om alle vier te indexeren
# zodra ze af zijn — haal dan deze twee regels weg, de canonical staat er dan
# al via jekyll-seo-tag.
robots: "noindex, nofollow"
sitemap: false
---

{%- comment -%}
  Landingspagina 1 — Betere praktijkdagen
  Kopij: _data/casussen/praktijkdagen.yml · UTM-campagne: exp1-praktijkdagen

  Alle vier de casuspagina's gebruiken hetzelfde format (variant D), zodat je
  het verschil tussen de boodschappen meet en niet tussen twee indelingen.
  De opbouw staat in _includes/varianten/pagina-d.html, de tekst en beelden
  in het databestand. Zie _marketing/landingspagina-varianten.md.
{%- endcomment -%}

{% include varianten/pagina-d.html casus="praktijkdagen" %}
