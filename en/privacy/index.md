---
layout: default
lang: en
title: Privacy statement
description: Which personal data Preludens processes when you visit the website, fill in the contact form or book an introduction, why, and what your rights are.
body_class: page-panels page-privacy
permalink: /privacy/
---

{%- comment -%}
  Privacy statement, English version. It follows privacy/index.md paragraph
  by paragraph: change them together. The Dutch version is leading.
{%- endcomment -%}

<div class="panel-stack">
{% include panels/clips.html %}

{% capture hero_title %}How Preludens handles your <span class="hl">data</span>{% endcapture %}
{% capture hero_lead %}This statement explains which personal data Preludens B.V. processes when you visit this website, fill in the contact form or book an introduction. It also covers why we do so, who else has access, how long we keep it and what you can do if you want it handled differently.{% endcapture %}
{% include panels/hero.html kicker="Privacy" title=hero_title lead=hero_lead lead2="Last updated on 11 November 2026." %}

{% capture short_items %}
{% include panels/check.html text="We only measure with cookies if you consent to it. You can change your choice at any time." %}
{% include panels/check.html text="What you enter in the contact form goes to HubSpot, in HubSpot's European environment." %}
{% include panels/check.html text="We use your contact details to answer your question and follow up on the conversation." %}
{% include panels/check.html text="You can view, correct or delete your data by emailing info@preludens.nl." %}
{% endcapture %}
{% capture short_body %}
<h2>In short</h2>
{% include panels/checklist.html label="The privacy statement in short" columns="two" items=short_items %}
{% endcapture %}
{% include panels/panel.html variant="mist" align="left" body=short_body %}

