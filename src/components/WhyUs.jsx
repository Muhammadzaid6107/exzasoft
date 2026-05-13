// components/WhyUs.jsx
import React from 'react';

const WhyUs = () => {
  return (
    <section id="about" style={{ padding: 0 }}>
      <div className="why-section">
        <div className="why-visual reveal">
          <div className="why-card">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <h4>Trusted by Growing Brands</h4>
              <p>We partner with startups and established businesses alike to deliver measurable digital growth.</p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div>
              <h4>Performance-First Approach</h4>
              <p>Every solution we build is optimised for speed, SEO, and conversion — not just aesthetics.</p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <h4>On-Time Delivery Guarantee</h4>
              <p>Transparent timelines and agile project management mean you always know what's happening.</p>
            </div>
          </div>
        </div>
        <div className="reveal">
          <div className="section-label">Why ExzaSoft</div>
          <h2>Built on <span className="accent">Quality,</span><br />Driven by Results</h2>
          <p className="section-subtitle">We don't just deliver projects — we build long-term partnerships focused on your success.</p>
          <div className="why-points">
            <div className="why-point">
              <div className="why-point-num">01</div>
              <div>
                <h4>Expert Team</h4>
                <p>Senior designers and developers with deep expertise across the full digital spectrum.</p>
              </div>
            </div>
            <div className="why-point">
              <div className="why-point-num">02</div>
              <div>
                <h4>Tailored Solutions</h4>
                <p>No templates, no shortcuts. Every project is custom-crafted for your specific goals and audience.</p>
              </div>
            </div>
            <div className="why-point">
              <div className="why-point-num">03</div>
              <div>
                <h4>Transparent Communication</h4>
                <p>Regular updates, clear reporting, and a dedicated point of contact throughout your project.</p>
              </div>
            </div>
            <div className="why-point">
              <div className="why-point-num">04</div>
              <div>
                <h4>Ongoing Support</h4>
                <p>Post-launch support, maintenance, and growth consulting — we're with you for the long haul.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;