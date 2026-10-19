---
layout: default
lang: en
title: Contact
description: Get in touch with Preludens — from a GameStorm to a first chapter or a full playable learning experience.
body_class: page-panels
permalink: /contact/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Turn your learning challenge into a story that actively engages people{% endcapture %}
{% capture hero_lead %}Do you have knowledge that needs to stick better, behaviour that needs to change, or a skill people need to practise? Tell us what you are running into. We are happy to think along about a fitting route: from GameStorm to first chapter or a full playable learning experience.{% endcapture %}
{% include panels/hero.html kicker="Contact" title=hero_title lead=hero_lead figure_src="/assets/images/hero/contact-hero.jpg" figure_alt="An open landscape with a route towards the horizon" figure_href="/gamestorm/" figure_caption="Tell us what you are running into." %}

{% capture contact_items %}
{% include panels/value.html title="Preludens B.V." text="Chamber of Commerce: 99042827<br>VAT ID: NL868763664B01" %}
{% include panels/value.html title="General" text="Email: <a href=\"mailto:info@preludens.nl\">info@preludens.nl</a><br>Phone: <a href=\"tel:+31154042027\">+31 15 404 202 7</a>" %}
{% include panels/value.html title="Support" text="Email: <a href=\"mailto:support@preludens.nl\">support@preludens.nl</a><br>Phone: <a href=\"tel:+31154042028\">+31 15 404 202 8</a>" %}
{% include panels/value.html title="Visit" text="By appointment only." %}
{% endcapture %}
{% capture talk_body %}
<h3>For anyone with a question or who wants to spar</h3>
<h2>Start the conversation</h2>
<p class="sp-lead">Want to explore a learning challenge, ask a question or look together at which route fits your organisation? Feel free to get in touch. We are happy to think along with you.</p>
{% include panels/values.html label="Preludens contact details" columns="two" items=contact_items %}
<p class="sp-lead">Send an email to <a href="mailto:info@preludens.nl">info@preludens.nl</a>. We will get in touch to look together at which next step makes sense.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" body=talk_body %}

{% capture start_main %}
<h3>Start with a GameStorm</h3>
<p class="sp-lead">A creative half-day workshop in which we explore your learning challenge and translate it into a first direction. You get more grip on audience, learning goals, story and possible game mechanisms.</p>
{% include panels/actions.html secondary_label="More about GameStorm" secondary_href="/gamestorm/" %}
{% endcapture %}
{% capture start_aside %}
<h3>Or start small with one chapter</h3>
<p class="sp-lead">Develop a first MicroGame Story chapter in one month around one skill or learning-goal cluster. That way you quickly experience how story, choices and feedback make your content playable.</p>
{% include panels/actions.html secondary_label="More about one chapter" secondary_href="/diensten/#microgame-stories" %}
{% endcapture %}
{% capture start_body %}
<h3>Preludens’ mission is to lower the barrier to game-based learning</h3>
<h2>How can you start with a low barrier?</h2>
{% include panels/aside.html variant="even" main=start_main aside=start_aside %}
<h3>Tell us briefly what you are running into</h3>
{% include panels/actions.html primary_label="Send an email to info@preludens.nl →" primary_href="mailto:info@preludens.nl" %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=start_body %}

<!-- TODO [WACHTEN OP FOTO]: replace gamestorm/sessie.* with a photo of you together (TU Twente project) -->
{% capture expect_copy %}
<h3>For anyone who wants to explore a learning challenge and get direction</h3>
<h2>What can you expect?</h2>
<p class="sp-lead">We start with an introduction. In that conversation we map your challenge, audience and knowledge need. You do not need a fully worked-out plan yet; the first exploration helps clarify what the learning experience should connect to.</p>
<p class="sp-lead">After that we can design the key stories, skills and learning goals together in a GameStorm. From that direction we work towards a learning experience with recognisable situations, choices, feedback and game mechanisms that fit practice.</p>
<p class="sp-lead">Once the direction is clear, we design and develop the learning experience. We test, improve and prepare delivery. Depending on the chosen route, the experience can then be used in your own LMS or made available via Prepo.</p>
{% endcapture %}
{% capture expect_body %}
{% include panels/media.html src="/assets/images/gamestorm/sessie.jpg" webp="/assets/images/gamestorm/sessie.webp" alt="An introduction and exploration of a learning challenge" ratio="1400 / 933" body=expect_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=expect_body %}

{% capture route_checks %}
{% include panels/check.html text="We get acquainted and map your learning need." %}
{% include panels/check.html text="In a GameStorm we translate challenge, audience and learning goals into a first direction." %}
{% include panels/check.html text="We design a story, choices, feedback and game mechanisms that fit practice." %}
{% include panels/check.html text="We develop, test and improve the learning experience." %}
{% include panels/check.html text="After delivery we support distribution, management and support via your LMS or via Prepo." %}
{% endcapture %}
{% capture route_body %}
<h3>The route in short</h3>
<h2>From introduction to manageable delivery</h2>
{% include panels/checklist.html label="The route in short" columns="two" items=route_checks %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=route_body %}

{% capture prepo_copy %}
<p class="sp-lead">Via Prepo, MicroGames and Stories stay available, findable and well managed. You keep grip on distribution, feedback, versions, statistics, files and support from one environment.</p>
<p class="sp-lead">For new MicroGames and Stories, three months of Prepo access is included. In that period the learning experience can be launched, tested, followed and improved where needed.</p>
{% include panels/actions.html primary_label="More about Prepo →" primary_href="/prepo/" %}
{% endcapture %}
{% capture prepo_body %}
<h3>After delivery the learning experience stays manageable</h3>
<h2>A strong learning experience does not stop at launch</h2>
{% include panels/media.html src="/assets/images/prepo/overzicht.jpg" webp="/assets/images/prepo/overzicht.webp" alt="Prepo overview for management after delivery" ratio="1400 / 875" reverse=true body=prepo_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=prepo_body %}

{% include panels/footer-reveal.html %}

</div>
