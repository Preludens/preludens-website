---
layout: default
title: Verhalen
description: Klantverhalen van teams die met Preludens leren door te spelen.
permalink: /verhalen/
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

<section class="section">
  <div class="container">
    <div class="story-grid">
      {% assign verhalen = site.verhalen | sort: "order" %}
      {% for verhaal in verhalen %}
        <a class="story-card" href="{{ verhaal.url | relative_url }}">
          {% if verhaal.client_logo %}
            <div class="story-card-logo">
              <img
                src="{{ '/assets/images/clients/' | append: verhaal.client_logo | relative_url }}"
                alt="{{ verhaal.client }}"
                width="160"
                height="64"
                loading="lazy"
                decoding="async"
              >
            </div>
          {% endif %}
          <p class="story-card-meta">{{ verhaal.client }} · {{ verhaal.project }}</p>
          <h2 class="story-card-title">{{ verhaal.title }}</h2>
          <p class="story-card-summary">{{ verhaal.summary }}</p>
          <span class="story-card-link">Lees het verhaal →</span>
        </a>
      {% endfor %}
    </div>
    <p class="story-cta">
      Wil je jouw verhaal delen of referenties bespreken?
      <a href="{{ '/contact/' | relative_url }}">Mail ons</a>.
    </p>
  </div>
</section>
