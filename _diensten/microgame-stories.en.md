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

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">With MicroGame Stories, Preludens turns that knowledge into an active learning experience. We combine short, visual stories with focused forms of play in which participants discover, choose, practise and receive feedback themselves.</p>
<p class="sp-lead">Online learning then stops being a series of screens to click through, and becomes a meaningful learning route in which people develop new knowledge and skills step by step.</p>
{% include panels/actions.html primary_label="Plan a GameStorm" primary_href="/gamestorm/" secondary_label="Experience a MicroGame Story" secondary_href="/verhalen/microgame-demo/" %}
{% endcapture %}
{% capture hero_title %}MicroGame Stories: make complex knowledge <span class="hl">playable</span>{% endcapture %}
{% capture hero_lead %}Interactive e-learning in which storytelling and MicroGames come together.{% endcapture %}
{% capture hero_lead2 %}You want to pass important knowledge on to your employees. Knowledge they should not only understand, but also remember and apply when it matters.{% endcapture %}
{% include panels/hero.html kicker="Services" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="A team setting out a route together" figure_href="/verhalen/microgame-demo/" figure_caption="From knowing to practising." %}

{% capture transfer_body %}
<h2>From knowledge transfer to active learning</h2>
<p class="sp-lead">In many organisations, important knowledge is already available. Handbooks, instructions, presentations, process descriptions and existing e-learning modules describe exactly what employees need to know.</p>
<p class="sp-lead">Available information does not automatically mean people can apply that knowledge. An employee can know a procedure and still struggle to carry it out in an unexpected situation. Or understand a technical explanation without recognising the key principles when they are needed in practice.</p>
<p class="sp-lead">That is the challenge in many forms of online learning. The content is right, but the participant gets little chance to practise with it actively.</p>
<p class="sp-lead">Knowledge only gains meaning when people understand <strong>what they need it for</strong> and can work with it. That is why we develop MicroGame Stories: short, visual learning experiences in which knowledge is connected to recognisable situations, concrete challenges and direct feedback.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="actief-leren" body=transfer_body %}

