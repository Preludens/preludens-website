---
layout: default
lang: en
title: "MicroGame Stories: interactive e-learning"
tile_title: MicroGame Stories
description: Discover Preludens MicroGame Stories. Short learning experiences with storytelling, MicroGames and direct feedback for active, usable learning.
summary: >-
  Short, visual online training in which basic knowledge is connected to
  recognisable work situations.
permalink: /diensten/microgame-stories/
order: 2
body_class: page-panels
---

<div class="panel-stack page-microgame-stories">
{% include panels/clips.html %}

<section class="hero-banner hero-banner--dark hero-banner--story" style="--hero-bg: url('{{ '/assets/images/hero/microgame-stories-banner.jpg' | relative_url }}?v=3');">
  <div class="container">
    <div class="hero-banner__inner">
      <h1>Turn your <span class="hl">learning challenge</span> into a <span class="hl">story</span> that takes people along <span class="hl">actively</span></h1>
      <hr class="hero-banner__accent">
      <p class="hero-banner__lead">A MicroGame Story is a short, online and visual training experience in which storytelling provides the context and MicroGames let the participant actively practise concrete knowledge or skills.</p>
      <div class="hero-banner__actions">
        <a class="btn hero-banner__contact" href="{{ '/contact/' | relative_url }}">Get in touch <span class="btn__arrow" aria-hidden="true">→</span></a>
        <a class="btn btn-primary" href="{{ '/gamestorm/' | relative_url }}">Plan a GameStorm</a>
      </div>
    </div>
  </div>
</section>

{% capture transfer_copy %}
<p class="sp-lead sp-lead--justify">You want to pass important knowledge on to your employees. Knowledge they need to <strong>understand, remember and apply when it matters.</strong> With MicroGame Stories, Preludens turns that knowledge into an active learning experience: recognisable stories give context, while short MicroGames challenge participants to <strong>retrieve knowledge, practise it and apply it.</strong></p>
<p class="sp-lead sp-lead--justify">Knowledge retention does not come from offering information more often. When participants actively retrieve knowledge from memory, practise with it and use it again at different moments, that knowledge is activated again and again. <strong>That increases the chance that important knowledge sticks and is available when employees need it in practice.</strong></p>
{% endcapture %}
{% capture transfer_body %}
<h2>From passing on information to <span class="hl">active</span> learning</h2>
{% include panels/media.html reverse=true angle=true src="/assets/images/verhalen/co-wijzer-ruimtes.jpg" alt="Cross-section of a house in which you point out rooms where a CO alarm belongs, from the MicroGame CO-Wijzer" width="1024" height="464" ratio="1024 / 464" href="/verhalen/co-wijzer/" caption="CO-Wijzer was developed for 21CC and Studium." body=transfer_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="actief-leren" body=transfer_body %}

{% capture parts %}
{% include panels/value.html title="Storytelling gives context" text="A recognisable story makes clear where the knowledge is needed and which problem it solves." %}
{% include panels/value.html title="MicroGames create practice" text="Short, focused challenges let participants recognise and apply knowledge. They learn by doing something themselves." %}
{% include panels/value.html title="Feedback and repetition" text="Participants discover why a choice works or does not, and get room to improve their approach." %}
{% endcapture %}
{% capture what_media %}
<p class="sp-lead sp-lead--justify">A MicroGame Story connects a recognisable story, relevant knowledge and short forms of play into one online learning experience.</p>
<p class="sp-lead sp-lead--justify">The participant follows a visual story around a recognisable work situation. Inside the story a problem or challenge arises that needs specific knowledge. At that moment the MicroGame appears: a short form of play in which the participant works with that knowledge, makes choices, carries out tasks and gets direct feedback.</p>
<p class="sp-lead sp-lead--justify">After the MicroGame the story continues, and the participant sees how the knowledge gains meaning inside the situation. A natural rhythm emerges of story, knowledge, practice, feedback and continuation, in which storytelling and game-based learning strengthen each other.</p>
{% endcapture %}
{% capture what_body %}
<h2>What are <span class="hl">MicroGame Stories?</span></h2>
{% include panels/media.html angle=true src="/assets/images/verhalen/basis-koeltechniek-gesprek.jpg" alt="Comic scene from Basic Refrigeration Technology: two technicians talking on a terrace" width="1024" height="462" ratio="1024 / 462" href="/verhalen/basis-koeltechniek/" caption="Refrigeration technology was developed for Climatools and 21CC." body=what_media %}
{% include panels/values.html label="Three parts of a MicroGame Story" items=parts %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="wat-zijn-microgame-stories" body=what_body %}

