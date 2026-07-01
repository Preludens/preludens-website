---
layout: default
lang: en
title: Stories
description: Client stories from teams who learn by playing with Preludens.
permalink: /verhalen/
body_class: page-verhalen
---

{% include locale.html %}

<section class="page-hero">
  <div class="container page-hero-inner">
    <p class="hero-eyebrow">Stories</p>
    <h1>Stories that move teams forward</h1>
    <p>
      From e-learning to a journey that challenges, activates, and inspires — these are the stories
      we write together with our clients.
    </p>
  </div>
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
