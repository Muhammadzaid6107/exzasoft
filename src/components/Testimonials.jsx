// components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { stars: '★★★★★', text: '"ExzaSoft redesigned our entire Shopify store and our conversion rate jumped by 40% within the first month. Exceptional work and communication throughout."', name: 'Ahmed Khan', role: 'CEO, LuxeWear PK', avatar: 'AK', avatarClass: 'av1' },
    { stars: '★★★★★', text: '"The team delivered a beautiful, fast WordPress site that ranked on Google\'s first page within 3 months. Their digital marketing strategy is genuinely outstanding."', name: 'Sarah Rahman', role: 'Founder, GreenGrow Agency', avatar: 'SR', avatarClass: 'av2' },
    { stars: '★★★★★', text: '"Professional, creative, and always on time. ExzaSoft understood our brand instantly and delivered a UI/UX that our users absolutely love. Highly recommend."', name: 'Maria Javed', role: 'Product Manager, FinTrack', avatar: 'MJ', avatarClass: 'av3' }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="reveal" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
        <div className="section-label">Client Love</div>
        <h2>What Our <span className="accent">Clients</span> Say</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>Real results. Real feedback. From real businesses we've helped grow.</p>
      </div>
      <div className="testi-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testi-card reveal">
            <div className="testi-stars">{t.stars}</div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-author">
              <div className={`testi-avatar ${t.avatarClass}`}>{t.avatar}</div>
              <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;