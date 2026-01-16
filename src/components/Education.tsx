'use client';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Microbiology',
      institution: 'BRAC University',
      period: 'Present',
      description: 'Pursuing comprehensive studies in microbiology, molecular biology, genetics, and laboratory techniques.',
      icon: '🎓',
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <div className="underline"></div>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="education-icon">{edu.icon}</div>
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <span className="period">{edu.period}</span>
              <p className="description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
