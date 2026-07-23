---
layout: default
lang: nl
title: Verhalen
description: Klantverhalen van teams die met Preludens leren door te spelen.
permalink: /verhalen/
body_class: page-verhalen
---

{% include locale.html %}

<section class="hero-banner hero-banner--dark" style="--hero-bg: url('{{ '/assets/images/hero/verhalen-hero.jpg' | relative_url }}');">
  <div class="container">
    <div class="hero-banner__inner">
      <p class="hero-banner__eyebrow">Verhalen</p>
      <h1>Verhalen die teams <span class="hl">in beweging</span> zetten</h1>
      <hr class="hero-banner__accent">
      <p class="hero-banner__lead">
        Via storytelling maken we complexe kennis herkenbaar en speelbaar. Hier vind je projecten, kennisartikelen
        en binnenkort demo’s en whitepapers — de verhalen die we samen met opdrachtgevers schrijven.
      </p>
    </div>
  </div>
  <span class="hero-banner__dots" aria-hidden="true"></span>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-header">
      <span class="section-label">{{ t.verhalen.section_label }}</span>
      <h2>{{ t.verhalen.section_title }}</h2>
      <p>{{ t.verhalen.section_intro }}</p>
    </div>

    {% include verhalen-overview.html %}
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
