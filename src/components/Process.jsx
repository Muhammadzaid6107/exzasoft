// components/Process.jsx
import React from 'react';

const Process = () => {
  const steps = [
    { num: '01', title: 'Discovery & Strategy', desc: 'We deep-dive into your goals, audience, and competition to build a solid strategic foundation.' },
    { num: '02', title: 'Design & Prototype', desc: 'Wireframes, mood boards, and interactive prototypes bring your vision to life before a line of code is written.' },
    { num: '03', title: 'Develop & Test', desc: 'Clean, scalable code with rigorous QA testing across devices, browsers, and performance benchmarks.' },
    { num: '04', title: 'Launch & Grow', desc: 'Smooth deployment, performance monitoring, and ongoing optimisation to keep you ahead of the curve.' }
  ];

  return (
    <section className="process-section" id="process">
      <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <div className="section-label">How We Work</div>
        <h2>Our <span className="accent">Proven</span> Process</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>A structured, collaborative approach that ensures every project is delivered on time and beyond expectations.</p>
      </div>
      <div className="process-grid">
        {steps.map((step, idx) => (
          <div key={idx} className="process-step reveal">
            <div className="step-num">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;