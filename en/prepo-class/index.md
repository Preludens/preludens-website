---
layout: default
lang: en
title: "Prepo Class: MicroGames in the classroom"
description: "Discover Prepo Class: a classroom environment for Prepo games. Teachers guide the session and participants join with a class code."
body_class: page-panels
permalink: /prepo-class/
permalink_lang:
  nl: /prepo-class/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">With MicroGames you turn learning material into short, focused challenges. Prepo Class is the classroom environment in which you use those game forms during a lesson or a guided training session.</p>
<p class="sp-lead">Teachers get access through Prepo. Participants join with a class code. That creates an accessible route for giving interactive game forms a place in education or training.</p>
{% include panels/actions.html primary_label="View Prepo Class" primary_href="https://class.prepo.nl/" secondary_label="Talk through the possibilities" secondary_href="/contact/" %}
{% endcapture %}
{% capture hero_title %}Prepo Class: learn together with <span class="hl">MicroGames</span>{% endcapture %}
{% capture hero_lead %}A classroom environment in which teachers and participants work with interactive Prepo games.{% endcapture %}
{% capture hero_lead2 %}You want to involve participants actively in the lesson. Not only explain, but let people discover, practise and think about the knowledge they need. How do you use those game forms in a classroom learning situation?{% endcapture %}
{% include panels/hero.html kicker="Prepo Class" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/prepo/class-start.png" figure_alt="The Prepo Class start page, with log in as teacher or join with a class code" figure_href="https://class.prepo.nl/" figure_caption="Teacher through Prepo, participant with a class code." %}

{% capture recognize_body %}
<h2>From explanation to active learning in the classroom</h2>
<p class="sp-lead">In many lessons and training sessions, explanation plays an important role. The teacher introduces new concepts, discusses examples and helps participants understand the material.</p>
<p class="sp-lead">Understanding what someone says is not the same as being able to apply the knowledge yourself. That is why it helps to make room during a lesson for active tasks. What happens when participants have to choose, make connections or solve a problem themselves?</p>
<p class="sp-lead">They are challenged to use the knowledge. That makes clear what they already understand and where questions still appear.</p>
<p class="sp-lead">A good classroom learning experience combines <strong>the direction of the teacher</strong> with the active participation of the group.</p>
<p class="sp-lead">Prepo Class was developed so Prepo games can be used in that context. More about how we combine learning and play is on <a href="{{ '/play/' | relative_url }}">our method</a> page.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="actief-leren" body=recognize_body %}

{% capture what_body %}
<h2>What is Prepo Class?</h2>
<p class="sp-lead">Prepo Class is a digital classroom environment for games offered through Prepo. The environment connects two roles, without participants first having to go through the Prepo management environment.</p>
<h3 class="sp-sub">The teacher</h3>
<p class="sp-lead">The teacher gets access through Prepo and works with Prepo Class from the lesson or training session.</p>
<h3 class="sp-sub">The participant</h3>
<p class="sp-lead">The participant opens <a href="https://class.prepo.nl/">class.prepo.nl</a> and joins with a class code.</p>
<p class="sp-lead">Prepo Class does not replace the teacher. It is the digital entrance through which Prepo games become part of a guided learning activity.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="wat-is-prepo-class" body=what_body %}