{% capture start_copy %}
<h2>Start with one chapter</h2>
<p class="sp-lead">You do not have to develop a complete learning route straight away. Begin with one topic, one recognisable work situation and a number of focused MicroGames. That way you make important knowledge trainable right away, and you see how MicroGame Stories can work inside your organisation.</p>
<div class="sp-actions">
  <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Get in touch <span class="btn__arrow" aria-hidden="true">→</span></a>
  <a class="btn btn-secondary" href="{{ '/gamestorm/' | relative_url }}">Plan a GameStorm <span class="btn__arrow" aria-hidden="true">→</span></a>
</div>
{% endcapture %}
{% capture start_body %}
{% include panels/media.html reverse=true src="/assets/images/verhalen/new-macbooks.png" alt="Comic New Macbooks: a quiet working day turns when the computers fail" width="906" height="979" ratio="906 / 979" body=start_copy %}
{% endcapture %}
{% include panels/panel.html variant="pale" id="start-met-een-hoofdstuk" body=start_body %}

{% capture route_steps %}
{% include panels/step.html num="1" title="Recognise the situation" text="The participant meets a character, a workplace or a recognisable problem from practice. The story gives context and sparks curiosity." %}
{% include panels/step.html num="2" title="Discover the challenge" text="Inside the story a problem arises that calls for knowledge or a skill. The participant discovers what is at stake." %}
{% include panels/step.html num="3" title="Explore the knowledge that is needed" text="The material is offered at the moment it is relevant. Information immediately gains meaning inside the situation." %}
{% include panels/step.html num="4" title="Practise with a MicroGame" text="The participant gets to work. For example by recognising parts or ordering a process." %}
{% include panels/step.html num="5" title="Receive feedback and try again" text="The participant sees what is going well and where improvement is possible. Feedback explains why a choice works or does not." %}
{% include panels/step.html num="6" title="Close and reflect" text="The participant returns to the story. What did you learn, why does it matter, and how do you use that knowledge in a similar situation?" %}
{% endcapture %}
{% capture route_body %}
<h2>How does a MicroGame Story work?</h2>
<p class="sp-lead sp-lead--center">A MicroGame Story takes the participant along a recognisable learning route, in which the knowledge gains meaning step by step.</p>
{% include panels/steps.html variant="cards" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="hoe-het-werkt" body=route_body %}

{% capture benefit_items %}
{% include panels/value.html title="More engagement with the material" text="A recognisable story and a concrete challenge give participants a reason to work actively with the knowledge. They have to make choices and carry out tasks themselves." %}
{% include panels/value.html title="Better understanding through recognisable context" text="Knowledge is linked to situations in which employees will need it later. It becomes clear why rules and ways of working matter." %}
{% include panels/value.html title="Room to practise safely" text="A MicroGame is an environment in which participants may make mistakes. Through feedback and repetition they improve their approach without consequences for daily practice." %}
{% include panels/value.html title="Short, focused learning activities" text="MicroGame Stories are built around concrete learning goals. Participants work step by step on specific topics and skills." %}
{% endcapture %}
{% capture why_body %}
<h2>Why choose MicroGame Stories?</h2>
<p class="sp-lead sp-lead--center">MicroGame Stories are designed to make the step from information to usable knowledge smaller.</p>
{% include panels/values.html label="What a MicroGame Story delivers" columns="two" items=benefit_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="waarom" body=why_body %}

