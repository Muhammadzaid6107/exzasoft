// components/Services.jsx
import React from "react";

const Services = () => {
  const services = [
    {
      icon: (
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      ),
      title: "Web Development",
      desc: "Custom, high-performance websites and web applications built with modern frameworks. Scalable architecture, clean code, and optimised for speed.",
      tag: "React · Next.js · Node",
    },
    {
      icon: (
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      ),
      title: "UI/UX Design",
      desc: "Intuitive, beautiful interfaces designed around real user behaviours. We craft experiences that engage, convert, and delight at every touchpoint.",
      tag: "Figma · Prototyping · Research",
    },
    {
      icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
      title: "Digital Marketing",
      desc: "Data-driven strategies that grow your brand online. SEO, PPC, social media, and content marketing to drive measurable ROI and qualified traffic.",
      tag: "SEO · PPC · Social Media",
    },
    {
      icon: (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
        </>
      ),
      title: "Graphic Design",
      desc: "Visual storytelling that makes brands unforgettable. Logos, brand identity, marketing materials, illustrations, and everything in between.",
      tag: "Branding · Print · Illustration",
    },
    {
      icon: (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </>
      ),
      title: "Web Design",
      desc: "Stunning, responsive designs that look breathtaking on every device. We balance aesthetics with usability for maximum visual and commercial impact.",
      tag: "Responsive · Mobile-First · Fast",
    },
    {
      icon: (
        <>
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </>
      ),
      title: "WordPress Development",
      desc: "Powerful, flexible WordPress sites with custom themes, plugins, and WooCommerce. Easy to manage, hard to break, built to perform.",
      tag: "Custom Themes · WooCommerce",
    },
    {
      icon: (
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      ),
      title: "erp Development",
      desc: "Custom, high-performance erp system built with modern frameworks. Scalable architecture, clean code, and optimised for speed.",
      tag: "React · Express.js · Node.js",
    },
    {
      icon: (
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      ),
      title: "Social Media Management",
      desc: "Strategic social media marketing to grow your brand presence. We create engaging content, manage campaigns, analyze performance, and optimize for maximum reach and conversions across all major platforms.",
      tag: "Content Creation · Ads · Analytics",
    },
    {
      icon: (
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      ),
      title: "Ecommerce Management",
      desc: "Complete ecommerce store management to scale your online business. We handle product listings, inventory, order processing, customer support, and performance optimization to maximize sales and growth.",
      tag: "Shopify · WooCommerce · Amazon",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-header reveal">
        <div>
          <div className="section-label">What We Do</div>
          <h2>
            Services That <span className="accent">Scale</span>
            <br />
            Your Business
          </h2>
          <p className="section-subtitle">
            Comprehensive digital solutions crafted with precision — everything
            you need to succeed online.
          </p>
        </div>
        <a href="#contact" className="btn-primary">
          Start a Project →
        </a>
      </div>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div key={idx} className="service-card reveal">
            <div className="service-icon">
              <svg viewBox="0 0 24 24">{service.icon}</svg>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className="service-tag">{service.tag}</span>
          </div>
        ))}
        <div
          className="service-card reveal"
          style={{
            gridColumn: "1 / -1",
            maxWidth: "400px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div className="service-icon">
            <svg viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <h3>Shopify Development</h3>
          <p>
            Conversion-optimised Shopify stores that sell. Custom themes, app
            integrations, and performance tuning to maximise your e-commerce
            revenue.
          </p>
          <span className="service-tag">
            Custom Themes · Apps · Optimization
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
