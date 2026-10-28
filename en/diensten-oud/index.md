---
layout: default
lang: en
title: Services (previous)
description: Previous version of the services page.
body_class: page-panels
permalink: /diensten-oud/
sitemap: false
robots: noindex, nofollow
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}We design and implement learning experiences that get people moving{% endcapture %}
{% capture hero_lead %}Preludens turns complex knowledge into interactive learning experiences with story, play and feedback. Teams are challenged to explore situations, activated to make choices and motivated to apply knowledge in practice.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Get in touch →" primary_href="/contact/" secondary_label="Start with a GameStorm" secondary_href="/gamestorm/" %}
{% endcapture %}
{% include panels/hero.html kicker="Services" title=hero_title lead=hero_lead actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="A team mapping out a route together" figure_href="/gamestorm/" figure_caption="From knowledge to applicable behaviour." %}

{% capture gap_main %}
<p class="sp-lead">Many learning programmes get stuck at the same point: the content is right, but application falls behind. People read theory, watch instructions or take a test. That can help transfer information, but it does not always prepare them for the moments when they need to weigh options, respond or act.</p>
<p class="sp-lead">That is exactly where the learning challenge arises.</p>
<p class="sp-lead">When safety, quality, customer contact, collaboration or efficiency are at stake, explanation alone is often not enough. Teams need to practise with recognisable situations. They need to experience which choices are possible, what the consequences are and how they can adjust.</p>
<p class="sp-lead">That is why we design learning experiences in which people actively discover, choose, practise and reflect. With storytelling we give knowledge context. With MicroGames we make practice short, focused and active. With feedback and data it becomes clear where participants are strong and where they need extra support.</p>
<p class="sp-lead">That way, learning is no longer a click-through obligation, but a route in which people learn to act more confidently step by step.</p>
{% endcapture %}
{% capture gap_checks %}
{% include panels/check.html text="Knowledge gets context through storytelling." %}
{% include panels/check.html text="MicroGames make practice short and active." %}
{% include panels/check.html text="Feedback and data make growth visible." %}
{% include panels/check.html text="Learning becomes a route, not a click-through obligation." %}
{% endcapture %}
{% capture gap_aside %}
{% include panels/checklist.html label="What our approach adds" items=gap_checks %}
{% endcapture %}
{% capture gap_body %}
<h3>When knowledge sits unused</h3>
<h2>From knowledge transfer to applicable behaviour</h2>
{% include panels/aside.html main=gap_main aside=gap_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=gap_body %}

{% capture routes_body %}
<h3>Three routes to make knowledge playable and applicable</h3>
<h2>Our services</h2>
<p class="sp-lead">Every learning challenge asks for a different form. Sometimes you want to train and embed basic knowledge. Sometimes people need to learn how to handle difficult choices. And sometimes you first need a sharp analysis of behaviour, goals and tensions in practice. That is why Preludens works with three clear routes.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" body=routes_body %}

<!-- TODO [WACHTEN OP FOTO]: add product images next to MicroGame Stories, Dilemma Storytelling and Game Thinking (praatplaten), via panels/media.html. -->
{% capture mgs_checks %}
{% include panels/check.html text="Training and embedding basic knowledge" %}
{% include panels/check.html text="Onboarding or introducing new processes" %}
{% include panels/check.html text="Repeating rules, agreements or ways of working" %}
{% include panels/check.html text="Linking theory to recognisable work situations" %}
{% include panels/check.html text="Online learning that needs to be short, visual and active" %}
{% endcapture %}
{% capture mgs_main %}
<h3>A good fit for</h3>
{% include panels/checklist.html label="MicroGame Stories are a good fit for" items=mgs_checks %}
{% endcapture %}
{% capture mgs_aside %}
<h3>What participants experience</h3>
<p class="sp-lead">They do not only read what they need to know — they are taken into a story. They recognise situations, make choices, receive feedback and practise with the knowledge they will need later.</p>
{% include panels/actions.html primary_label="More about MicroGame Stories →" primary_href="/contact/" %}
{% endcapture %}
{% capture mgs_body %}
<h3>Short learning experiences with story, play and repetition</h3>
<h2>MicroGame Stories</h2>
<p class="sp-lead">MicroGame Stories are short, visual online training modules in which basic knowledge is linked to recognisable work situations. Participants follow a story, make choices and practise along the way with short MicroGames. Each part targets a concrete learning goal. That gives knowledge context, repetition and immediate feedback.</p>
<p class="sp-lead">A MicroGame Story is a good fit when you want to transfer important knowledge to a larger audience without burdening people with long, passive modules.</p>
{% include panels/aside.html variant="even" main=mgs_main aside=mgs_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="microgame-stories" body=mgs_body %}