{% capture story_intro %}
<h2>Storytelling brings knowledge to life</h2>
<p class="sp-lead sp-lead--justify">Recognisable characters and work situations give new information context and make clear why that knowledge matters. Connecting new knowledge to a meaningful situation makes it easier to see relationships and to retrieve the information later. The story then becomes the basis on which participants keep practising actively in the MicroGames and strengthen their knowledge.</p>
<p class="sp-lead sp-lead--justify">The participant follows a visual story around a recognisable work situation. Inside that story a problem arises that needs specific knowledge. That knowledge is then offered and actively practised in a MicroGame: a short form of play aimed at a concrete learning goal.</p>
{% endcapture %}
{% capture story_body %}
{% include panels/media.html src="/assets/images/verhalen/maria-storytelling.jpg" alt="Comic in which Maria coaches her team on the USM method: agree, change and recover" width="862" height="1024" ratio="862 / 1024" reverse=true body=story_intro %}
<h2 class="sp-story__next">Three steps towards knowledge that stays</h2>
<p class="sp-lead sp-lead--justify">Each MicroGame focuses on one concrete skill. Together the MicroGames form a learning route in which participants strengthen their knowledge step by step. By actively retrieving knowledge, applying it and repeating it at different moments, we strengthen the learning process.</p>
<ol class="sp-steps3">
  <li>
    <h3><span>01 —</span> Remember</h3>
    <p class="sp-steps3__q">What do you actually know?</p>
    <p>Participants are challenged to actively retrieve important information from memory. By recognising, ordering and remembering, they build a solid knowledge base.</p>
  </li>
  <li>
    <h3><span>02 —</span> Understand</h3>
    <p class="sp-steps3__q">Do you also see why?</p>
    <p>Knowledge gains meaning when participants discover connections and understand how something works. They explore situations, make links and learn from focused feedback.</p>
  </li>
  <li>
    <h3><span>03 —</span> Apply</h3>
    <p class="sp-steps3__q">Can you use it too?</p>
    <p>Participants are given recognisable work situations in which they have to use their knowledge. They make choices, try solutions and discover what works and what does not.</p>
  </li>
</ol>
{% endcapture %}
{% include panels/panel.html variant="harbor" id="storytelling" body=story_body %}

{% capture fit_items %}
{% include panels/value.html title="Technical knowledge and professional skills" text="Participants explore processes and apply knowledge in visual tasks." %}
{% include panels/value.html title="Safety and procedures" text="Employees practise recognising risks and applying procedures in recognisable situations." %}
{% include panels/value.html title="Onboarding and induction" text="New employees discover processes, agreements and ways of working through situations from the organisation." %}
{% include panels/value.html title="Laws and regulations" text="Complex rules become concrete tasks: when does a rule apply, and how do you use it?" %}
{% include panels/value.html title="Processes and work instructions" text="Participants practise process steps, responsibilities and common mistakes." %}
{% include panels/value.html title="Refreshing and repeating knowledge" text="Short MicroGames activate previously learned knowledge again, with variation and focused feedback." %}
{% endcapture %}
{% capture fit_body %}
<h2>Which learning challenges suit MicroGame Stories?</h2>
<p class="sp-lead">MicroGame Stories fit when you want to pass on important basic knowledge and let employees practise applying it.</p>
{% include panels/values.html label="Learning challenges for MicroGame Stories" columns="two" items=fit_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="leeruitdagingen" body=fit_body %}

