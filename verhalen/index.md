---
layout: default
title: Verhalen
description: Klantverhalen van teams die met Preludens leren door te spelen.
permalink: /verhalen/
body_class: page-verhalen
---

<section class="page-hero">
  <div class="container page-hero-inner">
    <p class="hero-eyebrow">Verhalen</p>
    <h1>Verhalen die teams in beweging zetten</h1>
    <p>
      Van e-learning naar een reis die uitdaagt, activeert en inspireert — dit zijn de verhalen
      die we samen met opdrachtgevers schrijven.
    </p>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Opdrachtgevers</span>
      <h2>Samen leren door te spelen</h2>
      <p>
        Elk verhaal laat zien hoe we een concrete vraag vertalen naar interactieve leerervaringen
        met merkbare impact.
      </p>
    </div>

    <div class="story-grid" role="list">
      {% assign verhalen = site.verhalen | sort: "order" %}
      {% for verhaal in verhalen %}
        <div role="listitem">
          {% include story-card.html verhaal=verhaal index=forloop.index0 %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cta-band">
      <h2>Jouw verhaal hier?</h2>
      <p>Wil je jouw traject delen of referenties bespreken? We denken graag mee.</p>
      <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Neem contact op</a>
    </div>
  </div>
</section>
