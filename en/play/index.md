---
layout: default
lang: en
title: Play
description: Play creates the space to learn — safe learning experiences where teams can explore, try and choose again.
body_class: page-panels
permalink: /play/
---

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}Play creates the space to learn{% endcapture %}
{% capture hero_lead %}When people are mostly focused on avoiding mistakes and limiting risk, there is little room to practise new behaviour. Play breaks that pattern.{% endcapture %}
{% capture hero_lead2 %}Preludens creates safe learning experiences where teams can explore, try and choose again. With clear rules, recognisable situations and immediate feedback, engagement, intrinsic motivation and the confidence to act more strongly in practice all grow.{% endcapture %}
{% capture hero_actions %}
{% include panels/actions.html hero_cta=true primary_label="Get in touch →" primary_href="/contact/" secondary_label="Our services" secondary_href="/diensten/" %}
{% endcapture %}
{% include panels/hero.html kicker="Play" title=hero_title lead=hero_lead lead2=hero_lead2 actions=hero_actions figure_src="/assets/images/hero/play-hero.jpg" figure_alt="An open world in which someone chooses their own route" figure_href="/gamestorm/" figure_caption="Room to try, without real damage." %}

{% capture circle_main %}
<p class="sp-lead">In practice, teams make daily choices that affect safety, production, quality or efficiency. That is exactly why it is hard to practise new knowledge there directly. Pressure is high, mistakes have consequences and there is little room to pause, try or choose again.</p>
<p class="sp-lead">As a result, people often stay in a practical survival mode: avoid mistakes, limit risk and move quickly to the next task. Understandable, but not always helpful when they need to learn something new or develop different behaviour.</p>
<p class="sp-lead">The alternative is often a passive learning form: reading theory, following instructions and taking a test afterwards. That can transfer information, but it does not always help people act more strongly when the situation becomes complex.</p>
<p class="sp-lead">At Preludens we use Play to create that practice space. We design a safe learning space with clear rules, recognisable situations, focused feedback and enough freedom to explore, try and choose again.</p>
{% endcapture %}
{% capture circle_checks %}
{% include panels/check.html text="People step briefly out of daily pressure." %}
{% include panels/check.html text="They stay close to reality." %}
{% include panels/check.html text="Mistakes are allowed, without real damage." %}
{% include panels/check.html text="Learning becomes active: discover, act, reflect." %}
{% endcapture %}
{% capture circle_aside %}
{% include panels/checklist.html label="What the practice space delivers" items=circle_checks %}
{% endcapture %}
{% capture circle_body %}
<h3>Get your team out of survival mode</h3>
<h2>Play: the magic circle of learning</h2>
{% include panels/aside.html main=circle_main aside=circle_aside %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=circle_body %}

{% capture huizinga_copy %}
<h3>Homo Ludens: the playing human</h3>
<h2>Play according to Huizinga</h2>
<p class="sp-lead">Johan Huizinga saw play not as distraction, but as a fundamental way people give meaning to behaviour, rules and collaboration. Play has its own space. There are clear rules, a beginning and an end. Participants temporarily step out of everyday reality, but take the experience seriously.</p>
<p class="sp-lead">That combination makes Play powerful for learning. It offers freedom to try, structure to keep direction and safety to learn from what happens. Play makes learning not only more active, but also safer, more recognisable and easier to follow.</p>
{% endcapture %}
{% capture huizinga_body %}
{% include panels/media.html src="/assets/images/play/magische-cirkel.jpg" webp="/assets/images/play/magische-cirkel.webp" alt="An open world with a subtle path of light — the magic circle of learning" body=huizinga_copy %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=huizinga_body %}