{% capture case_maria %}
<p class="sp-lead">How do you teach service management without it turning into a dry training? For onITnow that question was central to the story of Maria, a MicroGame Story with a comic and five MicroGames.</p>
{% include panels/actions.html secondary_label="View the project The story of Maria" secondary_href="/verhalen/onitnow-verhaal-maria/" %}
{% include panels/case-pager.html label="Projects" maria="The story of Maria" koel="Basic Refrigeration Technology" co="CO-Wijzer" %}
{% endcapture %}
{% capture case_koeltechniek %}
<p class="sp-lead">How do you make complex technical knowledge accessible for professionals who have to apply the theory in their daily work? That challenge was central to the Basic Refrigeration Technology project (BRL200).</p>
{% include panels/actions.html secondary_label="View the project Basic Refrigeration Technology" secondary_href="/verhalen/basis-koeltechniek/" %}
{% include panels/case-pager.html label="Projects" maria="The story of Maria" koel="Basic Refrigeration Technology" co="CO-Wijzer" %}
{% endcapture %}
{% capture case_cowijzer %}
<p class="sp-lead">You cannot see, smell or taste carbon monoxide. In CO-Wijzer, professionals practise recognising that risk and making the safe choice.</p>
{% include panels/actions.html secondary_label="View the project CO-Wijzer" secondary_href="/verhalen/co-wijzer/" %}
{% include panels/case-pager.html label="Projects" maria="The story of Maria" koel="Basic Refrigeration Technology" co="CO-Wijzer" %}
{% endcapture %}
{% capture case_body %}
<h3>From practice</h3>
<div class="sp-case" data-sp-case>
  <div class="sp-case__slide is-active" data-sp-case-slide>
    <h2>The story of Maria</h2>
    {% include panels/media.html src="/assets/images/verhalen/onitnow-verhaal-maria.jpg" alt="MicroGame in which you find the six steps of the operations management process" width="1024" height="574" ratio="1024 / 574" reverse=true angle="flip" body=case_maria %}
  </div>
  <div class="sp-case__slide" data-sp-case-slide inert aria-hidden="true">
    <h2>Basic Refrigeration Technology</h2>
    {% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-kringloop.jpg" alt="MicroGame in which you drag parts of the cooling process to the right place in the cycle" width="1024" height="460" ratio="1024 / 460" reverse=true angle="flip" body=case_koeltechniek %}
  </div>
  <div class="sp-case__slide" data-sp-case-slide inert aria-hidden="true">
    <h2>CO-Wijzer</h2>
    {% include panels/media.html src="/assets/images/verhalen/co-wijzer-ruimtes.jpg" alt="CO-Wijzer: practising where to place a carbon monoxide alarm in a home" width="1024" height="464" ratio="1024 / 460" reverse=true angle="flip" body=case_cowijzer %}
  </div>
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="basis-koeltechniek" body=case_body %}

{% capture build_steps %}
{% include panels/step.html num="1" title="We map the learning challenge" text="What do participants need to know, which skills should they develop, and which problems do they meet in practice? Together we explore the audience and the learning needs." %}
{% include panels/step.html num="2" title="We formulate concrete learning goals" text="We make clear what participants should be able to recognise, understand, choose or apply." %}
{% include panels/step.html num="3" title="We develop a recognisable storyline" text="The participant gets a recognisable situation, discovers a problem and gets a reason to use the material." %}
{% include panels/step.html num="4" title="We design fitting MicroGames" text="For each learning goal we choose a game mechanism that fits the learning activity: recognise, order, combine, judge or apply. Including feedback and repetition." %}
{% include panels/step.html num="5" title="We develop and test" text="We bring story, design, knowledge and interaction together and improve the experience where that is needed." %}
{% include panels/step.html num="6" title="We deliver the MicroGame Story" text="The learning experience becomes available through an existing learning environment or through Prepo, so it stays manageable and can keep growing." %}
{% endcapture %}
{% capture build_body %}
<h2>How do we develop a MicroGame Story?</h2>
<p class="sp-lead sp-lead--center">We start with the knowledge that matters, the people who need to learn it and the situations in which that knowledge is used. A game idea comes after that.</p>
{% include panels/steps.html variant="route" items=build_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="ontwikkeling" body=build_body %}

