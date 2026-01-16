'use client';

import '../styles/about.scss';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="profile-section">
            <div className="profile-card">
              <div className="profile-image">
                🧬
              </div>
              <h3 className="profile-name">Anika Jahan Shornil</h3>
              <p className="profile-role">Microbiology Student at BRAC University</p>
            </div>
          </div>

          <div className="info-section">
            <div className="info-cards">
              <div className="info-card">
                <div className="card-icon">🔬</div>
                <h3>My Story</h3>
                <p>
                  As a dedicated microbiology student at BRAC University, I'm fascinated by the invisible world 
                  that shapes our existence. From bacteria to viruses, from antibiotics to genomics, I'm passionate 
                  about understanding life at its most fundamental level.
                </p>
              </div>

              <div className="info-card">
                <div className="card-icon">🧪</div>
                <h3>My Passion</h3>
                <p>
                  I believe that microorganisms hold the key to solving many of humanity's greatest challenges - 
                  from developing new medicines to addressing climate change. My goal is to contribute to scientific 
                  research that makes a real difference in people's lives.
                </p>
              </div>

              <div className="info-card">
                <div className="card-icon">🎯</div>
                <h3>My Vision</h3>
                <p>
                  Through continuous learning and hands-on research, I aspire to become a leading microbiologist 
                  who bridges the gap between laboratory discoveries and practical applications that benefit society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
