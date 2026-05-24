---
layout: default
lang: en
title: Stories
description: Client stories from teams who learn by playing with Preludens.
permalink: /verhalen/
body_class: page-verhalen
---

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
      <span class="section-label">Clients</span>
      <h2>Learning together through play</h2>
      <p>
        Each story shows how we turn a concrete question into interactive learning experiences
        with measurable impact.
      </p>
    </div>

    <div class="story-grid" role="list">
      {% assign current_lang = site.active_lang | default: site.default_lang %}
      {% assign verhalen = site.verhalen | sort: "order" %}
      {% for verhaal in verhalen %}
        {% assign item_lang = verhaal.lang | default: site.default_lang %}
        {% unless item_lang == current_lang %}{% continue %}{% endunless %}
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
      <h2>Your story here?</h2>
      <p>Want to share your journey or discuss references? We are happy to think along.</p>
      <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Get in touch</a>
    </div>
  </div>
</section>
