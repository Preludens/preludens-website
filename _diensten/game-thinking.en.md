---
layout: default
lang: en
title: "Game Thinking: designing learning experiences"
tile_title: Game Thinking
description: With Game Thinking, Preludens turns complex knowledge and behaviour challenges into active learning experiences. Discover our approach and the GameStorm.
summary: >-
  A design approach that makes goals, choices and tensions in a learning
  challenge visible before the form is fixed.
permalink: /diensten/game-thinking/
order: 4
body_class: page-panels
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">With Game Thinking, Preludens helps organisations explore complex learning and change challenges before the solution is designed.</p>
<p class="sp-lead">We look at which game principles are already present in practice, and how they can help people learn actively.</p>
{% include panels/actions.html primary_label="Plan a GameStorm" primary_href="/gamestorm/" secondary_label="Explore our approach" secondary_href="#find-the-game" %}
{% endcapture %}
{% capture hero_title %}Game Thinking: from a learning challenge to <span class="hl">active learning</span>{% endcapture %}
{% capture hero_lead %}Discover the game already hidden in your challenge.{% endcapture %}
{% capture hero_lead2 %}You want employees to apply new knowledge, make better choices or start acting differently. The content is often available and the change you want seems clear. But which approach actually helps people move forward? A training course, an interactive learning experience, a serious game — or does the problem first ask for a different way of looking?{% endcapture %}
{% include panels/hero.html kicker="Services" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/hero/gamestorm-hero.jpg" figure_alt="A session in which a learning challenge is explored together" figure_href="#find-the-game" figure_caption="First the challenge, then the form." %}

{% capture recognize_body %}
<h2>The solution does not start with the form</h2>
<p class="sp-lead">Many organisations know which change they want to achieve. Employees need to work more safely, collaborate better, apply new processes or make decisions more independently.</p>
<p class="sp-lead">Often the search for a solution starts quickly. A new training course, an e-learning module, a serious game or another intervention.</p>
<p class="sp-lead">Before you decide what to develop, it helps to understand why the behaviour you want does not appear by itself. Maybe the goals are not clear enough. Maybe employees get too little feedback. Or there are conflicting interests, unwritten rules or circumstances that make change difficult.</p>
<p class="sp-lead">When you want to change behaviour, you first need to understand <strong>how practice works</strong>.</p>
<p class="sp-lead">That is why at Preludens we do not start by designing a game. We explore the challenge first. You do not yet need to know which product is required. Maybe a training course already exists, but the behaviour does not change. Maybe the content is complex, or the motivation to work with it is missing.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="de-vorm" body=recognize_body %}

{% capture what_body %}
<h2>What is Game Thinking?</h2>
<p class="sp-lead">Game Thinking is the design approach with which we look at a learning or behaviour challenge through the structure of a game. Game principles make visible how behaviour and choices hang together in practice. A challenge does not have to turn into a game for that. More about how we use game-based learning is on <a href="{{ '/play/' | relative_url }}">our method</a> page.</p>
<p class="sp-lead">In a game there are goals, rules, choices, challenges, feedback and progress. Those elements also appear in organisations. Employees work towards goals. They act within rules and agreements. They make choices, experience consequences and try to overcome obstacles.</p>
<p class="sp-lead">By making that existing structure visible, we get a clearer view of how people act and where change is possible. From that insight we design a learning experience in which people actively explore, choose, practise and reflect.</p>
<p class="sp-lead">Game Thinking is therefore not a product chosen in advance. <a href="{{ '/diensten/microgame-stories/' | relative_url }}">MicroGame Stories</a> and <a href="{{ '/diensten/dilemma-storytelling/' | relative_url }}">Dilemma Storytelling</a> are concrete learning formats. Game Thinking is the way to decide first which approach fits the challenge.</p>
{% endcapture %}
{% include panels/panel.html variant="mist" id="wat-is-game-thinking" body=what_body %}

