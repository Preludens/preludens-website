---
layout: default
lang: nl
title: Play-blog
description: Inzichten over spel, leren en gedragsverandering — warm, praktisch en educatief.
body_class: page-panels page-play-blog
permalink: /play/blog/
---

{% include locale.html %}

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_kicker %}<a href="{{ '/play/' | relative_url }}">{{ t.nav.play }}</a>{% endcapture %}
{% capture hero_title %}Play-blog{% endcapture %}
{% capture hero_lead %}Inzichten over spel, leren en gedragsverandering. Praktische ideeën die je morgen al kunt toepassen — met de warme, heldere toon die past bij hoe wij over leren denken.{% endcapture %}
{% include panels/hero.html kicker=hero_kicker title=hero_title lead=hero_lead figure_src="/assets/images/hero/play-hero.jpg" figure_alt="Een open wereld waarin iemand een eigen route kiest" figure_href="/play/" figure_caption="Ideeën die je morgen al kunt toepassen." %}

{% capture post_items %}
{% assign current_lang = site.active_lang | default: site.default_lang %}
{% assign posts = site.play_blog | sort: "date" | reverse %}
{% for post in posts %}
  {% assign item_lang = post.lang | default: site.default_lang %}
  {% unless item_lang == current_lang %}{% continue %}{% endunless %}
  {% comment %}
    De date-filter van Jekyll kent alleen Engelse maandnamen, dus de maand
    komt uit t.months — anders staat er op de Nederlandse pagina "14 July".
  {% endcomment %}
  {% assign month_index = post.date | date: "%-m" | minus: 1 %}
  {% capture post_date %}{{ post.date | date: "%-d" }} {{ t.months[month_index] }} {{ post.date | date: "%Y" }}{% endcapture %}
  {% assign post_stamp = post.date | date: "%Y-%m-%d" %}
  {% assign post_aria = t.play_blog.read_post_aria | replace: "%s", post.title %}
  {% include panels/post.html href=post.url title=post.title text=post.summary cta=t.play_blog.read_post aria=post_aria meta=post_date datetime=post_stamp %}
{% endfor %}
{% endcapture %}
{% capture blog_body %}
{% include panels/posts.html label=t.play_blog.breadcrumb items=post_items %}
{% include panels/actions.html secondary_label=t.play_blog.back_to_play secondary_href="/play/" %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=blog_body %}

{% include panels/footer-reveal.html %}

</div>
