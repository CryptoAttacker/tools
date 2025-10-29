---
layout: page
title: Contact Us
permalink: /contact/
description: Get in touch with the CryptoAttacker Tools team.
---

## Get in Touch

We'd love to hear from you! Whether you have questions, suggestions, or want to collaborate, please don't hesitate to reach out.

### Contact Information

- **Email**: [{{ site.email }}](mailto:{{ site.email }})
- **GitHub**: [@{{ site.social.github }}](https://github.com/{{ site.social.github }})
{% if site.social.twitter %}
- **Twitter**: [@{{ site.social.twitter }}](https://twitter.com/{{ site.social.twitter }})
{% endif %}

### Send Us a Message

<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" id="name" name="name" required aria-required="true">
  </div>

  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" required aria-required="true">
  </div>

  <div class="form-group">
    <label for="subject">Subject *</label>
    <input type="text" id="subject" name="subject" required aria-required="true">
  </div>

  <div class="form-group">
    <label for="message">Message *</label>
    <textarea id="message" name="message" required aria-required="true"></textarea>
  </div>

  <button type="submit">Send Message</button>
</form>

<p style="margin-top: 2rem; font-size: 0.9rem; opacity: 0.8;">
  <strong>Note:</strong> To enable the contact form, you'll need to:
  <ol>
    <li>Sign up for a free account at <a href="https://formspree.io">Formspree.io</a></li>
    <li>Create a new form and get your Form ID</li>
    <li>Replace <code>YOUR_FORM_ID</code> in the form action with your actual Form ID</li>
  </ol>
  Alternatively, you can integrate with other form services like Netlify Forms, Getform, or FormSubmit.
</p>

## Office Hours

We're available for discussions and consultations:

- **Monday - Friday**: 9:00 AM - 5:00 PM (UTC)
- **Response Time**: We typically respond within 24-48 hours

## Security Disclosures

If you've discovered a security vulnerability in any of our projects, please report it responsibly:

1. **Do not** disclose the vulnerability publicly
2. Email us at [{{ site.email }}](mailto:{{ site.email }}) with details
3. Include steps to reproduce the issue
4. Allow us time to address the vulnerability before public disclosure

We take security seriously and appreciate your responsible disclosure.
