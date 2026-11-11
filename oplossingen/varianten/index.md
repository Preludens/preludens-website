---
layout: landing
lang: nl
title: "Drie formats voor de landingspagina's"
description: >-
  Interne vergelijking van drie formats voor de landingspagina's, uitgewerkt
  voor casus 1 (praktijkdagen).
permalink: /oplossingen/varianten/
body_class: page-panels landing-variant
# Intern overzicht, geen pagina voor zoekmachines en niet voor bezoekers.
robots: "noindex, nofollow"
sitemap: false
---

{%- comment -%}
  Intern overzicht om de drie varianten naast elkaar te openen. Geen casus in
  de front matter: wat hier gebeurt, hoort niet in de cijfers van casus 1.
  De afwegingen staan in _marketing/landingspagina-varianten.md.
{%- endcomment -%}

<div class="panel-stack">
{% capture overzicht %}
<h2>Drie formats, één casus</h2>
<p class="sp-lead">Alle drie zijn uitgewerkt voor casus 1, betere praktijkdagen, met dezelfde tekstbron, hetzelfde speelbare fragment en hetzelfde formulier. Wat verschilt, is de tactiek.</p>
<ul class="sp-values" aria-label="De drie varianten">
  <li><strong><a href="{{ '/oplossingen/varianten/a/' | relative_url }}">A — Demo eerst</a></strong><span>Het fragment staat in de hero. Laten ervaren vóór uitleggen, met zo weinig tekst als het kan.</span></li>
  <li><strong><a href="{{ '/oplossingen/varianten/b/' | relative_url }}">B — Verhaal en bezwaren</a></strong><span>Een lange pagina voor koud verkeer: herkenning, inzicht, aanpak, voorbeeld, bewijs en negen vragen.</span></li>
  <li><strong><a href="{{ '/oplossingen/varianten/c/' | relative_url }}">C — Zelfselectie</a></strong><span>De bezoeker kiest eerst een rol en krijgt een pad op maat. Probeer ook <a href="{{ '/oplossingen/varianten/c/' | relative_url }}?pad=koper">?pad=koper</a>.</span></li>
</ul>
{% endcapture %}
{% include panels/panel.html variant="paper" id="overzicht" body=overzicht %}
</div>
