---
layout: default
lang: en
title: "Dilemma Storytelling: training decision-making"
tile_title: Dilemma Storytelling
description: Train decision-making with Dilemma Storytelling. Let employees explore realistic dilemmas, weigh interests and experience the consequences.
summary: >-
  Teams explore difficult situations in which several interests are at play
  at once, and not every answer is equally right.
permalink: /diensten/dilemma-storytelling/
order: 3
body_class: page-panels
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_actions %}
<p class="sp-lead">With Dilemma Storytelling, Preludens develops interactive stories in which employees practise this kind of trade-off. They step into a recognisable situation, make choices and discover what their decisions mean for different goals and the people involved.</p>
<p class="sp-lead">That creates a safe learning environment in which teams can explore, practise and reflect before similar situations happen in practice.</p>
{% include panels/actions.html primary_label="Plan a GameStorm" primary_href="/gamestorm/" secondary_label="Try an interactive dilemma" secondary_href="#ervaringsblok" %}
{% endcapture %}
{% capture hero_title %}Dilemma Storytelling: learn to make better <span class="hl">choices</span>{% endcapture %}
{% capture hero_lead %}Interactive scenarios in which employees practise difficult decisions and experience the consequences of their choices.{% endcapture %}
{% capture hero_lead2 %}In practice, not every decision is simple. Employees regularly have to choose between interests that collide. Safety or speed? Quality or cost? Customer satisfaction or following a procedure? Often there is no single answer that is right in every situation.{% endcapture %}
{% include panels/hero.html kicker="Services" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/hero/diensten-hero.jpg" figure_alt="A team setting out a route together" figure_href="#ervaringsblok" figure_caption="From knowing to weighing." %}

{% capture recognize_body %}
<h2>Knowing what to do is not the same as being able to decide</h2>
<p class="sp-lead">Many organisations invest in knowledge transfer. Employees learn procedures, guidelines and ways of working. They follow training and get an explanation of the responsibilities that come with their role.</p>
<p class="sp-lead">But daily practice is rarely as tidy as an instruction. What do you do when a customer asks for an exception? When a safety measure causes delay? Or when two important goals cannot be met at the same time?</p>
<p class="sp-lead">In those moments employees have to do more than reproduce knowledge. They have to understand the situation, recognise interests, estimate consequences and make a decision.</p>
<p class="sp-lead">The challenge is not always knowing the rules, but making a <strong>sound trade-off when interests collide</strong>. That skill is hard to train with explanation alone, or with a traditional knowledge test.</p>
<p class="sp-lead">That is why Preludens develops learning experiences in which participants can practise the complexity of real decisions. A MicroGame can help someone carry out a procedure correctly. Dilemma Storytelling lets them experience what happens when that procedure collides with time pressure, customer interests, safety or other responsibilities.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="kunnen-beslissen" body=recognize_body %}

{% capture dilemma_body %}
<h2>Try an interactive dilemma</h2>
<p class="sp-lead">A choice is often more complicated than it first appears. Below you can explore one situation. It is a shortened, fictional scenario, not a completed project. In a real Dilemma Story the story develops further and earlier choices carry into later situations.</p>
<div class="dilemma-play" id="dilemma" data-dilemma>
  <p class="dilemma-play__kicker">Fictional scenario</p>
  <h3 class="sp-sub">The deadline is getting closer</h3>
  <p>You are a team lead. An important job has to be finished today. The customer is counting on delivery, but an employee reports that a safety check is not yet complete.</p>
  <p><strong>What do you do?</strong></p>
  <div class="dilemma-play__choices" data-dilemma-choices>
    <button type="button" data-choice="stil">You stop the work until the safety check is finished.</button>
    <button type="button" data-choice="door">You let the team keep working so the deadline can be met.</button>
    <button type="button" data-choice="samen">You look with the team for a safe alternative way of working.</button>
  </div>
  <div data-dilemma-result hidden>
    <p data-dilemma-lead></p>
    <ul class="dilemma-play__kpis">
      <li><strong>Safety</strong> <span data-kpi="veiligheid"></span></li>
      <li><strong>Quality</strong> <span data-kpi="kwaliteit"></span></li>
      <li><strong>Speed</strong> <span data-kpi="snelheid"></span></li>
      <li><strong>Customer satisfaction</strong> <span data-kpi="klant"></span></li>
    </ul>
    <button class="dilemma-play__reset" type="button" data-dilemma-reset>Choose another approach</button>
  </div>
</div>
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="ervaringsblok" body=dilemma_body %}

