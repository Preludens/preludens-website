---
layout: default
lang: en
title: Team
description: The people behind Preludens — storytelling, game design, didactics and technology, brought together in learning experiences that stay with you.
body_class: page-panels
permalink: /team/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}We believe people learn better when they're actively involved{% endcapture %}
{% capture hero_lead %}That's why we design learning experiences where people don't just receive information, but make their own choices, experience the consequences of their actions and get targeted feedback. By applying knowledge in a recognisable context, it is better understood, remembered and used when it matters.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Get in touch →" primary_href="/contact/" secondary_label="Our services" secondary_href="/diensten/" %}
{% endcapture %}
{% include panels/hero.html kicker="Team" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/team-hero.jpg" figure_alt="Two designers working on a challenge together" figure_href="/gamestorm/" figure_caption="Design and technology at the same table." %}

{% capture intro_main %}
<p class="sp-lead">Preludens is made up of Daan Groen and Jan-Willem Manenschijn, complemented by specialists when a project calls for it. We combine expertise in storytelling, game design and learning &amp; development to prepare teams for situations where knowledge and action come together.</p>
<p class="sp-lead">We work in small, dedicated teams and keep the lines short. Clients work directly with the designers and developers who run the project. That lets us move quickly, ask critical questions and test ideas early.</p>
<p class="sp-lead">Preludens makes complex knowledge playable, narrative and applicable. With MicroGames, storytelling and play principles we create learning experiences that spark curiosity, stimulate active involvement and motivate people to keep learning.</p>
{% endcapture %}
{% capture intro_checks %}
{% include panels/check.html text="Involvement activates people." %}
{% include panels/check.html text="Play and storytelling create that involvement." %}
{% include panels/check.html text="People discover, choose, practise and process feedback." %}
{% include panels/check.html text="Complex knowledge becomes clearer, better remembered and applicable in practice." %}
{% endcapture %}
{% capture intro_aside %}
<h3>From involvement to applicable knowledge</h3>
{% include panels/checklist.html label="From involvement to applicable knowledge" items=intro_checks %}
{% endcapture %}
{% capture intro_body %}
<h3>Knowledge doesn't happen automatically</h3>
<h2>We see the power of play in complex challenges every day</h2>
{% include panels/aside.html main=intro_main aside=intro_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=intro_body %}

{% capture daan_body %}
<p class="sp-lead">Daan rarely settles for the first answer. He digs deeper for creative responses to process challenges, with game mechanics and win-win thinking as his compass. With more than fifteen years of experience in MicroGaming, he guides organisations that want to use play and story more thoughtfully for learning and change.</p>
<p class="sp-lead">His strength lies in surfacing the game that's often already hidden in reality — not by adding game elements on top, but by exploring the tension, choices and behavioural patterns already present.</p>
{% endcapture %}
{% capture jw_body %}
<p class="sp-lead">Jan-Willem is an enthusiastic creative with a passion for education, technology and puzzles. He turns vague ideas into concrete prototypes and gets people moving, from escape rooms to serious games.</p>
<p class="sp-lead">His strength lies in connecting concept and execution. Where a learning idea is still abstract, he brings structure. Where an experience risks becoming technically complex, he looks for simplicity.</p>
{% endcapture %}
{% capture people_items %}
{% include panels/person.html name="Daan Groen" role="Founder and designer" photo="/assets/images/team/daan-groen.jpg" alt="Daan Groen" body=daan_body %}
{% include panels/person.html name="Jan-Willem Manenschijn" role="Innovator and developer" photo="/assets/images/team/jan-willem-manenschijn.jpg" alt="Jan-Willem Manenschijn" body=jw_body %}
{% endcapture %}
{% capture team_body %}
<h3>Meet the team</h3>
<h2>Design and technology, in one focused team</h2>
<p class="sp-lead">Where Daan unravels learning problems and surfaces game mechanics, Jan-Willem translates ideas into clear, working experiences. Together we bring serious games, storytelling, instructional design and technology together.</p>
{% include panels/people.html label="The Preludens team" items=people_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=team_body %}

<!-- TODO [WACHTEN OP FOTO]: replace missie.* with a photo of Daan + Jan-Willem at the New Future Lab table -->
{% capture missie_copy %}
<h3>Why we started Preludens</h3>
<h2>Game-based learning should be accessible to everyone</h2>
<p class="sp-lead">Our mission is to make game-based learning accessible to every organisation — large and small. After years of experience with serious games, we saw how much stronger learning becomes when people can actively choose, practise and experience what their actions mean.</p>
<p class="sp-lead">That's why we develop learning experiences that are affordable, scalable and tangible: manageable development costs, modular solutions and products clients can deploy without unnecessary technical barriers within their existing learning environment.</p>
{% endcapture %}
{% capture missie_body %}
{% include panels/media.html src="/assets/images/team/missie.jpg" webp="/assets/images/team/missie.webp" alt="Preludens makes game-based learning accessible to every organisation" width="1400" height="875" reverse=true body=missie_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=missie_body %}

{% capture value_items %}
{% include panels/value.html title="Robust" text="A learning experience must inspire confidence. We design solutions that feel logical, work reliably and are clear. The technology should never get in the way of the experience." %}
{% include panels/value.html title="Purposeful" text="We make design choices not because they're fun, but because they contribute to learning. Every story, choice and MicroGame traces back to clear learning goals." %}
{% include panels/value.html title="Accessible" text="Complex knowledge doesn't have to feel complicated. We translate content into recognisable situations, clear choices and concrete feedback, so people can discover and grow." %}
{% include panels/value.html title="Curious" text="We don't just accept the first solution. We explore the practice, ask questions and look for the route that connects knowledge, behaviour and experience." %}
{% endcapture %}
{% capture values_body %}
<h2>What we stand for</h2>
<p class="sp-lead">Quality energizes us.</p>
{% include panels/values.html label="What we stand for" columns="two" items=value_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=values_body %}

{% capture principle_steps %}
{% include panels/step.html num="1" title="Clear and achievable objectives" %}
{% include panels/step.html num="2" title="Balance of knowledge, skill and luck" %}
{% include panels/step.html num="3" title="Mechanics drawn from reality" %}
{% include panels/step.html num="4" title="Focus on positive, human emotions" %}
{% include panels/step.html num="5" title="Robust, logical controls" %}
{% include panels/step.html num="6" title="Clear feedback, without distraction" %}
{% include panels/step.html num="7" title="The next step always clear" %}
{% endcapture %}
{% capture principles_main %}
<p class="sp-lead">Every design is sharp in content, solid in technology and aimed at learning that becomes applicable in practice. Our design methodology explains exactly how we do that — from clear objectives to clear feedback and an always-visible next step.</p>
{% include panels/actions.html primary_label="See our design methodology →" primary_href="/ontwerpmethodiek/" %}
{% endcapture %}
{% capture principles_aside %}
{% include panels/steps.html variant="list" items=principle_steps %}
{% endcapture %}
{% capture principles_body %}
<h3>How we design learning experiences</h3>
<h2>Seven principles behind our design</h2>
{% include panels/aside.html main=principles_main aside=principles_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=principles_body %}

{% capture cta_left %}In a single half-day we explore the problem, the audience and the desired change together.{% endcapture %}
{% capture cta_right %}You get a concrete first direction, without committing to a full project.{% endcapture %}
{% include panels/cta.html kicker="Take the first step" title="Start with a GameStorm" left=cta_left right=cta_right stack=true primary_label="Book a GameStorm" primary_href="/gamestorm/" secondary_label="Get in touch" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