{% capture how_steps %}
{% include panels/step.html num="1" title="The teacher gets access" text="Through teacher access in Prepo. The teacher route stays separate from participant access." %}
{% include panels/step.html num="2" title="Participants receive a class code" text="With that code they join the right class. The code is the connection between participant and classroom environment." %}
{% include panels/step.html num="3" title="Participants open Prepo Class" text="On class.prepo.nl they choose Join with class code. That brings them in through a focused entrance." %}
{% include panels/step.html num="4" title="The group gets to work" text="The teacher connects the game activity to the learning goals. Participants recognise, order, choose or apply knowledge." %}
{% include panels/step.html num="5" title="The teacher connects the experience to the lesson" text="After the task you discuss what was difficult, which knowledge turned out to matter and how the task connects to practice." %}
{% endcapture %}
{% capture how_note %}
<p class="sp-lead">The start page shows two entrances: log in as a teacher, and join with a class code. What a teacher can then follow or steer in the lesson, we explain once those functions are fixed. We do not present live progress, scores or session controls here as existing possibilities.</p>
{% endcapture %}
{% capture how_body %}
<h2>How does Prepo Class work?</h2>
<p class="sp-lead sp-lead--center">The basis is simple: a teacher works from Prepo, participants join through a class code.</p>
{% include panels/media.html src="/assets/images/prepo/class-start.png" alt="Prepo Class start page with Log in as teacher and Join with class code" width="1760" height="940" ratio="1760 / 940" body=how_note %}
{% include panels/steps.html variant="flow" items=how_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" align="left" id="hoe-het-werkt" body=how_body %}

{% capture why_items %}
{% include panels/value.html title="Make knowledge active" text="Participants do something with the material: recognise concepts, explore connections or apply knowledge in a focused task." %}
{% include panels/value.html title="Give room to practise" text="A MicroGame is a bounded learning activity. Feedback helps participants understand and improve their approach." %}
{% include panels/value.html title="Make abstract content concrete" text="Processes and principles become easier to understand when participants can work with them, for example a step or a connection." %}
{% include panels/value.html title="From task to conversation" text="The teacher uses the game activity as a prompt. The explanation and the reflection afterwards belong to the lesson." %}
{% endcapture %}
{% capture game_copy %}
<p class="sp-lead">MicroGames are short game forms around concrete learning goals. In the classroom the teacher links such a task to the lesson: first the context, then the task, then the conversation.</p>
<p class="sp-lead">More about the learning format itself is on <a href="{{ '/diensten/microgame-stories/' | relative_url }}">MicroGame Stories</a>.</p>
{% endcapture %}
{% capture why_body %}
<h2>Why MicroGames during a lesson?</h2>
<p class="sp-lead">Participants do not only receive information. They work with it.</p>
{% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-gesprek.jpg" alt="A scene from the MicroGame Basic Refrigeration, as an example of a Prepo game" width="1024" height="462" ratio="1024 / 462" reverse=true body=game_copy %}
{% include panels/values.html label="What MicroGames add in the lesson" columns="two" items=why_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="waarom" body=why_body %}

{% capture when_items %}
{% include panels/value.html title="During a classroom lesson" text="A MicroGame to explore new knowledge, or to practise a topic that has just been discussed." %}
{% include panels/value.html title="In practice-based education" text="Tasks that connect to technical processes, ways of working or other situations from practice." %}
{% include panels/value.html title="During a training session or workshop" text="Alternate explanation with short interactive tasks, so participants process the content." %}
{% include panels/value.html title="As part of a learning programme" text="At moments when participants need to apply, repeat or discuss knowledge together." %}
{% endcapture %}
{% capture when_body %}
<h2>When do you use Prepo Class?</h2>
<p class="sp-lead sp-lead--center">When a teacher, trainer or facilitator wants to use Prepo games in a shared learning context. The right use depends on the learning goals, the audience and the games available.</p>
{% include panels/values.html label="Situations for Prepo Class" columns="two" items=when_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="wanneer" body=when_body %}

{% capture teacher_body %}
<h2>The teacher keeps giving direction</h2>
<p class="sp-lead">Active learning does not mean participants have to discover everything on their own. A good learning experience offers freedom to try, and enough structure to move forward.</p>
<p class="sp-lead">The teacher explains beforehand why a task is relevant, helps participants ask the right questions and afterwards connects it to the learning material.</p>
<p class="sp-lead">Prepo Class is the digital entrance for the game activity. The teacher provides the connection with the larger learning process. Guidance and the interactive task strengthen each other.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="docent" body=teacher_body %}

{% capture diff_body %}
<h2>Prepo Class and Prepo</h2>
<p class="sp-lead">They belong together, and they do different things.</p>
<h3 class="sp-sub">Prepo: management and distribution</h3>
<p class="sp-lead"><a href="{{ '/prepo/' | relative_url }}">Prepo</a> is the management and distribution environment for MicroGames and Stories. The emphasis is on making them available, managing them and developing them further.</p>
<h3 class="sp-sub">Prepo Class: use in the classroom</h3>
<p class="sp-lead">Prepo Class is the classroom environment for Prepo games. The emphasis is on access for teachers and participants during a lesson or training session. The teacher comes in through Prepo. The participant uses a class code.</p>
{% include panels/actions.html secondary_label="Explore Prepo" secondary_href="/prepo/" %}
{% endcapture %}
{% include panels/panel.html variant="paper" align="left" id="verschil" body=diff_body %}

{% capture fit_body %}
<h2>Prepo Class as part of active learning</h2>
<p class="sp-lead">People learn more when they work actively with knowledge. That is why we combine content, storytelling, instructional design and game principles. MicroGames are short challenges for discovering, practising and reflecting.</p>
<p class="sp-lead">Prepo makes those learning products available and manageable. Prepo Class is the entrance for using them in a class. Together they cover different moments of the same learning process: developing, offering, practising and learning further.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="actief" body=fit_body %}

