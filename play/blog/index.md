---
layout: default
lang: nl
title: Play-blog
description: Inzichten over spel, leren en gedragsverandering — warm, praktisch en educatief.
permalink: /play/blog/
body_class: page-play-blog
---

{% include locale.html %}

<section class="page-hero">
  <div class="container page-hero-inner">
    <p class="hero-eyebrow"><a href="{{ '/play/' | relative_url }}">{{ t.nav.play }}</a></p>
    <h1>Play-blog</h1>
    <p>
      Inzichten over spel, leren en gedragsverandering. Praktische ideeën die je morgen al kunt toepassen —
      met de warme, heldere toon die past bij hoe wij over leren denken.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    <ul class="play-blog-list" role="list">
      {% assign current_lang = site.active_lang | default: site.default_lang %}
      {% assign posts = site.play_blog | sort: "date" | reverse %}
      {% for post in posts %}
        {% assign item_lang = post.lang | default: site.default_lang %}
        {% unless item_lang == current_lang %}{% continue %}{% endunless %}
        <li class="play-blog-card">
          <a
            class="play-blog-card__link"
            href="{{ post.url | relative_url }}"
            aria-label="{{ t.play_blog.read_post_aria | replace: '%s', post.title }}"
          >
            {% if post.date %}
              <time class="play-blog-card__date" datetime="{{ post.date | date: '%Y-%m-%d' }}">
                {{ post.date | date: "%-d %B %Y" }}
              </time>
            {% endif %}
            <h2 class="play-blog-card__title">{{ post.title }}</h2>
            {% if post.summary %}
              <p class="play-blog-card__excerpt">{{ post.summary }}</p>
            {% endif %}
            <span class="play-blog-card__cta">{{ t.play_blog.read_post }} <span aria-hidden="true">→</span></span>
          </a>
        </li>
      {% endfor %}
    </ul>
    <p class="play-blog-back">
      <a href="{{ '/play/' | relative_url }}">{{ t.play_blog.back_to_play }}</a>
    </p>
  </div>
</section>