{% capture find_copy %}
<p class="sp-lead">The starting point is simple: many processes and changes already hide a game structure. There are goals people try to reach. Rules that decide what is possible. Choices that have consequences. Challenges that have to be overcome. And signals that show whether someone is on the right path.</p>
<p class="sp-lead">Those elements are not always immediately visible. With Find the Game we explore which game mechanisms are already present and how they connect. We do not invent new rules at random. We look for the structure people recognise from their own work, and see how it can support learning, practice or a change in behaviour.</p>
<p class="sp-lead">That way a learning experience connects to daily work, instead of standing apart from it.</p>
{% include panels/actions.html secondary_label="Explore Find the Game" secondary_href="/play/blog/find-the-game/" %}
{% endcapture %}
{% capture find_body %}
<h2>Find the Game: discover the game in practice</h2>
<p class="sp-lead">Within Game Thinking we use our design approach <strong>Find the Game</strong>. In a session we explore the challenge together, before a form is chosen.</p>
{% include panels/media.html src="/assets/images/gamestorm/sessie.jpg" webp="/assets/images/gamestorm/sessie.webp" alt="A GameStorm session in which a team explores a learning challenge together" ratio="1400 / 933" body=find_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" align="left" id="find-the-game" body=find_body %}

{% capture principle_items %}
{% include panels/value.html title="Goals" text="What are people working towards, and which priorities appear when organisational goals and daily goals are not the same?" %}
{% include panels/value.html title="Rules" text="Which procedures, agreements and habits shape the field of play, and how do they influence what people do?" %}
{% include panels/value.html title="Choices" text="At which moments does someone have to decide, with which information, and what happens with a different choice?" %}
{% include panels/value.html title="Challenges" text="Where do people get stuck: through missing knowledge, or through obstacles, conflicting interests and the circumstances themselves?" %}
{% include panels/value.html title="Feedback" text="How do people know whether they are moving forward? In organisations that feedback is not always present or clear." %}
{% include panels/value.html title="Progress" text="Which steps belong to the goal, what do people already master, and where do they still need to practise?" %}
{% endcapture %}
{% capture principles_body %}
<h2>Which game principles do we explore?</h2>
<p class="sp-lead sp-lead--center">We look at the parts that influence behaviour and choices in a situation. Together they give a picture of the current situation and of where change is possible.</p>
{% include panels/values.html label="Game principles within Game Thinking" columns="two" items=principle_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="spelprincipes" body=principles_body %}

{% capture route_steps %}
{% include panels/step.html num="1" title="We explore the challenge" text="What does the organisation want to achieve, which behaviour needs to change, and why is that not working well enough yet?" %}
{% include panels/step.html num="2" title="We map the situation" text="Processes, responsibilities, goals and recurring situations from practice. Where do choices appear, and where do people get stuck?" %}
{% include panels/step.html num="3" title="We look for hidden game mechanisms" text="With Find the Game we make visible how the game principles influence each other in practice." %}
{% include panels/step.html num="4" title="We set learning goals and design principles" text="What do participants need to understand, recognise, practise or start doing differently? Knowledge, skill and context stay distinct." %}
{% include panels/step.html num="5" title="We explore fitting interventions" text="A MicroGame Story, a Dilemma Story, a serious game or another form. The form follows from the learning goals and from practice." %}
{% include panels/step.html num="6" title="We work towards a blueprint" text="Insights, learning goals, game mechanisms and design choices become the starting point for development. Where it fits, we explore choices with a first concept." %}
{% endcapture %}
{% capture route_body %}
<h2>How does Game Thinking work at Preludens?</h2>
<p class="sp-lead sp-lead--center">Game Thinking is a shared design process. We combine the knowledge of your organisation with our experience in storytelling, game principles and instructional design. From practice to a fitting approach.</p>
{% include panels/steps.html variant="flow" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="werkwijze" body=route_body %}

{% capture yield_items %}
{% include panels/value.html title="A clearer picture of the audience" text="Insight into the situations in which people act, the choices they make and the factors that influence their behaviour." %}
{% include panels/value.html title="Concrete learning and change goals" text="What people need to know, be able to do or start doing differently. That keeps the design focused." %}
{% include panels/value.html title="Insight into existing game mechanisms" text="The game principles that are already part of practice, and what of that can be strengthened." %}
{% include panels/value.html title="A fitting design approach" text="Which form matches the learning challenge, so a solution chosen in advance does not start defining the problem." %}
{% include panels/value.html title="A blueprint for further development" text="Design principles and a concrete direction for the next phase: development, testing and implementation." %}
{% endcapture %}
{% capture yield_body %}
<h2>What does Game Thinking deliver?</h2>
<p class="sp-lead sp-lead--center">Game Thinking helps make better design choices before time and resources go into development. The result is a sharper understanding of the challenge and a grounded direction, not a game for its own sake.</p>
{% include panels/values.html label="What Game Thinking delivers" items=yield_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="opbrengst" body=yield_body %}

{% capture fit_items %}
{% include panels/value.html title="Organisational change and transitions" text="Make visible which choices and circumstances influence new behaviour when processes or responsibilities shift." %}
{% include panels/value.html title="Behaviour change" text="People know what is intended, but act differently. We look at which goals, rules and feedback steer their choices." %}
{% include panels/value.html title="Complex knowledge transfer" text="Translate abstract or extensive knowledge into recognisable situations and focused learning activities." %}
{% include panels/value.html title="Collaboration between teams" text="Make differences in goals, expectations and responsibilities visible, and look for where better alignment is possible." %}
{% include panels/value.html title="Decision-making and problem-solving" text="Explore how people choose when there are several interests and routes, and how they can practise safely." %}
{% include panels/value.html title="Preparation for serious gaming" text="Get learning goals, audience and design principles sharp before a serious game is designed." %}
{% endcapture %}
{% capture fit_body %}
<h2>Which challenges suit Game Thinking?</h2>
<p class="sp-lead sp-lead--center">Especially when the solution is not yet fixed, or when a challenge covers more than knowledge transfer alone.</p>
{% include panels/values.html label="Challenges for Game Thinking" columns="two" items=fit_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="vraagstukken" body=fit_body %}

{% capture example_body %}
<h2>An example: a new process that is not followed by itself</h2>
<p class="sp-lead">Suppose an organisation has introduced a new way of working. The instructions are available. Employees have been given an explanation and know which steps they should follow. Still, teams regularly fall back on the old way of working.</p>
<p class="sp-lead">The first response can be to develop extra training. Game Thinking starts with other questions. Why do employees choose the old way of working? Which goals are they trying to reach? Which obstacles do they experience? What feedback do they get on what they do?</p>
<p class="sp-lead">Maybe the new procedure takes more time, while employees are mainly judged on speed. Or responsibilities are unclear, so people look for their own solutions.</p>
<p class="sp-lead">By looking at the challenge as a game, the goals, rules and choices behind that behaviour become visible. From that analysis an interactive training course may turn out to be valuable. Clearer feedback, adjusted working agreements or another intervention may also be needed.</p>
<p class="sp-lead">Game Thinking helps address <strong>the structure in which that behaviour appears</strong>, and not just the behaviour itself.</p>
<p class="sp-lead"><em>This is an illustrative example, not a description of a completed Preludens project.</em></p>
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="voorbeeld" body=example_body %}