{% capture parts %}
{% include panels/value.html title="Realistic scenarios give context" text="Participants recognise the situations, responsibilities and tensions from their own workplace." %}
{% include panels/value.html title="Choices make trade-offs visible" text="Participants decide while several interests are at play at once. Not every choice is without drawbacks." %}
{% include panels/value.html title="Consequences and reflection give insight" text="Every decision changes what happens next. Participants see what their choice does and can reflect on it." %}
{% endcapture %}
{% capture what_body %}
<h2>What is Dilemma Storytelling?</h2>
<p class="sp-lead">Dilemma Storytelling is a form of scenario-based learning. Participants move through realistic scenarios and make decisions that change how the story continues. More about how we combine learning and play is on <a href="{{ '/play/' | relative_url }}">our method</a> page.</p>
<p class="sp-lead">The participant gets a recognisable role in a situation where several interests are at play. A problem arises that asks for a choice. Every decision has consequences for the story, the people involved and the goals that matter in that situation. Think of safety, quality, speed, cost, collaboration or customer satisfaction.</p>
<p class="sp-lead">Not every choice is simply right or wrong. Sometimes a decision improves one result while another goal comes under pressure. By making those consequences visible, participants discover how interests connect and why professional action asks for careful trade-offs.</p>
{% include panels/values.html label="Three parts of Dilemma Storytelling" items=parts %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="wat-is-dilemma-storytelling" body=what_body %}

{% capture route_steps %}
{% include panels/step.html num="1" title="Step into a recognisable situation" text="The participant gets a role in a realistic scenario, for example as a team lead, supervisor, service employee or technical specialist." %}
{% include panels/step.html num="2" title="Discover the tension" text="Interests collide. A customer asks for speed while quality is under pressure, or a procedure stands in the way of an urgent solution." %}
{% include panels/step.html num="3" title="Make a choice" text="Every option has its own trade-off. There is not always one answer that gives the best result on every point." %}
{% include panels/step.html num="4" title="Experience the consequences" text="The choice changes the story: in how the people involved respond, in the situation and in the goals that matter." %}
{% include panels/step.html num="5" title="Recognise new challenges" text="Earlier decisions open possibilities, but can also create limits. The participant has to look and act again." %}
{% include panels/step.html num="6" title="Reflect on the choices made" text="Which goals were reached, where did risks appear, and what other approach might have been possible?" %}
{% endcapture %}
{% capture route_body %}
<h2>How does Dilemma Storytelling work?</h2>
<p class="sp-lead sp-lead--center">A Dilemma Story takes the participant through recognisable situations in which decisions change what happens next. There is room to explore possibilities, and a clear frame so the learning stays focused.</p>
{% include panels/steps.html variant="flow" items=route_steps %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="hoe-het-werkt" body=route_body %}

{% capture goal_items %}
{% include panels/value.html title="Safety" text="Which risks appear, or are avoided, because of a particular decision?" %}
{% include panels/value.html title="Quality" text="What does the choice mean for the quality of the work or the service?" %}
{% include panels/value.html title="Speed" text="What effect does the decision have on progress or lead time?" %}
{% include panels/value.html title="Customer satisfaction" text="How do customers or other people involved experience the consequences of the action?" %}
{% include panels/value.html title="Collaboration" text="What effect does the choice have on trust, alignment and responsibilities in the team?" %}
{% endcapture %}
{% capture goals_body %}
<h2>Make the consequences of choices visible</h2>
<p class="sp-lead">In practice, choices often affect several goals at once. An organisation wants to work safely, deliver good quality, keep customers satisfied and use time and resources efficiently. Those goals can collide.</p>
<p class="sp-lead">That is why we link decisions inside a Dilemma Story to specific goals. The point is not to reach a high score, but to understand how choices and consequences connect.</p>
{% include panels/values.html label="Goals a choice can affect" items=goal_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="gevolgen" body=goals_body %}