{% capture faq_body %}
<h2>Frequently asked questions about Prepo Class</h2>
<h3 class="sp-sub">What is Prepo Class?</h3>
<p class="sp-lead">The classroom environment for Prepo games. Teachers get access through Prepo. Participants join with a class code.</p>
<h3 class="sp-sub">What is the difference between Prepo and Prepo Class?</h3>
<p class="sp-lead">Prepo is aimed at managing and distributing interactive learning products. Prepo Class is the classroom environment in which teachers and participants work with those games.</p>
<h3 class="sp-sub">How do participants get access?</h3>
<p class="sp-lead">They open class.prepo.nl and choose Join with class code.</p>
<h3 class="sp-sub">How do teachers get access?</h3>
<p class="sp-lead">Through teacher access in Prepo. On the start page that is Log in as teacher.</p>
<h3 class="sp-sub">Is Prepo Class suitable for classroom teaching?</h3>
<p class="sp-lead">It is set up as a classroom environment for Prepo games. How you use it depends on the learning goals, the games available and the guidance of the teacher.</p>
<h3 class="sp-sub">Which games can be used?</h3>
<p class="sp-lead">Prepo games. Which games are available depends on the setup for the class or the organisation.</p>
<h3 class="sp-sub">Can I look at Prepo Class first?</h3>
<p class="sp-lead">The public start page can be viewed at class.prepo.nl. For a content demonstration of the teacher environment, get in touch with Preludens.</p>
<h3 class="sp-sub">Can Prepo Class be part of a larger learning programme?</h3>
<p class="sp-lead">Yes. A classroom game activity can be connected to explanation, practice tasks and shared reflection. Which technical possibilities belong with that, we align per application.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=faq_body %}

{% capture cta_left %}Do you want to use MicroGames during a lesson, training session or guided learning activity? With Prepo Class, teachers and participants get focused access to Prepo games inside a classroom environment.{% endcapture %}
{% capture cta_right %}We are happy to think along about the use of MicroGames, the learning goals and the role Prepo Class can play in that.{% endcapture %}
{% include panels/cta.html kicker="Prepo Class" title="Bring active learning into the classroom" left=cta_left right=cta_right stack=true primary_label="Talk about Prepo Class" primary_href="/contact/" secondary_label="View Prepo Class" secondary_href="https://class.prepo.nl/" %}

{% include panels/footer-reveal.html %}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What is Prepo Class?", "acceptedAnswer": {"@type": "Answer", "text": "The classroom environment for Prepo games. Teachers get access through Prepo and participants join with a class code."}},
    {"@type": "Question", "name": "What is the difference between Prepo and Prepo Class?", "acceptedAnswer": {"@type": "Answer", "text": "Prepo is aimed at management and distribution. Prepo Class is the classroom environment in which teachers and participants work with Prepo games."}},
    {"@type": "Question", "name": "How do participants get access?", "acceptedAnswer": {"@type": "Answer", "text": "They open class.prepo.nl and choose Join with class code."}},
    {"@type": "Question", "name": "How do teachers get access?", "acceptedAnswer": {"@type": "Answer", "text": "Through teacher access in Prepo."}},
    {"@type": "Question", "name": "Is Prepo Class suitable for classroom teaching?", "acceptedAnswer": {"@type": "Answer", "text": "It is a classroom environment for Prepo games. How it is used depends on the learning goals, the games available and the guidance."}},
    {"@type": "Question", "name": "Which games can be used?", "acceptedAnswer": {"@type": "Answer", "text": "Prepo games. Which games are available depends on the setup for the class or the organisation."}},
    {"@type": "Question", "name": "Can I look at Prepo Class first?", "acceptedAnswer": {"@type": "Answer", "text": "The public start page is at class.prepo.nl. For a demonstration of the teacher environment, get in touch."}},
    {"@type": "Question", "name": "Can Prepo Class be part of a larger learning programme?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. A classroom game activity can be connected to explanation, practice tasks and reflection. The technical possibilities are aligned per application."}}
  ]
}
</script>
