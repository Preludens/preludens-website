---
layout: default
lang: en
title: Developing e-learning with MicroGames
tile_title: E-learning
description: E-learning that goes further than information? Preludens makes complex knowledge active and usable with storytelling and MicroGames.
summary: >-
  A clear module for knowledge, processes or skills you want to refresh —
  without a game having to be part of it.
permalink: /e-learning/
order: 1
body_class: page-panels page-elearning
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">Preludens develops interactive e-learning in which participants actively get to work. We combine recognisable stories with short forms of play, focused challenges and direct feedback.</p>
<p class="sp-lead">Online learning then becomes more than clicking through information. It becomes an experience in which people discover, choose, practise and grow.</p>
{% include panels/actions.html primary_label="Plan a GameStorm" primary_href="/gamestorm/" secondary_label="Discover MicroGame Stories" secondary_href="/diensten/microgame-stories/" %}
{% endcapture %}
{% capture hero_title %}E-learning that lets people learn <span class="hl">actively</span>{% endcapture %}
{% capture hero_lead %}From complex knowledge to interactive learning experiences with storytelling and MicroGames.{% endcapture %}
{% capture hero_lead2 %}E-learning makes knowledge accessible. But how do you make sure employees do not only receive that knowledge, but also understand it, remember it and apply it?{% endcapture %}
{% include panels/hero.html kicker="E-learning" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="A team setting out a route together" figure_href="/gamestorm/" figure_caption="From knowledge to usable behaviour." %}

{% capture info_body %}
<h2>From information to usable knowledge</h2>
<p class="sp-lead">Many organisations have valuable knowledge they want to pass on to employees. Think of technical instructions, new processes, safety procedures or complex laws and regulations.</p>
<p class="sp-lead">That information is often already available in documents, presentations or existing e-learning modules. But offering information is not the same as <strong>learning</strong>.</p>
<p class="sp-lead">Employees can complete an online training without it becoming clear whether they can also apply the knowledge in their daily work. That is because traditional e-learning is often aimed at explanation and knowledge transfer. The participant reads, watches, listens and answers a few questions.</p>
<p class="sp-lead">When the goal is to develop skills or make better decisions, more is needed. The challenge is not only to transfer knowledge, but to let people <strong>practise what they need to be able to do</strong>.</p>
<p class="sp-lead">That is why at Preludens we design learning experiences in which participants actively work with the content.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="toepasbare-kennis" body=info_body %}

{% capture why_items %}
{% include panels/value.html title="Engagement" text="Participants get a concrete challenge. They become curious about the situation and have a reason to continue." %}
{% include panels/value.html title="Understanding and application" text="By using knowledge in recognisable tasks, participants discover how theory and practice connect." %}
{% include panels/value.html title="Practise and improve" text="Direct feedback and repetition give participants room to understand mistakes, make new choices and develop their skills further." %}
{% endcapture %}
{% capture interactive_body %}
<h2>What is interactive e-learning?</h2>
<p class="sp-lead sp-lead--center">Interactive e-learning is online learning in which participants are actively involved in processing and applying knowledge.</p>
<p class="sp-lead">Instead of only receiving information, they carry out tasks, make choices and get feedback on what they do. The interaction has a clear learning goal.</p>
<p class="sp-lead">A click on a button does not yet make a training meaningfully interactive. What matters is that the participant has to think, judge, choose or act. For example by recognising a risk, carrying out a technical action or making a difficult decision in a recognisable work situation.</p>
<p class="sp-lead">Knowledge is then connected to the context in which employees will need it later.</p>
<h3 class="sp-sub">Why active e-learning?</h3>
<p class="sp-lead">Active e-learning makes room for three parts of the learning process. The result is a learning experience aimed not only at finishing a module, but at developing knowledge and skills.</p>
{% include panels/values.html label="Three parts of active e-learning" items=why_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="interactieve-e-learning" body=interactive_body %}

