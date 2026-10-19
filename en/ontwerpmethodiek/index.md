---
layout: default
lang: en
title: Design methodology
description: The seven principles behind every Preludens design — sharp in content, solid in technology and always aimed at learning that becomes applicable.
body_class: page-panels
permalink: /ontwerpmethodiek/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Seven principles behind every design{% endcapture %}
{% capture hero_lead %}These principles shape how Daan and Jan-Willem design together: sharp in content, solid in technology and always aimed at learning that becomes applicable in practice.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Book a GameStorm →" primary_href="/gamestorm/" secondary_label="Back to the team" secondary_href="/team/" %}
{% endcapture %}
{% include panels/hero.html kicker="Design methodology" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/ontwerpmethodiek-hero.jpg" figure_alt="Designers working together on a learning experience" figure_href="/gamestorm/" figure_caption="From learning goal to playable experience." %}

{% capture why_body %}
<h3>Why a methodology</h3>
<h2>From learning goal to an experience that sticks</h2>
<p class="sp-lead sp-lead--center">
  A good learning experience doesn't happen by chance. We work from a fixed set of principles that ensure every
  story, choice and MicroGame traces back to a clear learning goal — and that the technology strengthens the
  experience rather than getting in the way.
</p>
{% endcapture %}
{% include panels/panel.html variant="mist" body=why_body %}

{% capture principle_items %}
{% include panels/step.html num="01" title="Use clear and achievable objectives" text="Every successful design starts with a solid goal. Decide what you want to achieve, make sure it's attainable and set a way to measure progress. We turn well-defined learning goals into challenges for maximum intrinsic motivation." %}
{% include panels/step.html num="02" title="Balance knowledge with skill and luck" text="Gameplay focuses on growing knowledge, and success comes from applying it. While skill and luck are part of gameplay, the player should strongly feel that progress is based on knowledge." %}
{% include panels/step.html num="03" title="Use mechanics drawn from reality" text="Knowledge grows when you recognise and understand the context. The closer we stay to reality, the higher the retention. Recognisable mechanics also make the gameplay more accessible and understandable." %}
{% include panels/step.html num="04" title="Focus on positive, human emotions" text="Intrinsic motivation only arises when the player is emotionally involved with the material. It's about the desire to learn and to finish and achieve — and that emotion doesn't even have to be tied directly to the learning goals." %}
{% include panels/step.html num="05" title="Make controls robust" text="A training should be robust and as bug-free as possible. Interaction is logical and the player can get started right away without getting lost. Robust also means moving through the object at the right pace." %}
{% include panels/step.html num="06" title="Give clear feedback, without distraction" text="Every action — right or wrong — is followed by immediate feedback, with no delay. The feedback is clear and to the point, so the player knows exactly what's expected now and in future." %}
{% include panels/step.html num="07" title="Always make the next step clear" text="The player always knows what's expected, how to make progress and what they can do to improve it. The object feels logical and naturally gives a sense of accomplishment throughout the training." %}
{% endcapture %}
{% capture principles_body %}
<h2>The seven principles</h2>
{% include panels/steps.html variant="flow" items=principle_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=principles_body %}

{% capture cta_left %}In a single half-day we translate your learning challenge into a first concept — with these principles as the foundation.{% endcapture %}
{% capture cta_right %}You'll see straight away how our methodology works in practice.{% endcapture %}
{% include panels/cta.html kicker="Curious how this works for you?" title="Take the first step with a GameStorm" left=cta_left right=cta_right stack=true primary_label="Book a GameStorm" primary_href="/gamestorm/" secondary_label="Get in touch" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
