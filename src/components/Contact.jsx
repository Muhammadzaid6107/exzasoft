import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_e9bz4tx',     // 👈 apna Service ID
      'template_u2bv6nr',  // 👈 tumhara template ID (image se liya)
      e.target,
      '5lWmix0efNlIfuG-h'    // 👈 apni public key
    )
    .then(() => {
      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 3000);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="reveal">
        <div className="section-label">Get in Touch</div>
        <h2>Let's Talk About<br /><span className="accent">Your Project</span></h2>
        <p className="section-subtitle">Ready to start? Fill in the form and we'll get back to you within 24 hours.</p>

        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18a2 2 0 012-2h3a2 2 0 012 1.72c.13 1 .4 1.97.76 2.9a2 2 0 01-.45 2.11L6.09 6.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.93.36 1.9.63 2.9.76A2 2 0 0122 13.92z"/></svg>
            </div>
            <div><h4>Phone</h4><p>+92 330 0237697</p></div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div><h4>Email</h4><p>exzasoft3@gmail.com</p></div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div><h4>Location</h4><p>Karachi, Pakistan</p></div>
          </div>
        </div>
      </div>

      <form className="contact-form reveal" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="first_name" placeholder="Ali" required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="last_name" placeholder="Hassan" required />
          </div>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" placeholder="ali@company.com" required />
        </div>

        <div className="form-group">
          <label>Service Needed</label>
          <select name="service">
            <option value="">Select a service...</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Digital Marketing</option>
            <option>Graphic Design</option>
            <option>Web Design</option>
            <option>WordPress Development</option>
            <option>Shopify Development</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tell Us About Your Project</label>
          <textarea name="message" placeholder="Describe your project, goals, timeline, and budget..."></textarea>
        </div>

        <button 
          type="submit" 
          className="form-submit"
          style={messageSent ? { background: '#059669' } : {}}
        >
          {messageSent ? 'Message Sent! ✓' : 'Send Message →'}
        </button>
      </form>
    </section>
  );
};

export default Contact;