{% capture story_media %}
<h3 class="sp-sub">Storytelling: make knowledge recognisable</h3>
<p class="sp-lead">A story gives context to the knowledge someone needs to learn. We place the material in a recognisable situation, with a concrete problem, a challenge or a dilemma.</p>
<p class="sp-lead">It then becomes clear why the knowledge matters, when it is needed and what consequences different choices can have. The participant learns not only what the right approach is, but also why.</p>
<h3 class="sp-sub">MicroGames: make knowledge playable</h3>
<p class="sp-lead">A MicroGame is a short, focused form of play in which participants practise one learning goal. They might have to judge a situation, combine parts, order a process or make a decision.</p>
<p class="sp-lead">While playing they receive direct feedback. They discover what works, where a mistake starts and how they can improve their approach. Through repetition and variation, participants can practise the same knowledge from different angles.</p>
{% endcapture %}
{% capture method_body %}
<h2>Developing e-learning with storytelling and MicroGames</h2>
<p class="sp-lead">At Preludens we combine two design principles: storytelling and <a href="{{ '/play/' | relative_url }}">game-based learning</a>.</p>
{% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-kringloop.jpg" alt="A MicroGame in which you drag parts of the cooling process to the right place in the cycle" width="1024" height="460" ratio="1024 / 460" body=story_media %}
<h3 class="sp-sub">MicroGame Stories: story and play in one learning experience</h3>
<p class="sp-lead">When we combine storytelling and MicroGames, a MicroGame Story takes shape. The participant follows a short, visual story built around a recognisable challenge. Within that story, the knowledge needed to move forward is offered.</p>
<p class="sp-lead">The participant then applies that knowledge in a MicroGame. The choices they make gain meaning inside the story, after which they can reflect on the result. The result is a coherent learning route in which knowledge, context and active doing strengthen each other.</p>
{% include panels/actions.html secondary_label="Discover our MicroGame Stories" secondary_href="/diensten/microgame-stories/" %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="storytelling-microgames" body=method_body %}

{% capture build_steps %}
{% include panels/step.html num="1" title="We explore the learning challenge" text="What do employees need to learn? Where do they get stuck? And in which situations do they need to use the new knowledge? We map the audience, the context and the main challenges." %}
{% include panels/step.html num="2" title="We turn knowledge into concrete learning goals" text="Together we decide what participants should understand or be able to do afterwards. We focus not only on knowledge, but also on the behaviour needed to apply it." %}
{% include panels/step.html num="3" title="We design the story and the challenges" text="We develop a recognisable storyline in which the knowledge gains meaning. Then we choose game mechanisms that let participants practise actively." %}
{% include panels/step.html num="4" title="We develop the interactive learning experience" text="We combine visual storytelling, MicroGames and feedback into a coherent online learning experience. Participants can learn, discover and practise on their own." %}
{% include panels/step.html num="5" title="We make learning accessible and visible" text="The learning experience can be offered through an existing learning environment or through our distribution platform. Where it fits, we make progress and learning activity visible, so it is clear how participants move through the training and where further improvement is possible." %}
{% endcapture %}
{% capture build_body %}
<h2>How do we develop interactive e-learning?</h2>
<p class="sp-lead sp-lead--center">A good online learning experience does not start with the technology, but with the people who need to learn with it. That is why we develop our e-learning from practice, the audience and the learning goals.</p>
{% include panels/steps.html variant="flow" items=build_steps %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="aanpak" body=build_body %}

{% capture fit_items %}
{% include panels/value.html title="Technical knowledge and professional skills" text="Make abstract processes and technical principles understandable with visual tasks and short exercises." %}
{% include panels/value.html title="Safety and procedures" text="Let employees recognise risks, apply procedures and practise the consequences of different actions." %}
{% include panels/value.html title="Onboarding" text="Help new employees get to know processes, ways of working and recognisable situations in the organisation." %}
{% include panels/value.html title="Laws and regulations" text="Turn complex rules into concrete situations in which employees have to judge which knowledge applies." %}
{% include panels/value.html title="Decision-making and professional action" text="Let employees practise dilemmas, competing interests and choices whose consequences are not always immediately clear." %}
{% endcapture %}
{% capture fit_body %}
<h2>Which learning challenges suit interactive e-learning?</h2>
<p class="sp-lead">Interactive e-learning is especially valuable when employees need to be able to do more than remember information. In all of these situations the same starting point holds: participants should not only understand the knowledge, but also learn to use it.</p>
{% include panels/values.html label="Learning challenges where interactive e-learning fits" columns="two" items=fit_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="leeruitdagingen" body=fit_body %}

{% capture case_media %}
<p class="sp-lead">How do you make technical theory accessible for professionals who need the knowledge in their daily work?</p>
<p class="sp-lead">For the Basic Refrigeration Technology project (BRL200), Preludens worked with Climatools BV, 21CC Education and Studium. Topics such as the mechanical cooling process, superheating, subcooling and the h-log-P diagram matter, but can stay abstract when they are offered only through text and explanation.</p>
<p class="sp-lead">That is why we developed a series of interactive MicroGames. Participants explore technical processes, recognise connections and apply knowledge in visual tasks. We also developed a game framework that can make progress, performance and learning activity visible.</p>
<p class="sp-lead">The project shows how complex professional knowledge can be turned into short, focused learning experiences.</p>
{% include panels/actions.html secondary_label="View the Basic Refrigeration Technology project" secondary_href="/verhalen/nieuw-verhaal/" %}
{% endcapture %}
{% capture case_body %}
<h3>From practice</h3>
<h2>Basic refrigeration technology</h2>
{% include panels/media.html src="/assets/images/verhalen/basis-koeltechniek-onderdelen.jpg" alt="A MicroGame in which parts of a refrigeration installation are placed in the right position" width="1024" height="499" ratio="1024 / 499" reverse=true body=case_media %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="basis-koeltechniek" body=case_body %}

{% capture existing_body %}
<h2>Game-based learning as an addition to existing e-learning</h2>
<p class="sp-lead">Interactive e-learning does not mean an organisation has to start over completely. Many organisations already have valuable learning content, clear learning goals and an existing digital learning environment.</p>
<p class="sp-lead">Preludens helps strengthen that base. We can turn existing knowledge into a MicroGame Story, or develop a separate MicroGame that connects to an existing e-learning module. That adds active practice where it is most valuable.</p>
<p class="sp-lead">Our approach is aimed at accessibility. We keep the learning experiences compact, limit unnecessary design complexity and connect to existing learning environments where we can. You can start small, learn from the first experiences and then build further.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="bestaande-e-learning" body=existing_body %}