{% capture existing_main %}
<h2>MicroGame Stories inside your existing e&#8209;learning</h2>
<p class="sp-lead sp-lead--justify">You do not have to develop a completely new learning programme straight away to use game-based learning. Many organisations already have lesson material, existing <a href="{{ '/e-learning/' | relative_url }}">e-learning</a> and clear learning goals. That content is often a good starting point.</p>
<p class="sp-lead sp-lead--justify">Preludens helps turn existing knowledge into recognisable stories, short challenges and focused game mechanisms. An existing module can be extended with a MicroGame. Or one chapter becomes a MicroGame Story in which participants actively practise the most important knowledge.</p>
<p class="sp-lead sp-lead--justify">Game-based learning then becomes an addition to existing e-learning. Our mission is to make this way of learning accessible for organisations that want to strengthen their online training.</p>
{% endcapture %}
{% capture existing_aside %}
<h2>SCORM or Prepo: choose what fits your learning environment</h2>
<p class="sp-lead sp-lead--justify">We can deliver MicroGame Stories as a SCORM package or in Articulate format, so you can include them in your own LMS and make them part of existing learning programmes. Do you not have your own learning environment, or would you rather leave the hosting to us? Then we can also make the MicroGame Stories available through Prepo Class. That way you choose how you offer the training.</p>
<p class="sp-lead sp-lead--justify">Through Prepo you can then manage and adapt the training yourself.</p>
<p class="sp-lead sp-lead--justify">From Prepo you can download a new SCORM or Articulate version, without needing Preludens again for that. You keep control of the content and of the version you use in your LMS.</p>
{% endcapture %}
{% capture existing_body %}
{% include panels/aside.html variant="even" main=existing_main aside=existing_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="bestaande-e-learning" body=existing_body %}

{% capture prepo_copy %}
<p class="sp-lead sp-lead--justify">A good learning experience is pleasant to use and stays easy to make available. That is why we help with the distribution and management of MicroGames and Stories.</p>
<p class="sp-lead sp-lead--justify">Through <a href="{{ '/prepo/' | relative_url }}">Prepo</a>, the Preludens Portal, organisations can manage learning experiences, collect feedback, keep versions and see use and progress. MicroGames and Stories can also be offered through an existing learning environment.</p>
<p class="sp-lead sp-lead--justify">For new MicroGames and Stories, three months of access to Prepo is included. After delivery there is room to follow the learning experience and improve it where needed.</p>
{% include panels/actions.html secondary_label="Discover Prepo" secondary_href="/prepo/" %}
{% endcapture %}
{% capture prepo_body %}
<h2>Easy to offer and manage through Prepo</h2>
{% include panels/media.html angle=true src="/assets/images/verhalen/prepo-overzicht.jpg" alt="Prepo overview of the CO-Wijzer follow-up project, with games such as flue-gas analysis and maintenance" width="1024" height="582" ratio="1024 / 582" body=prepo_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="prepo" body=prepo_body %}

{% capture small_copy %}
<p class="sp-lead sp-lead--justify">Game-based learning does not have to start with a large development programme. Sometimes one recognisable situation and one concrete learning goal are enough to explore the possibilities.</p>
<p class="sp-lead sp-lead--justify">That is why you can also start at Preludens with one chapter of a MicroGame Story. Together we choose a bounded topic, develop a visual story and add a focused MicroGame in which participants actively practise the knowledge.</p>
<p class="sp-lead sp-lead--justify">You then have a first concrete learning experience. With it you discover how storytelling and principles of play fit your content and audience, and you decide whether and how you want to build further.</p>
{% include panels/actions.html secondary_label="Start with one chapter" secondary_href="/contact/#een-hoofdstuk" %}
{% endcapture %}
{% capture small_body %}
<h2>Start compact with one chapter</h2>
{% include panels/media.html reverse=true angle=true src="/assets/images/verhalen/brug-in-bedrijf.png" alt="MicroGame in which you operate a bridge, with the message that passage is allowed" width="1024" height="498" ratio="1024 / 498" body=small_copy %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="begin-klein" body=small_body %}

{% capture cta_left %}Do you have important knowledge that employees need to understand, remember or apply better? With MicroGame Stories we turn that content into an active learning experience in which storytelling and MicroGames come together.{% endcapture %}
{% capture cta_right %}You do not yet need to know exactly what that learning experience should look like. In a GameStorm we explore the learning challenge and the learning goals, and we look for a first direction.{% endcapture %}
{% include panels/cta.html kicker="MicroGame Stories" title="Make your knowledge playable" left=cta_left right=cta_right stack=true primary_label="Plan a GameStorm" primary_href="/gamestorm/" secondary_label="Start with one chapter" secondary_href="/contact/#een-hoofdstuk" %}

{% include panels/footer-reveal.html %}
</div>
