'use client';

import '../styles/skills.scss';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Laboratory Techniques',
      icon: '🔬',
      skills: [
        { name: 'Microscopy', level: 85 },
        { name: 'Bacterial Culture', level: 80 },
        { name: 'Staining Techniques', level: 90 },
        { name: 'Aseptic Techniques', level: 88 },
      ],
    },
    {
      title: 'Molecular Biology',
      icon: '🧬',
      skills: [
        { name: 'PCR', level: 75 },
        { name: 'DNA Extraction', level: 82 },
        { name: 'Gel Electrophoresis', level: 78 },
        { name: 'Gene Analysis', level: 70 },
      ],
    },
    {
      title: 'Research & Analysis',
      icon: '📊',
      skills: [
        { name: 'Data Analysis', level: 85 },
        { name: 'Scientific Writing', level: 80 },
        { name: 'Literature Review', level: 88 },
        { name: 'Critical Thinking', level: 90 },
      ],
    },
    {
      title: 'Specialized Knowledge',
      icon: '🦠',
      skills: [
        { name: 'Bacteriology', level: 85 },
        { name: 'Virology', level: 78 },
        { name: 'Immunology', level: 75 },
        { name: 'Genetics', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="grid grid-2 skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span className="percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