{% capture faq_body %}
<h2>Frequently asked questions about e-learning</h2>
<h3 class="sp-sub">What is the difference between e-learning and game-based learning?</h3>
<p class="sp-lead">E-learning is the umbrella term for learning through digital means. Game-based learning is a didactic approach that uses principles of play so participants learn actively.</p>
<p class="sp-lead">Game-based learning can therefore be part of e-learning. At Preludens we use MicroGames and storytelling to make online learning experiences more active.</p>
<h3 class="sp-sub">What does it cost to develop interactive e-learning?</h3>
<p class="sp-lead">The cost depends on the amount of learning content, the complexity of the interactions and the design you want.</p>
<p class="sp-lead">At Preludens we work with short, focused MicroGames and MicroGame Stories. We want to make game-based learning accessible without a large serious-game project being required from the start. In a <a href="{{ '/gamestorm/' | relative_url }}">GameStorm</a> we explore which approach fits your learning goals and the means you have.</p>
<h3 class="sp-sub">Can MicroGames be used in our existing LMS?</h3>
<p class="sp-lead">Our learning experiences can be used in existing learning environments or through our own distribution platform. Which technical connection fits best depends on what that environment allows.</p>
<h3 class="sp-sub">Is interactive e-learning suitable for every audience?</h3>
<p class="sp-lead">The right form depends on the audience, the learning goals and the context. Not every topic needs an extensive interactive experience. Sometimes a clear explanation is enough. When employees need to practise, weigh options or apply knowledge, MicroGames can be a valuable addition.</p>
<h3 class="sp-sub">Can we turn existing e-learning into MicroGames?</h3>
<p class="sp-lead">Yes. Existing learning content can be the starting point for a new interactive learning experience. We look at which parts lend themselves to active tasks and turn them into fitting stories, challenges and game mechanisms.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=faq_body %}

{% capture cta_left %}Do you want to strengthen existing e-learning or develop new online learning experiences? In a GameStorm we explore your learning challenge together.{% endcapture %}
{% capture cta_right %}We map the audience, the key learning goals and the relevant situations from practice. We then turn those insights into a first storyline, fitting choices and short game mechanisms.{% endcapture %}
{% include panels/cta.html kicker="E-learning" title="Take the first step towards active e-learning" left=cta_left right=cta_right stack=true primary_label="Plan a GameStorm" primary_href="/gamestorm/" secondary_label="See our services" secondary_href="/diensten/" %}

{% include panels/footer-reveal.html %}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between e-learning and game-based learning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "E-learning is the umbrella term for learning through digital means. Game-based learning is a didactic approach that uses principles of play so participants learn actively. Game-based learning can therefore be part of e-learning. At Preludens we use MicroGames and storytelling to make online learning experiences more active."
      }
    },
    {
      "@type": "Question",
      "name": "What does it cost to develop interactive e-learning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost depends on the amount of learning content, the complexity of the interactions and the design you want. At Preludens we work with short, focused MicroGames and MicroGame Stories. In a GameStorm we explore which approach fits your learning goals and the means you have."
      }
    },
    {
      "@type": "Question",
      "name": "Can MicroGames be used in our existing LMS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our learning experiences can be used in existing learning environments or through our own distribution platform. Which technical connection fits best depends on what that environment allows."
      }
    },
    {
      "@type": "Question",
      "name": "Is interactive e-learning suitable for every audience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The right form depends on the audience, the learning goals and the context. Not every topic needs an extensive interactive experience. Sometimes a clear explanation is enough. When employees need to practise, weigh options or apply knowledge, MicroGames can be a valuable addition."
      }
    },
    {
      "@type": "Question",
      "name": "Can we turn existing e-learning into MicroGames?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Existing learning content can be the starting point for a new interactive learning experience. We look at which parts lend themselves to active tasks and turn them into fitting stories, challenges and game mechanisms."
      }
    }
  ]
}
</script>
