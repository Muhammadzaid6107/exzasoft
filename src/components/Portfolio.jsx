import React from 'react';
import portfolio from "../assets/portfolio.mp4";
// import erpsystem from "../assets/erp-system1.mp4";
import Exza from "../assets/Exzasoft.mp4"

const Portfolio = () => {
  const projects = [
//  { title: 'Bellerilondon', desc: 'ERP System', bg: 'p1', video: "https://drive.google.com/uc?export=download&id=1nRA6nZ_WBW5LoOEIA75QZFWRthdN7Tw-" },
  { title: 'EXZASOFT', desc: 'Website', bg: 'p2', video: Exza },
  { title: 'Portfolio', desc: 'Digital CV', bg: 'p3', video: portfolio },

  ];

  return (
    <section id="portfolio" style={{ padding: '100px 5%' }}>
      
      {/* Header */}
      <div
        className="reveal"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '40px'
        }}
      >
        <div>
          <div className="section-label">Our Work</div>
          <h2>
            Projects We're <span className="accent">Proud</span> Of
          </h2>
        </div>

        <a href="#contact" className="btn-outline">
          View All Projects
        </a>
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="portfolio-card reveal">

            {/* Background (Video or Fallback) */}
            <div className={`portfolio-bg ${project.bg}`}>
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="portfolio-video"
                />
              ) : (
                <div className="no-video">
                  No Preview
                </div>
              )}
            </div>

            {/* Overlay */}
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Portfolio;