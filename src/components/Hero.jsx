// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-grid-pattern"></div>
      <div className="hero-content">
        <div className="hero-badge"><span className="dot"></span> Digital Innovation Studio</div>
        <h1>We Build <span className="accent">Digital</span><br />Experiences That<br />Drive Results</h1>
        <p className="hero-sub">From pixel-perfect designs to powerful web solutions ExzaSoft transforms your vision into reality with cutting-edge technology and creative excellence.</p>
        <div className="hero-actions">
          <a href="#services" className="btn-primary">Explore Services <span>→</span></a>
          <a href="#portfolio" className="btn-outline">View Our Work</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><div className="stat-num">150<span>+</span></div><div className="stat-label">Projects Delivered</div></div>
          <div className="stat"><div className="stat-num">98<span>%</span></div><div className="stat-label">Client Satisfaction</div></div>
          <div className="stat"><div className="stat-num">3<span>+</span></div><div className="stat-label">Years Experience</div></div>
          <div className="stat"><div className="stat-num">40<span>+</span></div><div className="stat-label">Happy Clients</div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;