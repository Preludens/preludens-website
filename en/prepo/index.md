---
layout: default
lang: en
title: Prepo
description: Prepo (Preludens Portal) — one environment to use, manage and keep improving your MicroGames and Stories.
body_class: page-panels
permalink: /prepo/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}One environment for use, management and continuous improvement{% endcapture %}
{% capture hero_lead %}Prepo (Preludens Portal) is Preludens’ management and distribution environment. It keeps MicroGames and Stories from scattering across loose links, files, emails and versions after delivery. Prepo brings projects, products, distribution, feedback, statistics, version control and support together in one environment.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Request a demo →" primary_href="/contact/" secondary_label="See our services" secondary_href="/diensten/" %}
{% endcapture %}
{% include panels/hero.html kicker="Prepo · Preludens Portal" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/prepo-hero.jpg" figure_alt="One environment where learning experiences come together" figure_href="/contact/" figure_caption="Everything together, also after delivery." %}

{% capture grip_main %}
<p class="sp-lead">Preludens doesn't just help you design playable learning experiences. We also think along about how those experiences are used, managed and improved. That is why Prepo connects logically to our approach. Your learning experiences stay not only playable, but findable, manageable and ready to evolve.</p>
<p class="sp-lead">After launch, MicroGames and Stories need to remain available, versions need managing and feedback needs somewhere to go. Results need to provide insight, and when something changes the learning experience must be able to grow with it.</p>
<p class="sp-lead">With Prepo you edit the texts in your SCORM files yourself. You then download the updated SCORM version and place it easily in your own LMS. That way you keep more control over your learning content, without every text change needing a new development project.</p>
{% endcapture %}
{% capture grip_checks %}
{% include panels/check.html text="Projects and products neatly together." %}
{% include panels/check.html text="Distribution via central, public links." %}
{% include panels/check.html text="Feedback and support gathered in a structured way." %}
{% include panels/check.html text="Statistics and version control in one place." %}
{% include panels/check.html text="Edit and download SCORM files." %}
{% endcapture %}
{% capture grip_aside %}
{% include panels/checklist.html label="What Prepo brings together" items=grip_checks %}
{% endcapture %}
{% capture grip_body %}
<h3>Distribution · Management · Support</h3>
<h2>Stay in control of your MicroGames and Stories via the Preludens Portal (Prepo)</h2>
{% include panels/aside.html main=grip_main aside=grip_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=grip_body %}

{% capture included_copy %}
<h3>During and after delivery</h3>
<h2>Three months included with new products</h2>
<p class="sp-lead">With new MicroGames and Stories, clients receive three months of free Prepo access as standard after delivery. During that period the learning experience can be launched, tested, used and monitored, with room to gather feedback and review first insights.</p>
<p class="sp-lead"><strong>Flexible renewal afterwards.</strong> A Prepo licence keeps your access to the management environment, optionally extended with support, version control, updates, reporting or further development.</p>
{% endcapture %}
{% capture included_body %}
{% include panels/media.html src="/assets/images/prepo/statistieken.jpg" webp="/assets/images/prepo/statistieken.webp" alt="Prepo dashboard with project overview and statistics" width="1400" height="875" ratio="1400 / 875" body=included_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=included_body %}

{% capture control_copy %}
<h3>Adjust and publish independently</h3>
<h2>Keep control of content, version and distribution</h2>
<p class="sp-lead">Through Prepo you adjust text in MicroGames and Stories yourself, without Preludens having to process every change. After an edit you download a new SCORM file straight away for your own LMS, or make the learning experience available through a public Prepo link.</p>
<p class="sp-lead">For simple changes, that removes the extra step through Preludens and keeps you in control of the content, the active version and the distribution.</p>
{% endcapture %}
{% capture control_body %}
{% include panels/media.html src="/assets/images/prepo/editor.jpg" webp="/assets/images/prepo/editor.webp" alt="The Prepo editor where you adjust text in MicroGames and Stories yourself" width="1400" height="875" ratio="1400 / 875" reverse=true body=control_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=control_body %}

{% capture feature_items %}
{% include panels/step.html num="1" title="Overview of projects and products" text="See which MicroGames, Stories or other learning experiences are available, which project they belong to and their status." %}
{% include panels/step.html num="2" title="Test environment and managing testers" text="New versions are tested safely before they're shared widely, so participants never work with a version that isn't ready." %}
{% include panels/step.html num="3" title="Distribution via public links" text="MicroGames and Stories are offered centrally, so users know where to go and organisations keep control." %}
{% include panels/step.html num="4" title="Leaderboard for players" text="Where appropriate, a leaderboard makes progress, scores or achievements visible — used deliberately when it fits the goal and audience." %}
{% include panels/step.html num="5" title="Feedback and ticketing" text="Content notes, technical reports and support questions are gathered in a structured way instead of loose emails." %}
{% include panels/step.html num="6" title="Managing MicroGames, Stories and versions" text="Version control keeps it clear which version is current, what changed and which version participants are using." %}
{% include panels/step.html num="7" title="Insight into statistics and use" text="Participation, progress, scores and activity reveal where participants move through smoothly and where attention is needed." %}
{% include panels/step.html num="8" title="Downloading files under your own control" text="Exports, source files, reports and documentation stay findable and linked to the right learning experience." %}
{% include panels/step.html num="9" title="Support on products" text="Support stays linked to the product, version and organisation, making it easy to answer questions quickly." %}
{% endcapture %}
{% capture feature_body %}
<h3>Nine features for control after delivery</h3>
<h2>Everything you need to manage your learning experience well</h2>
<p class="sp-lead">For participants, learning experiences are accessible and clearly available. For organisations, Prepo means more control over use, progress, management and further development.</p>
{% include panels/steps.html variant="grid" items=feature_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=feature_body %}

{% capture why_main %}
<p class="sp-lead">Many learning products start out neat: a first version, a clear link and a group of participants. But over time, fragmentation creeps in: new versions, feedback via email and documents, scattered files, circulating test links and statistics that are hard to find.</p>
<p class="sp-lead">Prepo prevents management from becoming a loose collection of agreements, files and links. It brings structure around the learning experience: which products are active, which version is in use, where feedback arrives and how participants reach the MicroGames or Stories.</p>
{% endcapture %}
{% capture why_aside %}
{% include panels/figure.html src="/assets/images/prepo/editor.jpg" webp="/assets/images/prepo/editor.webp" alt="Overview inside Prepo" width="1400" height="875" ratio="1400 / 875" %}
{% endcapture %}
{% capture why_body %}
<h3>Why Prepo is needed</h3>
<h2>From a one-off delivery to lasting overview</h2>
{% include panels/aside.html main=why_main aside=why_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=why_body %}

{% capture who_checks %}
{% include panels/check.html text="want to deploy and manage multiple MicroGames or Stories at once;" %}
{% include panels/check.html text="want to keep learning experiences available to new participants;" %}
{% include panels/check.html text="need to manage versions;" %}
{% include panels/check.html text="want to gather feedback in a structured way;" %}
{% include panels/check.html text="want insight into use and progress;" %}
{% include panels/check.html text="want to extend support after delivery;" %}
{% include panels/check.html text="want to keep files and documentation organised;" %}
{% include panels/check.html text="want to keep improving learning experiences." %}
{% endcapture %}
{% capture who_body %}
<h3>Who is Prepo for?</h3>
<h2>For organisations that want to keep managing their learning experience</h2>
<p class="sp-lead">Prepo is especially valuable when a MicroGame, Story or learning route is used longer than a short campaign or one-off pilot. For example, when you:</p>
{% include panels/checklist.html label="When Prepo is valuable" columns="two" items=who_checks %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=who_body %}

{% capture cta_left %}With Prepo, your MicroGames and Stories stay available, findable and manageable.{% endcapture %}
{% capture cta_right %}With control over distribution, feedback, versions, statistics and support from one environment.{% endcapture %}
{% include panels/cta.html kicker="Ready to stay in control?" title="Give your learning experience room to grow" left=cta_left right=cta_right stack=true primary_label="Request a demo" primary_href="/contact/" secondary_label="See our services" secondary_href="/diensten/" %}

{% include panels/footer-reveal.html %}

</div>