{% capture formats_body %}
<h2>From Game Thinking to a fitting learning experience</h2>
<p class="sp-lead">Game Thinking does not stand apart from the other services. It helps decide which approach fits the learning challenge. The aim is an approach that fits the people, the situation and the change you want; a game is one possible outcome of that.</p>
<h3 class="sp-sub">MicroGame Stories: when knowledge needs to be practised actively</h3>
<p class="sp-lead">When the challenge is understanding, applying and repeating concrete knowledge, a <a href="{{ '/diensten/microgame-stories/' | relative_url }}">MicroGame Story</a> can fit. Visual storytelling and short game forms in which participants practise with focus.</p>
{% include panels/actions.html secondary_label="Explore MicroGame Stories" secondary_href="/diensten/microgame-stories/" %}
<h3 class="sp-sub">Dilemma Storytelling: when choices and interests are central</h3>
<p class="sp-lead">When employees need to learn how to handle difficult trade-offs, <a href="{{ '/diensten/dilemma-storytelling/' | relative_url }}">Dilemma Storytelling</a> fits better. Participants move through recognisable scenarios, make choices and experience the consequences for different goals.</p>
{% include panels/actions.html secondary_label="Explore Dilemma Storytelling" secondary_href="/diensten/dilemma-storytelling/" %}
<h3 class="sp-sub">Serious games and other interventions</h3>
<p class="sp-lead">Some challenges ask for a fuller simulation, a shared form of practice or something other than a digital game. Game Thinking helps decide the form and complexity that are needed.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" align="left" id="leerervaringen" body=formats_body %}