<section class="panel panel--paper">
  <div class="panel__inner">
    <div class="privacy">
      <nav class="privacy__toc" aria-labelledby="privacy-toc-title">
        <p class="privacy__toc-title" id="privacy-toc-title">On this page</p>
        <ol>
          <li><a href="#who">Who is responsible</a></li>
          <li><a href="#contact">When you get in touch</a></li>
          <li><a href="#visit">When you visit the website</a></li>
          <li><a href="#cookies">Which cookies we use</a></li>
          <li><a href="#sharing">Who else sees your data</a></li>
          <li><a href="#outside-eu">Data outside the EU</a></li>
          <li><a href="#retention">How long we keep data</a></li>
          <li><a href="#security">How we protect data</a></li>
          <li><a href="#rights">Your rights</a></li>
          <li><a href="#changes">When this statement changes</a></li>
        </ol>
      </nav>

      <div class="privacy__body">

        <section class="privacy__section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">Who is responsible</h2>
          <p>Preludens B.V. is the controller of the personal data described in this statement.</p>
          <dl class="privacy__facts">
            <div><dt>Company</dt><dd>Preludens B.V.</dd></div>
            <div><dt>Address</dt><dd>Heemskerkstraat 36, 2613 AL Delft, the Netherlands</dd></div>
            <div><dt>Chamber of Commerce</dt><dd>99042827</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:info@preludens.nl">info@preludens.nl</a></dd></div>
            <div><dt>Phone</dt><dd><a href="tel:+31152024047">+31 15 202 404 7</a></dd></div>
          </dl>
          <p>Preludens does not have a data protection officer. We answer privacy questions ourselves, at <a href="mailto:info@preludens.nl">info@preludens.nl</a>.</p>
        </section>

        <section class="privacy__section" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">When you get in touch</h2>

          <h3>Through the contact form</h3>
          <p>The form asks for your name, your organisation, an email address or phone number and a short description of your question. When you send it, that data goes to HubSpot, the system we use to keep track of contacts. The page on which you filled in the form is sent along, so we know what your question is about.</p>
          <p>If you have consented to statistics, the HubSpot cookie in your browser is sent along as well. It lets HubSpot see which pages led you to the form. Without that consent there is no cookie, and only the form itself is sent.</p>
          <p>As soon as the form comes in, we get a notification in Microsoft Teams or by email. We will get in touch within one working day.</p>

          <h3>Through the calendar for an introduction</h3>
          <p>On some pages you can pick a time for an online introduction yourself. That calendar is Microsoft Bookings, shown inside the page. What you enter there, such as your name and email address, ends up in our Microsoft 365 environment, together with the appointment. To load the calendar, your browser connects to Microsoft.</p>

          <h3>By email or phone</h3>
          <p>If you email or call us directly, we use your details and what you tell us to answer your question.</p>

          <h3>Why we are allowed to do this</h3>
          <p>You ask us to get in touch. If it concerns a possible assignment, your data is needed for the steps before we enter into an agreement. If it concerns something else, answering the questions we receive is our legitimate interest.</p>
        </section>

        <section class="privacy__section" id="visit" aria-labelledby="visit-title">
          <h2 id="visit-title">When you visit the website</h2>

          <h3>Always, even without consent</h3>
          <p>To show a page, your browser has to connect to the servers that deliver it. Those servers see technical data such as your IP address and the type of browser. Three parties are involved:</p>
          <ul>
            <li>GitHub Pages hosts the website. GitHub uses that data to deliver and secure the site.</li>
            <li>Google Fonts supplies the typefaces. Google sees your IP address, but sets no cookies.</li>
            <li>Google Tag Manager loads the measurement described below. Without your consent it only sends a signal without a cookie and without identification, saying that a page was viewed and which cookie choice was made. This lets us see roughly how many visits the site gets, without following anyone.</li>
          </ul>
          <p>We need this data to make the site work and to know whether it is used. That is our legitimate interest.</p>

          <h3>With consent for statistics</h3>
          <p>If you consent to statistics, three services measure how the site is used. We use that to make pages clearer and to see which topics people look for.</p>
          <ul>
            <li>Google Analytics 4 measures page views, how far you scroll, clicks on buttons and on email and phone links, video plays, opening a demo, and starting and sending a form. Google Signals is off, we do not share data with Google for its own purposes, and we leave out traffic from our office.</li>
            <li>Microsoft Clarity records visits and makes heatmaps, which show where people click, how far they scroll and where they drop off. From that we can see where a page is unclear.</li>
            <li>HubSpot recognises a returning visitor. If you later fill in the contact form, HubSpot links your earlier visits to your question, so we know what you have already read.</li>
          </ul>

          <h3>With consent for marketing</h3>
          <p>When we advertise through Google Ads, the site measures, with your consent for marketing, whether a click on an advert leads to a completed form or a booked appointment. That tells us which adverts work. Without that consent Google sets no advertising cookies.</p>

          <h3>Changing your choice</h3>
          <p>We only use statistics and marketing with your consent. You can withdraw or change it at any time with the <strong>Cookie preferences</strong> button at the bottom of every page. What was measured before you withdrew your consent stays until its retention period ends.</p>
        </section>

        <section class="privacy__section" id="cookies" aria-labelledby="cookies-title">
          <h2 id="cookies-title">Which cookies we use</h2>
          <p>A cookie is a small file a website stores in your browser. The language of the site follows from the web address; no cookie is needed for that. These are the cookies the site can set. The services may occasionally add or rename one; the retention periods are those of the supplier.</p>
          <div class="privacy__table-wrap">
            <table class="privacy__table">
              <thead>
                <tr><th scope="col">Cookie</th><th scope="col">From</th><th scope="col">Purpose</th><th scope="col">Kept for</th></tr>
              </thead>
              <tbody>
                <tr class="privacy__table-group"><th scope="rowgroup" colspan="4">Necessary</th></tr>
                <tr><td data-label="Cookie"><code>preludens_consent</code></td><td data-label="From">Preludens</td><td data-label="Purpose">Remembers your cookie choice</td><td data-label="Kept for">6 months</td></tr>
                <tr class="privacy__table-group"><th scope="rowgroup" colspan="4">Statistics</th></tr>
                <tr><td data-label="Cookie"><span><code>_ga</code>, <code>_ga_*</code></span></td><td data-label="From">Google Analytics</td><td data-label="Purpose">Recognises a returning browser and keeps track of a visit</td><td data-label="Kept for">2 years</td></tr>
                <tr><td data-label="Cookie"><code>_clck</code></td><td data-label="From">Microsoft Clarity</td><td data-label="Purpose">Recognises a returning browser</td><td data-label="Kept for">1 year</td></tr>
                <tr><td data-label="Cookie"><code>_clsk</code></td><td data-label="From">Microsoft Clarity</td><td data-label="Purpose">Combines page views into one recording</td><td data-label="Kept for">1 day</td></tr>
                <tr><td data-label="Cookie"><code>hubspotutk</code></td><td data-label="From">HubSpot</td><td data-label="Purpose">Links earlier visits to a completed form</td><td data-label="Kept for">6 months</td></tr>
                <tr><td data-label="Cookie"><code>__hstc</code></td><td data-label="From">HubSpot</td><td data-label="Purpose">Keeps track of visits and their times</td><td data-label="Kept for">6 months</td></tr>
                <tr><td data-label="Cookie"><code>__hssc</code></td><td data-label="From">HubSpot</td><td data-label="Purpose">Counts page views within one visit</td><td data-label="Kept for">30 minutes</td></tr>
                <tr><td data-label="Cookie"><code>__hssrc</code></td><td data-label="From">HubSpot</td><td data-label="Purpose">Detects whether the browser was restarted</td><td data-label="Kept for">Until you close the browser</td></tr>
                <tr class="privacy__table-group"><th scope="rowgroup" colspan="4">Marketing</th></tr>
                <tr><td data-label="Cookie"><code>_gcl_au</code></td><td data-label="From">Google Ads</td><td data-label="Purpose">Measures whether an advert click leads to contact</td><td data-label="Kept for">90 days</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="privacy__section" id="sharing" aria-labelledby="sharing-title">
          <h2 id="sharing-title">Who else sees your data</h2>
          <p>We work with a few services that process data on our behalf. We have data processing agreements with Google, Microsoft and HubSpot. They state that these companies only use your data for us.</p>
          <ul>
            <li>HubSpot for the contact form, our customer system and the measurement of returning visitors. Our account is in HubSpot's European environment.</li>
            <li>Google for Tag Manager, Analytics, Ads and the typefaces.</li>
            <li>Microsoft for Clarity, and for notifications, email and appointments in Teams, Outlook and Bookings.</li>
            <li>GitHub for hosting the website.</li>
          </ul>
          <p>We do not sell your data. We only pass it on to others when the law requires us to.</p>
        </section>

        <section class="privacy__section" id="outside-eu" aria-labelledby="outside-eu-title">
          <h2 id="outside-eu-title">Data outside the European Union</h2>
          <p>Google, Microsoft, HubSpot and GitHub are American companies. Even when data is stored in Europe, it may therefore be processed in the United States. These companies participate in the EU-U.S. Data Privacy Framework. The European Commission has decided that data transferred under that framework is adequately protected.</p>
        </section>

        <section class="privacy__section" id="retention" aria-labelledby="retention-title">
          <h2 id="retention-title">How long we keep data</h2>
          <ul>
            <li>Your contact details and your question are kept for as long as needed to handle your question and follow up on the conversation.<!-- TODO [RETENTION]: Jan-Willem has yet to set the retention period for leads in HubSpot. Replace this sentence with the fixed period, in privacy/index.md too. --></li>
            <li>If you become a client, we keep the data that ends up in our accounts for seven years, because the law requires it.</li>
            <li>Google Analytics keeps data linked to a visitor for 14 months.</li>
            <li>Cookies expire after the period in the table above.</li>
          </ul>
        </section>

        <section class="privacy__section" id="security" aria-labelledby="security-title">
          <h2 id="security-title">How we protect data</h2>
          <p>The website has no server or database of its own that holds personal data. The contact form goes straight to HubSpot over an encrypted connection. Services that need consent only load after you have given it.</p>
        </section>

        <section class="privacy__section" id="rights" aria-labelledby="rights-title">
          <h2 id="rights-title">Your rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>see which data we hold about you;</li>
            <li>have incorrect data corrected;</li>
            <li>have your data deleted;</li>
            <li>have the use of your data restricted;</li>
            <li>object to its use on the basis of our legitimate interest;</li>
            <li>receive your data in a common file format, to pass it on to someone else;</li>
            <li>withdraw your consent, for cookies through Cookie preferences at the bottom of the page.</li>
          </ul>
          <p>Send your request to <a href="mailto:info@preludens.nl">info@preludens.nl</a>. We respond within one month. Sometimes we first ask you to confirm who you are, so we do not give data to the wrong person. You do not need to send a copy of your ID for that.</p>
          <p>If you are not satisfied with how we handle your data or your request, please let us know first. You can also file a complaint with the Dutch Data Protection Authority, the <a href="https://www.autoriteitpersoonsgegevens.nl/en" rel="noopener">Autoriteit Persoonsgegevens</a>.</p>
        </section>

        <section class="privacy__section" id="changes" aria-labelledby="changes-title">
          <h2 id="changes-title">When this statement changes</h2>
          <p>If we start using data differently, or add a service, we update this page. The date of the last change is at the top.</p>
        </section>

      </div>
    </div>
  </div>
</section>

{% capture questions_body %}
<h2>Questions about your data?</h2>
<p class="sp-lead">Email info@preludens.nl or call +31&nbsp;15&nbsp;202&nbsp;404&nbsp;7. You can also change your cookie choice here.</p>
<div class="sp-actions">
  <a class="btn btn-primary" href="mailto:info@preludens.nl">Email info@preludens.nl</a>
  <button class="btn btn-secondary privacy__revoke" type="button" data-consent-revoke>{{ site.data.en.consent.revoke }}</button>
</div>
{% endcapture %}
{% include panels/panel.html variant="harbor" align="left" body=questions_body %}

{% include panels/footer-reveal.html %}

</div>
