'use client';

import '../styles/projects.scss';

export default function Projects() {
  const projects = [
    {
      title: 'Antimicrobial Resistance Study',
      description: 'Research project investigating bacterial resistance patterns in local hospital environments, analyzing multiple strains for antibiotic susceptibility.',
      tags: ['Bacteriology', 'Research', 'Data Analysis'],
      icon: '🦠',
    },
    {
      title: 'Microbial Ecology Analysis',
      description: 'Studying the diversity and distribution of microorganisms in various environmental samples using culture and molecular techniques.',
      tags: ['Ecology', 'Molecular Biology', 'Sampling'],
      icon: '🌍',
    },
    {
      title: 'Probiotic Characterization',
      description: 'Laboratory investigation of probiotic strains, evaluating their beneficial properties and potential applications in health products.',
      tags: ['Probiotics', 'Lab Work', 'Analysis'],
      icon: '🧫',
    },
    {
      title: 'COVID-19 Research Review',
      description: 'Comprehensive literature review on SARS-CoV-2 variants, transmission mechanisms, and vaccine development strategies.',
      tags: ['Virology', 'Literature Review', 'Public Health'],
      icon: '🔬',
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-title">
          <h2>Research & Projects</h2>
          <div className="underline"></div>
        </div>

        <div className="grid grid-2 projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