{% capture parts %}
{% include panels/value.html title="Storytelling gives context" text="A recognisable story makes clear where the knowledge is needed, which problem it solves and why it is relevant for the participant." %}
{% include panels/value.html title="MicroGames create practice" text="Short, focused challenges let participants recognise, apply, order or judge knowledge. They learn by doing something themselves." %}
{% include panels/value.html title="Feedback and repetition" text="Participants discover why a choice works or does not, and get room to improve their approach." %}
{% endcapture %}
{% capture what_media %}
<p class="sp-lead">MicroGame Stories are short, interactive online training programmes that combine storytelling and <a href="{{ '/play/' | relative_url }}">game-based learning</a>.</p>
<p class="sp-lead">The participant follows a visual story around a recognisable work situation. Inside that story a problem, a question or a challenge arises that needs specific knowledge. That knowledge is then offered and actively practised in a MicroGame: a short form of play aimed at a concrete learning goal.</p>
<p class="sp-lead">The participant makes choices, carries out tasks and gets direct feedback. After the MicroGame the story continues. It becomes clear why the knowledge matters and how it can be applied in practice.</p>
{% endcapture %}
{% capture what_body %}
<h2>What are MicroGame Stories?</h2>
<p class="sp-lead sp-lead--center">A MicroGame Story connects a recognisable story, the knowledge needed at that moment, and a short form of play to practise that knowledge.</p>
{% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-gesprek.jpg" alt="A comic scene from a learning experience: two technicians talking on a terrace, with a button to start the scene" width="1024" height="462" ratio="1024 / 462" body=what_media %}
<p class="sp-lead">The result is a learning experience in which story, knowledge and play strengthen each other. MicroGame Stories are meant to train basic knowledge actively and make it stick. For difficult trade-offs without one right answer, we use <a href="{{ '/diensten/dilemma-storytelling/' | relative_url }}">Dilemma Storytelling</a>.</p>
{% include panels/values.html label="Three parts of a MicroGame Story" items=parts %}
{% include panels/actions.html secondary_label="Experience a MicroGame Story" secondary_href="/verhalen/microgame-demo/" %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="wat-zijn-microgame-stories" body=what_body %}

{% capture route_steps %}
{% include panels/step.html num="1" title="Recognise the situation" text="The participant meets a character, a workplace or a recognisable problem from practice. The story gives context and sparks curiosity." %}
{% include panels/step.html num="2" title="Discover the challenge" text="Inside the story a problem arises that calls for knowledge or a skill. The participant discovers what is at stake." %}
{% include panels/step.html num="3" title="Explore the knowledge that is needed" text="The material is offered at the moment it is relevant. Information immediately gains meaning inside the situation." %}
{% include panels/step.html num="4" title="Practise with a MicroGame" text="The participant gets to work. For example by recognising parts, ordering a process, making connections or making a choice." %}
{% include panels/step.html num="5" title="Receive feedback and try again" text="The participant sees what is going well and where improvement is possible. Feedback explains why a choice works or does not." %}
{% include panels/step.html num="6" title="Close and reflect" text="The participant returns to the story. What did you learn, why does it matter, and how do you use that knowledge in a similar situation?" %}
{% endcapture %}
{% capture route_body %}
<h2>How does a MicroGame Story work?</h2>
<p class="sp-lead sp-lead--center">A MicroGame Story takes the participant along a recognisable learning route. Not by offering all the information up front, but by giving the knowledge meaning step by step.</p>
{% include panels/steps.html variant="flow" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="hoe-het-werkt" body=route_body %}

{% capture benefit_items %}
{% include panels/value.html title="More engagement with the material" text="A recognisable story and a concrete challenge give participants a reason to work actively with the knowledge. They have to make choices and carry out tasks themselves." %}
{% include panels/value.html title="Better understanding through recognisable context" text="Knowledge is linked to situations in which employees will need it later. It becomes clear why rules, principles or ways of working matter." %}
{% include panels/value.html title="Room to practise safely" text="A MicroGame is an environment in which participants may make mistakes. Through feedback and repetition they improve their approach without consequences for daily practice." %}
{% include panels/value.html title="Short, focused learning activities" text="MicroGame Stories are built around concrete learning goals. Participants work step by step on specific topics and skills." %}
{% endcapture %}
{% capture why_body %}
<h2>Why choose MicroGame Stories?</h2>
<p class="sp-lead sp-lead--center">MicroGame Stories are designed to make the step from information to usable knowledge smaller.</p>
{% include panels/values.html label="What a MicroGame Story delivers" columns="two" items=benefit_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="waarom" body=why_body %}

{% capture fit_items %}
{% include panels/value.html title="Technical knowledge and professional skills" text="Participants explore processes, recognise connections and apply knowledge in visual tasks." %}
{% include panels/value.html title="Safety and procedures" text="Employees practise recognising risks and applying procedures in recognisable situations." %}
{% include panels/value.html title="Onboarding" text="New employees discover processes, agreements and ways of working through situations from the organisation." %}
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

{% capture case_media %}
<p class="sp-lead">How do you make complex technical knowledge accessible for professionals who have to apply the theory in their daily work? That challenge was central to the Basic Refrigeration Technology project (BRL200).</p>
<p class="sp-lead">Together with Climatools BV, 21CC Education and Studium, Preludens developed a series of interactive MicroGames around basic refrigeration knowledge. Topics such as the mechanical cooling process, superheating, subcooling and the h-log-P diagram can stay abstract when they are offered only through text or explanation.</p>
<p class="sp-lead">With short, visual tasks, participants explore technical processes, recognise connections and apply concepts. We also developed a game framework that can make progress, performance and learning activity visible.</p>
<p class="sp-lead">The project shows how MicroGames turn complex professional knowledge into focused, interactive learning activities. We made a full MicroGame Story, with a comic and five MicroGames, for onITnow around <a href="{{ '/verhalen/onitnow-verhaal-maria/' | relative_url }}">the story of Maria</a>.</p>
{% include panels/actions.html secondary_label="View the Basic Refrigeration Technology project" secondary_href="/verhalen/nieuw-verhaal/" %}
{% endcapture %}
{% capture case_body %}
<h3>From practice</h3>
<h2>Basic refrigeration technology</h2>
{% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-kringloop.jpg" alt="A MicroGame in which you drag parts of the cooling process to the right place in the cycle" width="1024" height="460" ratio="1024 / 460" reverse=true body=case_media %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="basis-koeltechniek" body=case_body %}

{% capture build_steps %}
{% include panels/step.html num="1" title="We map the learning challenge" text="What do participants need to know, which skills should they develop, and which problems do they meet in practice? Together we explore the audience, the context and the learning needs." %}
{% include panels/step.html num="2" title="We formulate concrete learning goals" text="We make clear what participants should be able to recognise, understand, choose or apply." %}
{% include panels/step.html num="3" title="We develop a recognisable storyline" text="The participant gets a recognisable situation, discovers a problem and gets a reason to use the material." %}
{% include panels/step.html num="4" title="We design fitting MicroGames" text="For each learning goal we choose a game mechanism that fits the learning activity: recognise, order, combine, judge or apply. Including feedback and repetition." %}
{% include panels/step.html num="5" title="We develop and test" text="We bring story, design, knowledge and interaction together and improve the experience where that is needed." %}
{% include panels/step.html num="6" title="We deliver the MicroGame Story" text="The learning experience becomes available through an existing learning environment or through Prepo, so it stays manageable and can keep growing." %}
{% endcapture %}
{% capture build_body %}
<h2>How do we develop a MicroGame Story?</h2>
<p class="sp-lead sp-lead--center">A strong MicroGame Story does not start with a game idea. We start with the knowledge that matters, the people who need to learn it and the situations in which that knowledge is used.</p>
{% include panels/steps.html variant="flow" items=build_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="ontwikkeling" body=build_body %}

{% capture existing_body %}
<h2>MicroGame Stories inside your existing e-learning</h2>
<p class="sp-lead">You do not have to develop a completely new learning programme straight away to use game-based learning. Many organisations already have lesson material, existing <a href="{{ '/e-learning/' | relative_url }}">e-learning</a> and clear learning goals. That content is often a good starting point.</p>
<p class="sp-lead">Preludens helps turn existing knowledge into recognisable stories, short challenges and focused game mechanisms. An existing module can be extended with a MicroGame. Or one chapter becomes a MicroGame Story in which participants actively practise the most important knowledge.</p>
<p class="sp-lead">Game-based learning then becomes an addition to existing e-learning, rather than a completely new and large programme. Our mission is to make this way of learning accessible for organisations that want to strengthen their online training.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="bestaande-e-learning" body=existing_body %}

{% capture prepo_body %}
<h2>Easy to offer and manage via Prepo</h2>
<p class="sp-lead">A good learning experience should not only be pleasant to use, but also stay easy to make available. That is why we help with the distribution and management of MicroGames and Stories.</p>
<p class="sp-lead">Through <a href="{{ '/prepo/' | relative_url }}">Prepo</a>, the Preludens Portal, organisations can manage learning experiences, collect feedback, keep versions and see use and progress. MicroGames and Stories can also be offered through an existing learning environment.</p>
<p class="sp-lead">For new MicroGames and Stories, three months of access to Prepo is included. After delivery there is room to launch the learning experience, follow it and improve it where needed.</p>
{% include panels/actions.html secondary_label="Discover Prepo" secondary_href="/prepo/" %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="prepo" body=prepo_body %}

{% capture small_body %}
<h2>Start small with one MicroGame Story</h2>
<p class="sp-lead">Game-based learning does not have to start with a large development programme. Sometimes one recognisable situation and one concrete learning goal are enough to explore the possibilities.</p>
<p class="sp-lead">That is why you can also start at Preludens with one chapter of a MicroGame Story. Together we choose a bounded topic, develop a visual story and add a focused MicroGame in which participants actively practise the knowledge.</p>
<p class="sp-lead">You then have a first concrete learning experience. With it you discover how storytelling and principles of play fit your content and audience, and you decide whether and how you want to build further.</p>
{% include panels/actions.html secondary_label="Start with one chapter" secondary_href="/contact/#een-hoofdstuk" %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="begin-klein" body=small_body %}

{% capture faq_body %}
<h2>Frequently asked questions about MicroGame Stories</h2>
<h3 class="sp-sub">What is the difference between a MicroGame and a MicroGame Story?</h3>
<p class="sp-lead">A MicroGame is a short, focused form of play in which participants practise a concrete learning goal.</p>
<p class="sp-lead">A MicroGame Story combines one or more MicroGames with a visual story. The story gives the knowledge context, while the MicroGames provide active application, feedback and repetition.</p>
<h3 class="sp-sub">What is the difference between MicroGame Stories and traditional e-learning?</h3>
<p class="sp-lead">Traditional e-learning often focuses on offering information through text, image, video and tests.</p>
<p class="sp-lead">MicroGame Stories add a narrative context and active forms of play. Participants do not only get an explanation; they practise the knowledge inside recognisable situations.</p>
<h3 class="sp-sub">Are MicroGame Stories the same as serious games?</h3>
<p class="sp-lead">MicroGame Stories use principles from serious gaming, but they are built to be more compact and more focused. Instead of one extensive game environment, we work with short stories and MicroGames around specific learning goals.</p>
<p class="sp-lead">That means they can connect well to existing e-learning and smaller learning challenges.</p>
<h3 class="sp-sub">Can we use existing lesson materials?</h3>
<p class="sp-lead">Yes. Existing documents, presentations, work instructions and e-learning modules can serve as the content base. We look at which knowledge matters and turn it into fitting stories, challenges and interactions.</p>
<h3 class="sp-sub">Can MicroGame Stories be used in our own LMS?</h3>
<p class="sp-lead">Yes, depending on what the learning environment allows technically. Preludens can prepare learning experiences for an existing LMS or make them available through Prepo.</p>
<h3 class="sp-sub">What does it cost to develop a MicroGame Story?</h3>
<p class="sp-lead">The cost depends on the size of the learning content, the number of learning goals, the interactions you want and the design. We work with short, focused learning experiences and the option to start small.</p>
<h3 class="sp-sub">How long does it take to develop a MicroGame Story?</h3>
<p class="sp-lead">That depends on size and complexity. For a bounded first chapter we take a development period of about one month as a starting point. A larger learning route needs a plan that fits the content and the number of MicroGames.</p>
<h3 class="sp-sub">Which organisations suit MicroGame Stories?</h3>
<p class="sp-lead">Organisations that want to pass important knowledge on to employees, students or other audiences. Especially when that knowledge is complex, needs to be repeated, or has to be applied in recognisable work situations.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=faq_body %}

