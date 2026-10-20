---
layout: default
lang: nl
title: Verhalen
description: Klantverhalen van teams die met Preludens leren door te spelen.
body_class: page-panels page-verhalen
permalink: /verhalen/
---

{% include locale.html %}

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Verhalen die teams in beweging zetten{% endcapture %}
{% capture hero_lead %}Via storytelling maken we complexe kennis herkenbaar en speelbaar. Hier vind je projecten, kennisartikelen en binnenkort demo’s en whitepapers — de verhalen die we samen met opdrachtgevers schrijven.{% endcapture %}
{% include panels/hero.html kicker="Verhalen" title=hero_title lead=hero_lead figure_src="/assets/images/hero/verhalen-hero.jpg" figure_alt="Een route langs projecten en verhalen" figure_href="/contact/" figure_caption="Geschreven samen met opdrachtgevers." %}

{% capture featured_items %}
{% include panels/verhalen-items.html scope="featured" %}
{% endcapture %}
{% capture featured_body %}
<h3>{{ t.verhalen.featured_label }}</h3>
<div class="sp-posts" data-verhalen-featured>
{{ featured_items }}
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" body=featured_body %}

{% capture grid_items %}
{% include panels/verhalen-items.html scope="grid" %}
{% endcapture %}
{% capture overview_body %}
<h3>{{ t.verhalen.section_label }}</h3>
<h2>{{ t.verhalen.section_title }}</h2>
<p class="sp-lead">{{ t.verhalen.section_intro }}</p>
{% include panels/filters.html label=t.verhalen.filter_label all=t.verhalen.filter_all projects=t.verhalen.filter_projects knowledge=t.verhalen.filter_knowledge whitepapers=t.verhalen.filter_whitepapers demos=t.verhalen.filter_demos %}
<div class="verhalen-panel" id="verhalen-panel" role="tabpanel" aria-labelledby="verhalen-filter-all">
  <div class="sp-posts" data-verhalen-grid role="list">
  {{ grid_items }}
  </div>
  {% include panels/empty-state.html title=t.verhalen.empty_whitepapers_title text=t.verhalen.empty_whitepapers_text whitepapers_title=t.verhalen.empty_whitepapers_title whitepapers_text=t.verhalen.empty_whitepapers_text demos_title=t.verhalen.empty_demos_title demos_text=t.verhalen.empty_demos_text %}
</div>
{% endcapture %}
{% include panels/panel.html variant="paper" body=overview_body %}

{% capture cta_left %}Wil je jouw traject delen of referenties bespreken?{% endcapture %}
{% capture cta_right %}We denken graag mee.{% endcapture %}
{% include panels/cta.html kicker="Verhalen" title="Jouw verhaal hier?" left=cta_left right=cta_right stack=true primary_label="Neem contact op" primary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