{% capture storm_body %}
<h2>Start with a GameStorm</h2>
<p class="sp-lead">You do not have to start a full design process at once. A <a href="{{ '/gamestorm/' | relative_url }}">GameStorm</a> is a concrete first step to explore a learning challenge together.</p>
<p class="sp-lead">During the session we explore the audience, the context and the behaviour you want. We map the main goals, choices and tensions and look for game mechanisms that are already present in practice. We translate those insights into first learning goals, design choices and possible game forms.</p>
<p class="sp-lead">That gives you a clearer picture of the challenge and a first direction. A GameStorm is an accessible introduction to the way we think and design at Preludens. Game Thinking is the broader approach; the GameStorm is the bounded session with which that approach begins.</p>
{% include panels/actions.html primary_label="Plan a GameStorm" primary_href="/gamestorm/" %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="gamestorm" body=storm_body %}

{% capture faq_body %}
<h2>Frequently asked questions about Game Thinking</h2>
<h3 class="sp-sub">What is Game Thinking?</h3>
<p class="sp-lead">A design approach in which we look at a learning or change challenge through game principles. We explore goals, rules, choices, challenges and feedback that are already present in practice, and use those insights to design a fitting learning experience or intervention.</p>
<h3 class="sp-sub">What is the difference between Game Thinking and gamification?</h3>
<p class="sp-lead">Gamification adds game elements to an existing activity. Game Thinking starts earlier: first how a situation works, which behaviour matters and which game mechanisms are already present. Then we decide whether and how game principles can contribute.</p>
<h3 class="sp-sub">What is Find the Game?</h3>
<p class="sp-lead">Preludens' design approach in which we look for game structures that are already inside existing processes. Instead of designing new mechanisms straight away, we look at how practice itself offers starting points. More about that is in the article <a href="{{ '/play/blog/find-the-game/' | relative_url }}">Find the Game</a>.</p>
<h3 class="sp-sub">Is Game Thinking the same as Design Thinking?</h3>
<p class="sp-lead">No. Both approaches start from people and their context, but they emphasise different things. With Game Thinking we use game principles to make goals, rules, choices, challenges and feedback visible.</p>
<h3 class="sp-sub">Does Game Thinking always lead to a serious game?</h3>
<p class="sp-lead">No. A serious game can fit, but the analysis can also lead to a MicroGame Story, Dilemma Storytelling, a change in an existing learning programme or another intervention.</p>
<h3 class="sp-sub">When does Game Thinking fit?</h3>
<p class="sp-lead">When the learning challenge is complex, the behaviour change you want is not yet clear enough, or the right solution is not yet fixed. Also as preparation for a serious-gaming programme.</p>
<h3 class="sp-sub">What does a Game Thinking programme deliver in practice?</h3>
<p class="sp-lead">That depends on the challenge and the agreed scope. The starting point is a sharper picture of the audience, the change you want, the relevant game mechanisms and the design principles. From those insights a blueprint takes shape.</p>
<h3 class="sp-sub">What is the difference between Game Thinking and a GameStorm?</h3>
<p class="sp-lead">Game Thinking is the broader design approach. A GameStorm is a bounded session in which we explore a learning challenge and develop first design ideas. The GameStorm can be the starting point of a fuller programme.</p>
<h3 class="sp-sub">Can we use Game Thinking without developing something afterwards?</h3>
<p class="sp-lead">Yes. The exploration can be valuable on its own, to get a grip on a challenge and set a direction. Whether a learning experience is developed afterwards is a separate choice.</p>
<h3 class="sp-sub">What does Game Thinking cost?</h3>
<p class="sp-lead">That depends on the complexity of the challenge, the number of people involved and the depth you want. A first GameStorm is smaller than a design process with analysis, concept and prototyping. Together we decide which form fits.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=faq_body %}

