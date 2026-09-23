---
layout: default
lang: nl
title: Inspiratie
description: Projecten, kennisartikelen en demo’s van teams die met Preludens leren door te spelen.
permalink: /inspiratie/
permalink_lang:
  en: /verhalen/
body_class: page-verhalen-test
---

{% include locale.html %}

<section class="hero-banner hero-banner--dark" style="--hero-bg: url('{{ '/assets/images/hero/verhalen-hero.jpg' | relative_url }}');">
  <div class="container">
    <div class="hero-banner__inner">
      <p class="hero-banner__eyebrow">Inspiratie</p>
      <h1>Verhalen die teams <span class="hl">in beweging</span> zetten</h1>
      <hr class="hero-banner__accent">
      <p class="hero-banner__lead">
        Via storytelling maken we complexe kennis herkenbaar en speelbaar. Hier vind je projecten, kennisartikelen
        en binnenkort demo’s en whitepapers — de verhalen die we samen met opdrachtgevers schrijven.
      </p>
    </div>
  </div>
  <div class="hero-filters" data-verhalen-filters>
    <p class="verhalen-filters__label" id="verhalen-filter-label">{{ t.verhalen.filter_label }}</p>
    <div class="hero-filters__row">
      <div class="verhalen-filters__list" role="tablist" aria-labelledby="verhalen-filter-label">
        <button class="verhalen-filters__btn is-active" type="button" role="tab" id="verhalen-filter-all" aria-selected="true" aria-controls="verhalen-panel" data-verhaal-filter="all">{{ t.verhalen.filter_all }}</button>
        <button class="verhalen-filters__btn" type="button" role="tab" id="verhalen-filter-projecten" aria-selected="false" aria-controls="verhalen-panel" data-verhaal-filter="projecten">{{ t.verhalen.filter_projects }}</button>
        <button class="verhalen-filters__btn" type="button" role="tab" id="verhalen-filter-kennis" aria-selected="false" aria-controls="verhalen-panel" data-verhaal-filter="kennis">{{ t.verhalen.filter_knowledge }}</button>
        <button class="verhalen-filters__btn" type="button" role="tab" id="verhalen-filter-demos" aria-selected="false" aria-controls="verhalen-panel" data-verhaal-filter="demos">{{ t.verhalen.filter_demos }}</button>
      </div>
      <form class="hero-search" role="search">
        <label class="sr-only" for="verhalen-search">Zoeken</label>
        <input class="hero-search__input" id="verhalen-search" type="text" data-verhalen-search placeholder="Zoeken" autocomplete="off" enterkeyhint="search">
        <button class="hero-search__clear" type="button" data-verhalen-search-clear hidden aria-label="Zoekopdracht wissen">×</button>
      </form>
    </div>
  </div>
  <span class="hero-banner__dots" aria-hidden="true"></span>
</section>

<section class="section section--tight-above">
  <div class="container">
    {% include verhalen-overview-test.html %}
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