{% capture cta_left %}Do you have important knowledge that employees need to understand, remember or apply better? With MicroGame Stories we turn that content into an active learning experience in which storytelling and MicroGames come together.{% endcapture %}
{% capture cta_right %}You do not yet need to know exactly what that learning experience should look like. In a GameStorm we explore the learning challenge, the audience and the learning goals, and we look for a first direction.{% endcapture %}
{% include panels/cta.html kicker="MicroGame Stories" title="Make your knowledge playable" left=cta_left right=cta_right stack=true primary_label="Plan a GameStorm" primary_href="/gamestorm/" secondary_label="Start with one chapter" secondary_href="/contact/#een-hoofdstuk" %}

{% include panels/footer-reveal.html %}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a MicroGame and a MicroGame Story?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A MicroGame is a short, focused form of play in which participants practise a concrete learning goal. A MicroGame Story combines one or more MicroGames with a visual story. The story gives the knowledge context, while the MicroGames provide active application, feedback and repetition."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between MicroGame Stories and traditional e-learning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional e-learning often focuses on offering information through text, image, video and tests. MicroGame Stories add a narrative context and active forms of play. Participants practise the knowledge inside recognisable situations."
      }
    },
    {
      "@type": "Question",
      "name": "Are MicroGame Stories the same as serious games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MicroGame Stories use principles from serious gaming, but they are built to be more compact and more focused. Instead of one extensive game environment, we work with short stories and MicroGames around specific learning goals."
      }
    },
    {
      "@type": "Question",
      "name": "Can we use existing lesson materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Existing documents, presentations, work instructions and e-learning modules can serve as the content base. We turn that knowledge into fitting stories, challenges and interactions."
      }
    },
    {
      "@type": "Question",
      "name": "Can MicroGame Stories be used in our own LMS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, depending on what the learning environment allows technically. Preludens can prepare learning experiences for an existing LMS or make them available through Prepo."
      }
    },
    {
      "@type": "Question",
      "name": "What does it cost to develop a MicroGame Story?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost depends on the size of the learning content, the number of learning goals, the interactions you want and the design. We work with short, focused learning experiences and the option to start small."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to develop a MicroGame Story?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on size and complexity. For a bounded first chapter we take a development period of about one month as a starting point."
      }
    },
    {
      "@type": "Question",
      "name": "Which organisations suit MicroGame Stories?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Organisations that want to pass important knowledge on to employees, students or other audiences, especially when that knowledge is complex, needs to be repeated, or has to be applied in practice."
      }
    }
  ]
}
</script>