{% capture benefit_items %}
{% include panels/value.html title="Stronger at weighing options" text="Participants practise situations in which several interests are at play at once. They look further than the first solution." %}
{% include panels/value.html title="Experiment safely" text="Choices can be explored without direct consequences for customers, colleagues or business processes. A weaker decision still yields insight." %}
{% include panels/value.html title="More insight into professional action" text="Trade-offs become discussable. Participants see which assumptions, priorities and habits shape what they do." %}
{% include panels/value.html title="A shared basis for reflection" text="When a team goes through the same dilemma, a shared experience appears for talking about differences in approach." %}
{% endcapture %}
{% capture why_body %}
<h2>Why choose Dilemma Storytelling?</h2>
<p class="sp-lead sp-lead--center">Dilemma Storytelling prepares employees for situations in which knowledge, behaviour and decision-making come together.</p>
{% include panels/values.html label="What Dilemma Storytelling delivers" columns="two" items=benefit_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" id="waarom" body=why_body %}

{% capture fit_items %}
{% include panels/value.html title="Safety and risk management" text="Practise decisions in which safety, progress and operational interests collide, also when the situation departs from the procedure." %}
{% include panels/value.html title="Leadership and management" text="Leaders explore trade-offs around collaboration, performance, workload and responsibility." %}
{% include panels/value.html title="Customer contact and service" text="Customer expectations, quality, resources and internal agreements do not line up by themselves." %}
{% include panels/value.html title="Supervision and enforcement" text="Professionals practise judging situations, estimating risks and weighing interests within their authority." %}
{% include panels/value.html title="Collaboration and organisational change" text="Make visible how decisions by different teams affect each other when priorities diverge." %}
{% include panels/value.html title="Professional and ethical dilemmas" text="Situations in which values and responsibilities collide, and participants need to be able to explain their choice." %}
{% endcapture %}
{% capture fit_body %}
<h2>Which situations suit Dilemma Storytelling?</h2>
<p class="sp-lead">Dilemma Storytelling is valuable when employees have to act while different interests, responsibilities or risks come together.</p>
{% include panels/values.html label="Situations for Dilemma Storytelling" columns="two" items=fit_items %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="situaties" body=fit_body %}

{% capture case_media %}
<p class="sp-lead">For TU Delft we developed The Disruption Game: an interactive Dilemma Story about a logistics disruption. Participants do not have all the information, have to choose and see how that choice plays out in safety, customer satisfaction and performance.</p>
<p class="sp-lead">There is not one answer that solves the disruption. The scenario shows what happens when you look for more information, give instructions or take another route, and which interests shift as a result.</p>
{% include panels/actions.html secondary_label="View The Disruption Game" secondary_href="/verhalen/maryland-disruption-game/" %}
{% endcapture %}
{% capture case_body %}
<h3>From practice</h3>
<h2>The Disruption Game</h2>
{% include panels/media.html src="/assets/images/verhalen/disruption-keuze.jpg" alt="A screen from The Disruption Game: two choices during a strike, with indicators for safety, customer satisfaction and performance" width="1024" height="459" ratio="1024 / 459" body=case_media %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="disruption-game" body=case_body %}

{% capture build_steps %}
{% include panels/step.html num="1" title="We explore the situation in practice" text="Which decisions are difficult, which interests are involved, and where do risks or recurring problems appear?" %}
{% include panels/step.html num="2" title="We set the learning goals" text="For example recognising interests, judging risks, explaining choices or understanding the consequences of a decision." %}
{% include panels/step.html num="3" title="We design the scenario" text="A recognisable story with roles, responsibilities and tensions. The participant has to decide in order to move forward." %}
{% include panels/step.html num="4" title="We design choices and consequences" text="We decide what consequences each choice has for the story, the people involved and the goals inside the scenario." %}
{% include panels/step.html num="5" title="We develop and test" text="We look at whether the situations are recognisable, the trade-offs have meaning and the feedback fits the learning goals." %}
{% include panels/step.html num="6" title="We make the learning experience available" text="Through an existing learning environment or through Prepo. Where it fits, choices give insight into how the training unfolds." %}
{% endcapture %}
{% capture build_body %}
<h2>How do we develop Dilemma Storytelling?</h2>
<p class="sp-lead sp-lead--center">A good Dilemma Story starts with a recognisable tension from practice. We explore where employees have to make difficult choices and which behaviour the organisation wants to strengthen.</p>
{% include panels/steps.html variant="flow" items=build_steps %}
{% endcapture %}
{% include panels/panel.html variant="paper" id="ontwikkeling" body=build_body %}

{% capture diff_body %}
<h2>Dilemma Storytelling and MicroGame Stories</h2>
<p class="sp-lead">Both learning formats combine storytelling with active participation. The starting point differs.</p>
<h3 class="sp-sub">MicroGame Stories: understand and apply knowledge</h3>
<p class="sp-lead"><a href="{{ '/diensten/microgame-stories/' | relative_url }}">MicroGame Stories</a> are aimed at transferring, practising and anchoring concrete knowledge. Participants follow a visual story and practise with short MicroGames around specific learning goals. That fits technical knowledge, procedures, onboarding and work instructions.</p>
<h3 class="sp-sub">Dilemma Storytelling: weigh interests and make decisions</h3>
<p class="sp-lead">Dilemma Storytelling focuses on situations in which several interests are at play at once and not every choice has one clearly right answer. Participants explore possible ways of acting and experience the consequences. That fits leadership, safety, customer contact, supervision and professional action.</p>
<p class="sp-lead">Which approach fits depends on the learning challenge. Sometimes employees need to learn to apply knowledge. Sometimes they need to get better at handling complex decisions. In some programmes the two forms complement each other. When the task itself is not yet sharp, we start with <a href="{{ '/diensten/game-thinking/' | relative_url }}">Game Thinking</a>: first get a clear view of behaviour, goals and what needs to change.</p>
{% include panels/actions.html secondary_label="Explore MicroGame Stories" secondary_href="/diensten/microgame-stories/" %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" id="verschil" body=diff_body %}

{% capture wider_body %}
<h2>Dilemma Storytelling as part of a learning programme</h2>
<p class="sp-lead">Dilemma Storytelling can be a standalone learning experience, or part of a wider training or change programme. For example as preparation for a workshop, as practice in a leadership programme, or as a deeper step after an existing e-learning module.</p>
<p class="sp-lead">Participants can explore a situation on their own beforehand. In a shared session the choices they made are discussed. Why did someone choose a particular approach? Which interests were given priority? How would a colleague judge the same situation?</p>
<p class="sp-lead">That way the interactive story is not only an individual learning experience, but also a starting point for dialogue and shared reflection. Distribution and management can run through an existing learning environment or through <a href="{{ '/prepo/' | relative_url }}">Prepo</a>.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="leertraject" body=wider_body %}

{% capture faq_body %}
<h2>Frequently asked questions about Dilemma Storytelling</h2>
<h3 class="sp-sub">What is Dilemma Storytelling?</h3>
<p class="sp-lead">An interactive form of learning in which participants move through realistic scenarios, make choices and experience the consequences of their decisions. It practises decision-making, weighing interests and reflection on professional action.</p>
<h3 class="sp-sub">How is it different from scenario-based learning?</h3>
<p class="sp-lead">Scenario-based learning is the broader approach in which participants learn from realistic situations. Dilemma Storytelling is Preludens' application of that, centred on a narrative structure, meaningful choices and visible consequences. The emphasis is on situations in which interests collide.</p>
<h3 class="sp-sub">Does every dilemma have a right or wrong answer?</h3>
<p class="sp-lead">No. With complex dilemmas there is not always one solution that gives the best result on every point. Participants explore which trade-offs are possible. Some decisions can still conflict with important rules, safety conditions or professional responsibilities.</p>
<h3 class="sp-sub">Can participants experience different outcomes?</h3>
<p class="sp-lead">Yes. Different choices can lead to other reactions, consequences or follow-up situations. Which branches are needed is decided from the learning goals and the complexity of the scenario.</p>
<h3 class="sp-sub">Can we use our own situations from practice?</h3>
<p class="sp-lead">Yes. Recognisable situations from the organisation are the starting point. Together with subject experts we explore which dilemmas lend themselves to an interactive learning experience.</p>
<h3 class="sp-sub">Can we use Dilemma Storytelling for teams?</h3>
<p class="sp-lead">Yes. The learning experience can be done individually and then become the basis for shared reflection. That makes different perspectives inside a team discussable.</p>
<h3 class="sp-sub">Can choices and results be made visible?</h3>
<p class="sp-lead">Choices can be linked to goals such as safety, quality, speed and customer satisfaction. Which information is recorded depends on the technical solution and the agreements about data use.</p>
<h3 class="sp-sub">What does developing Dilemma Storytelling cost?</h3>
<p class="sp-lead">The cost depends on the number of scenarios, the complexity of the choices, the number of storylines and the desired design. In a first exploration we look at which scale fits the learning goals and the resources.</p>
<h3 class="sp-sub">Can we start small?</h3>
<p class="sp-lead">Yes. One bounded dilemma can be a first exploration. That shows whether the situation is recognisable, which choices have meaning and how the consequences are best made visible. From that experience a fuller scenario can grow.</p>
{% endcapture %}
{% include panels/panel.html variant="paper" id="vragen" body=faq_body %}

{% capture cta_left %}Are there situations in your organisation where employees regularly have to make difficult decisions? Situations in which safety, quality, speed, customer satisfaction or collaboration collide?{% endcapture %}
{% capture cta_right %}In a GameStorm we explore the main tensions, the audience and the behaviour you want. That gives a first direction for a Dilemma Story.{% endcapture %}
{% include panels/cta.html kicker="Dilemma Storytelling" title="Make complex choices discussable and learnable" left=cta_left right=cta_right stack=true primary_label="Plan a GameStorm" primary_href="/gamestorm/" secondary_label="Explore our services" secondary_href="/diensten/" %}

{% include panels/footer-reveal.html %}
</div>

<script>
(function () {
  var root = document.querySelector("[data-dilemma]");
  if (!root) return;
  var choices = root.querySelector("[data-dilemma-choices]");
  var result = root.querySelector("[data-dilemma-result]");
  var lead = root.querySelector("[data-dilemma-lead]");
  var outcomes = {
    stil: {
      lead: "Work stops until the check is finished. The risk stays under control, and the schedule moves.",
      veiligheid: "The check is completed before the team continues.",
      kwaliteit: "The work then continues on a checked basis.",
      snelheid: "Delivery today is no longer possible.",
      klant: "The customer hears a clear reason, and also that the deadline will not be met."
    },
    door: {
      lead: "The team keeps working to meet the deadline. Delivery stays in sight, and so does the open risk.",
      veiligheid: "The check is not finished. A risk remains that can come back later.",
      kwaliteit: "The work may have to be redone if the check still turns something up.",
      snelheid: "The customer can expect delivery today.",
      klant: "The customer gets what was promised, with an uncertainty that has not yet been removed."
    },
    samen: {
      lead: "You look with the team for a route that makes part of the work possible without ignoring the open risk.",
      veiligheid: "You limit the work to what can still be done responsibly, until the check is complete.",
      kwaliteit: "The solution depends on what the team can still do carefully.",
      snelheid: "Aligning takes time. Part of the job might still be finished today.",
      klant: "The customer hears what is and is not possible, instead of a yes or a no."
    }
  };

  function show(key) {
    var outcome = outcomes[key];
    if (!outcome) return;
    lead.textContent = outcome.lead;
    ["veiligheid", "kwaliteit", "snelheid", "klant"].forEach(function (name) {
      root.querySelector('[data-kpi="' + name + '"]').textContent = outcome[name];
    });
    choices.hidden = true;
    result.hidden = false;
  }

  choices.addEventListener("click", function (event) {
    var button = event.target.closest("[data-choice]");
    if (!button) return;
    show(button.getAttribute("data-choice"));
  });

  root.querySelector("[data-dilemma-reset]").addEventListener("click", function () {
    result.hidden = true;
    choices.hidden = false;
  });
})();
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What is Dilemma Storytelling?", "acceptedAnswer": {"@type": "Answer", "text": "An interactive form of learning in which participants move through realistic scenarios, make choices and experience the consequences of their decisions."}},
    {"@type": "Question", "name": "How is it different from scenario-based learning?", "acceptedAnswer": {"@type": "Answer", "text": "Scenario-based learning is the broader approach in which participants learn from realistic situations. Dilemma Storytelling is Preludens' application of that, centred on a story, meaningful choices and visible consequences."}},
    {"@type": "Question", "name": "Does every dilemma have a right or wrong answer?", "acceptedAnswer": {"@type": "Answer", "text": "No. With complex dilemmas there is not always one solution that gives the best result on every point. Some decisions can still conflict with rules, safety or professional responsibilities."}},
    {"@type": "Question", "name": "Can participants experience different outcomes?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Different choices can lead to other reactions, consequences or follow-up situations."}},
    {"@type": "Question", "name": "Can we use our own situations from practice?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Recognisable situations from the organisation are the starting point."}},
    {"@type": "Question", "name": "Can we use Dilemma Storytelling for teams?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The learning experience can be done individually and then become the basis for shared reflection."}},
    {"@type": "Question", "name": "Can choices and results be made visible?", "acceptedAnswer": {"@type": "Answer", "text": "Choices can be linked to goals such as safety, quality, speed and customer satisfaction. What is recorded depends on the technical solution and the agreements about data use."}},
    {"@type": "Question", "name": "What does developing Dilemma Storytelling cost?", "acceptedAnswer": {"@type": "Answer", "text": "The cost depends on the number of scenarios, the complexity of the choices, the number of storylines and the design."}},
    {"@type": "Question", "name": "Can we start small?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. One bounded dilemma can be a first exploration."}}
  ]
}
</script>