{% capture value_items %}
{% include panels/value.html title="Safe experimentation" text="Play makes it possible to practise without immediate consequences in the real world. Participants try choices, make mistakes and discover what works — without fear of getting it wrong." %}
{% include panels/value.html title="Active engagement" text="In Play a passive stance is hard to maintain. Participants look, choose, respond and act. They become part of the experience instead of spectators of the content." %}
{% include panels/value.html title="Recognisable context" text="With storytelling, realistic scenarios and MicroGames we place knowledge in situations that feel familiar to the work. That is how information gains meaning." %}
{% include panels/value.html title="Visibility of growth" text="Play makes behaviour visible. Choices, progress, scores and feedback show where participants are strong and where they get stuck. Those insights help improve learning experiences." %}
{% endcapture %}
{% capture value_body %}
<h3>What it delivers</h3>
<h2>What Play delivers</h2>
{% include panels/values.html label="What Play delivers" columns="two" items=value_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=value_body %}

{% capture daily_main %}
<p class="sp-lead">We practise conversations before they happen. We turn repeating tasks into small challenges. We try something first in a safe setting before we really need to be able to do it. We learn by doing, repeating and discovering what works.</p>
<p class="sp-lead">In organisations the same happens. Teams need to deal with new rules, processes, responsibilities and choices. Explanation alone is often not enough. People need to explore what a situation asks and experience what their actions cause.</p>
<p class="sp-lead">Play helps design that practice space deliberately. It makes learning lighter, but not less serious. Precisely because people are allowed to try, they become more active, sharper and more confident when it matters in practice.</p>
{% endcapture %}
{% capture daily_quote_text %}Play is an inseparable aspect of human culture. The spirit of playful competition is, as a social impulse, older than culture itself and pervades all life like a veritable ferment.{% endcapture %}
{% capture daily_aside %}
{% include panels/quote.html variant="aside" text=daily_quote_text cite="Johan Huizinga — Homo Ludens" %}
{% endcapture %}
{% capture daily_body %}
<h3>We use Play more often than we think</h3>
<h2>Why Play also belongs in everyday work</h2>
{% include panels/aside.html main=daily_main aside=daily_aside %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=daily_body %}

{% capture find_left %}We do not add play afterwards as a layer over the content. We start with reality. In every challenge, game elements are already hidden: goals, rules, choices, tension, feedback and consequences. An employee needs to recognise something. A team needs to weigh something. An organisation wants to strengthen certain behaviour.{% endcapture %}
{% capture find_right %}We call that Find the Game. We look for the game already present in practice and make it visible. Then we translate that structure into a learning experience with stories, MicroGames, dilemmas or other play forms. That keeps Play recognisable, relevant and directly connected to the situations in which people will soon need to act more strongly.{% endcapture %}
{% capture find_body %}
<h3>Find the Game</h3>
<h2>How Preludens uses Play</h2>
{% include panels/split.html left=find_left right=find_right %}
<p class="sp-lead sp-lead--center">Not a loose game. Not a trick to make learning more fun. But a carefully designed learning route in which people practise with choices, knowledge and behaviour that matter.</p>
{% include panels/actions.html secondary_label="Read the Play blog" secondary_href="/play/blog/" secondary2_label="Play in practice" secondary2_href="/play/in-de-praktijk/" %}
{% endcapture %}
{% include panels/panel.html variant="mist" body=find_body %}

{% capture daan_quote_text %}Every time when I work with a customer, somewhere in the process, sooner or later, I see a change in their eyes and posture. As if a light has been switched on. That is when I know they have found their game.{% endcapture %}
{% capture daan_body %}
{% include panels/quote.html text=daan_quote_text cite="Find the Game — Daan Groen" %}
{% endcapture %}
{% include panels/panel.html variant="paper" body=daan_body %}

{% capture cta_left %}A strong Play approach starts with a sharp exploration. In a GameStorm we examine your learning challenge, audience and context. We map which knowledge matters, which behaviour needs to change and where tension arises in practice. Then we look for the game mechanisms already hidden in your challenge.{% endcapture %}
{% include panels/cta.html kicker="Start with a GameStorm" title="Discover the game in your challenge" left=cta_left stack=true primary_label="Start with a GameStorm" primary_href="/gamestorm/" secondary_label="Get in touch" secondary_href="/contact/" %}

{% include panels/footer-reveal.html %}

</div>