{% capture cta_left %}Do you have a learning or change challenge for which the solution is not yet clear? Do you want to understand better why people act as they do, which choices matter and how you can create movement?{% endcapture %}
{% capture cta_right %}With Game Thinking we bring structure to complex challenges. We look for the game principles that are already present in practice, and translate them into a fitting design approach. That creates direction before you start developing.{% endcapture %}
{% include panels/cta.html kicker="Game Thinking" title="Discover the game in your challenge" left=cta_left right=cta_right stack=true primary_label="Plan a GameStorm" primary_href="/gamestorm/" secondary_label="Get in touch" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What is Game Thinking?", "acceptedAnswer": {"@type": "Answer", "text": "A design approach in which Preludens looks at a learning or change challenge through game principles: goals, rules, choices, challenges and feedback that are already present in practice."}},
    {"@type": "Question", "name": "What is the difference between Game Thinking and gamification?", "acceptedAnswer": {"@type": "Answer", "text": "Gamification adds game elements to an existing activity. Game Thinking first explores how a situation works and which mechanisms are already present."}},
    {"@type": "Question", "name": "What is Find the Game?", "acceptedAnswer": {"@type": "Answer", "text": "Preludens' design approach in which we look for game structures that are already present in existing processes."}},
    {"@type": "Question", "name": "Is Game Thinking the same as Design Thinking?", "acceptedAnswer": {"@type": "Answer", "text": "No. Both start from people and their context. Game Thinking specifically uses game principles to make goals, rules, choices, challenges and feedback visible."}},
    {"@type": "Question", "name": "Does Game Thinking always lead to a serious game?", "acceptedAnswer": {"@type": "Answer", "text": "No. The analysis can also lead to a MicroGame Story, Dilemma Storytelling, a change in a learning programme or another intervention."}},
    {"@type": "Question", "name": "When does Game Thinking fit?", "acceptedAnswer": {"@type": "Answer", "text": "When the learning challenge is complex, the change you want is not yet clear enough, or the solution is not yet fixed."}},
    {"@type": "Question", "name": "What does a Game Thinking programme deliver in practice?", "acceptedAnswer": {"@type": "Answer", "text": "A sharper picture of the audience, the change you want, the relevant game mechanisms and the design principles, as a blueprint for a learning experience or intervention."}},
    {"@type": "Question", "name": "What is the difference between Game Thinking and a GameStorm?", "acceptedAnswer": {"@type": "Answer", "text": "Game Thinking is the broader design approach. A GameStorm is a bounded session to explore a learning challenge and develop first design ideas."}},
    {"@type": "Question", "name": "Can we use Game Thinking without developing something afterwards?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The exploration can be valuable on its own. Whether something is developed afterwards is a separate choice."}},
    {"@type": "Question", "name": "What does Game Thinking cost?", "acceptedAnswer": {"@type": "Answer", "text": "That depends on the complexity, the number of people involved and the depth you want. A GameStorm is smaller than a full design process."}}
  ]
}
</script>