{% capture dil_checks %}
{% include panels/check.html text="Decision-making in complex situations" %}
{% include panels/check.html text="Safety, quality, collaboration or customer contact" %}
{% include panels/check.html text="Situations where behaviour matters more than knowledge alone" %}
{% include panels/check.html text="Practising trade-offs between different goals" %}
{% include panels/check.html text="Teams that want to reflect better on choices and consequences" %}
{% endcapture %}
{% capture dil_main %}
<h3>A good fit for</h3>
{% include panels/checklist.html label="Dilemma Storytelling is a good fit for" items=dil_checks %}
{% endcapture %}
{% capture dil_aside %}
<h3>What participants experience</h3>
<p class="sp-lead">They step into a recognisable situation, make a choice and see what that choice causes. That creates conversation, insight and more awareness of how they act in practice.</p>
{% include panels/actions.html primary_label="More about Dilemma Storytelling →" primary_href="/contact/" %}
{% endcapture %}
{% capture dil_body %}
<h3>Practising with choices that have no simple answer</h3>
<h2>Dilemma Storytelling</h2>
<p class="sp-lead">Dilemma Storytelling helps teams explore difficult situations in which several interests play at once. Participants are presented with realistic scenarios and make choices that have consequences. Not every situation has one right answer. Sometimes safety asks for something different than speed. Sometimes customer satisfaction rubs against quality. Sometimes a team needs to learn how to weigh what matters most in that moment.</p>
<p class="sp-lead">By making choices visible and linking them to consequences, participants learn to look more sharply at their own trade-offs.</p>
{% include panels/aside.html variant="even" main=dil_main aside=dil_aside %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="dilemma-storytelling" body=dil_body %}

{% capture gt_checks %}
{% include panels/check.html text="Complex questions where the solution is not yet sharp" %}
{% include panels/check.html text="Learning or change programmes that need to connect better to behaviour" %}
{% include panels/check.html text="Organisations that want to explore before production starts" %}
{% include panels/check.html text="Formulating learning goals and design principles" %}
{% include panels/check.html text="Discovering the game structure already hidden in practice" %}
{% endcapture %}
{% capture gt_main %}
<h3>A good fit for</h3>
{% include panels/checklist.html label="Game Thinking is a good fit for" items=gt_checks %}
{% endcapture %}
{% capture gt_aside %}
<h3>What it delivers</h3>
<p class="sp-lead">Game Thinking gives direction before you start developing. You get more grip on the audience, the learning goals, the desired change and the form that fits.</p>
{% include panels/actions.html primary_label="More about Game Thinking →" primary_href="/contact/" %}
{% endcapture %}
{% capture gt_body %}
<h3>First get a grip on behaviour, goals and game mechanisms</h3>
<h2>Game Thinking</h2>
<p class="sp-lead">Game Thinking is our design approach for complex learning and change challenges. We look at a question as if it were a game — not to turn it into a game immediately, but to make visible which goals, rules, choices, tensions, feedback moments and blockers are already present in practice.</p>
<p class="sp-lead">We call that Find the Game. Together we explore what people need to learn, which behaviour needs to change and where movement is possible in practice. From that analysis a clear blueprint emerges for a learning experience, intervention or serious game.</p>
{% include panels/aside.html variant="even" main=gt_main aside=gt_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="game-thinking" body=gt_body %}

{% capture route_steps %}
{% include panels/step.html num="1" title="Explore" text="We bring your learning challenge into sharp focus. In a first conversation or GameStorm we examine the problem, audience, context and key learning goals." %}
{% include panels/step.html num="2" title="Sharpen" text="We translate the learning challenge into clear goals and design choices. We make concrete what participants should understand, recognise, choose or apply afterwards." %}
{% include panels/step.html num="3" title="Gather content" text="You bring the practice knowledge; we make it playable. We collect training, processes, cases and expert knowledge and explore how that knowledge becomes playable." %}
{% include panels/step.html num="4" title="Choose the right form" text="Want to train basic knowledge? A MicroGame Story. Want to strengthen decisiveness? Dilemma Storytelling. Solution not sharp yet? We start with Game Thinking." %}
{% include panels/step.html num="5" title="Design" text="We translate knowledge into story, choices and feedback. Together we work towards recognisable situations, fitting game mechanisms and a first storyline." %}
{% include panels/step.html num="6" title="Develop and test" text="We make the learning experience ready for use: develop, test and improve where needed — from MicroGame Story to blueprint or publishable module." %}
{% include panels/step.html num="7" title="Deliver and manage" text="You get a learning experience that stays available, findable and improvable — in your own learning environment or via Prepo." %}
{% endcapture %}
{% capture route_body %}
<h3>Which route fits your challenge?</h3>
<h2>From first question to playable learning experience</h2>
<p class="sp-lead">Not every challenge asks for the same solution. That is why we do not start with the form, but with the learning task. What do people need to understand, practise or do differently? From that question we determine which route fits: a MicroGame Story, Dilemma Storytelling, Game Thinking or a first GameStorm.</p>
{% include panels/steps.html variant="pyramid" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=route_body %}

{% capture cta_left %}Do you have knowledge that needs to stick better? Behaviour that needs to change? Or a complex challenge your team needs to learn to handle?{% endcapture %}
{% capture cta_right %}In a GameStorm we explore together where the learning challenge sits and which form fits.{% endcapture %}
{% include panels/cta.html kicker="Discover which learning route fits your team" title="Take the first step tomorrow" left=cta_left right=cta_right stack=true primary_label="Start with a GameStorm" primary_href="/gamestorm/" secondary_label="Get in touch" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
