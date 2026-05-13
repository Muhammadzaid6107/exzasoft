// components/CTA.jsx
import React from 'react';

const CTA = () => {
  return (
    <section className="cta-section">
      <h2>Ready to Build Something <br />Extraordinary?</h2>
      <p>Let's turn your vision into a digital experience that stands out and delivers results.</p>
      <div className="hero-actions">
        <a href="#contact" className="btn-white">Start Your Project →</a>
        <a href="tel:+1234567890" className="btn-white-outline">📞 Call Us Now</a>
      </div>
    </section>
  );
};

export default CTA;