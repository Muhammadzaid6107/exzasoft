// components/Marquee.jsx
import React from 'react';

const Marquee = () => {
  const items = [
    'Web Development', 'UI/UX Design', 'Digital Marketing', 'Graphic Design',
    'Shopify Stores', 'WordPress', 'Web Design', 'Brand Identity'
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="marquee-item">
            {item} <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;