---
layout: default
lang: en
title: Stories
description: Client stories from teams who learn by playing with Preludens.
permalink: /verhalen/
body_class: page-verhalen
---

{% include locale.html %}

<section class="hero-banner hero-banner--dark" style="--hero-bg: url('{{ '/assets/images/hero/verhalen-hero.jpg' | relative_url }}');">
  <div class="container">
    <div class="hero-banner__inner">
      <p class="hero-banner__eyebrow">Stories</p>
      <h1>Stories that <span class="hl">move teams</span> forward</h1>
      <hr class="hero-banner__accent">
      <p class="hero-banner__lead">
        From e-learning to a journey that challenges, activates, and inspires — these are the stories
        we write together with our clients.
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
      <h2>Your story here?</h2>
      <p>Want to share your journey or discuss references? We are happy to think along.</p>
      <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Get in touch</a>
    </div>
  </div>
</section>
