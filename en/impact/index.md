---
layout: default
lang: en
title: Impact
description: Visible results through storytelling, MicroGames, and data-driven improvement.
body_class: page-panels
permalink: /impact/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Learning that delivers visible results{% endcapture %}
{% capture hero_lead %}We measure what matters: engagement, decisiveness, and behaviour change in practice.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="See the stories →" primary_href="/verhalen/" secondary_label="Get in touch" secondary_href="/contact/" %}
{% endcapture %}
{% include panels/hero.html kicker="Impact" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/impact-hero.jpg" figure_alt="A route on which progress becomes visible" figure_href="/verhalen/" figure_caption="A noticeable shift, not just numbers." %}

{% capture impact_items %}
{% include panels/value.html icon="📈" title="Activate" text="MicroGames and dilemmas turn knowledge into action — with immediate feedback on every choice." %}
{% include panels/value.html icon="🧠" title="Retain" text="Story and repetition anchor insight in a way that matches how people really learn." %}
{% include panels/value.html icon="📊" title="Improve" text="Data from interactions helps you adjust learning goals and behaviour with purpose." %}
{% include panels/value.html icon="✨" title="Motivate" text="Intrinsic engagement through relevant scenarios and a safe space to play." %}
{% endcapture %}
{% capture impact_body %}
{% include panels/values.html label="Where learning delivers results" columns="two" items=impact_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=impact_body %}

{% capture closing_body %}
<p class="sp-lead">For us, impact is not only completion rates, but a noticeable shift in how people weigh options, choose, and act when it counts.</p>
{% include panels/actions.html secondary_label="Read stories from our clients →" secondary_href="/verhalen/" %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=closing_body %}

{% include panels/footer-reveal.html %}

</div>
