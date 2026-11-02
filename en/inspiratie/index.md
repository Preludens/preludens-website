---
layout: default
lang: en
title: Inspiration
description: Projects, knowledge articles and demos from teams who learn by playing with Preludens.
permalink: /inspiratie/
permalink_lang:
  nl: /inspiratie/
body_class: page-verhalen-test
---

{% include locale.html %}

<section class="hero-banner hero-banner--dark" style="--hero-bg: url('{{ '/assets/images/hero/verhalen-hero.jpg' | relative_url }}');">
  <div class="container">
    <div class="hero-banner__inner">
      <p class="hero-banner__eyebrow">Inspiration</p>
      <h1>Stories that set teams <span class="hl">in motion</span></h1>
      <hr class="hero-banner__accent">
      <p class="hero-banner__lead">
        Through storytelling we make complex knowledge recognisable and playable. Here you will find projects, knowledge articles
        and, soon, demos and whitepapers — the stories we write together with our clients.
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
        <button class="verhalen-filters__btn" type="button" role="tab" id="verhalen-filter-diensten" aria-selected="false" aria-controls="verhalen-panel" data-verhaal-filter="diensten">{{ t.verhalen.filter_services }}</button>
        <button class="verhalen-filters__btn" type="button" role="tab" id="verhalen-filter-demos" aria-selected="false" aria-controls="verhalen-panel" data-verhaal-filter="demos">{{ t.verhalen.filter_demos }}</button>
      </div>
      <form class="hero-search" role="search">
        <label class="sr-only" for="verhalen-search">Search</label>
        <input class="hero-search__input" id="verhalen-search" type="text" data-verhalen-search placeholder="Search" autocomplete="off" enterkeyhint="search">
        <button class="hero-search__clear" type="button" data-verhalen-search-clear hidden aria-label="Clear search">×</button>
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
      <h2>Your story here?</h2>
      <p>Want to share your project or talk about references? We are happy to think it through with you.</p>
      <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Get in touch</a>
    </div>
  </div>
</section>
