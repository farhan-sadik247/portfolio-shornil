'use client';

import { useEffect, useState } from 'react';
import '../styles/hero.scss';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="badge">
            🧬 Microbiology Student
          </div>
          
          <h1>
            Hi, I'm{' '}
            <span className="gradient-name">
              Anika Jahan Shornil
            </span>
          </h1>
          
          <p className="subtitle">
            Exploring the microscopic world at{' '}
            <span className="highlight">BRAC University</span>
            <br />
            Passionate about microbiology, research, and scientific innovation
          </p>

          <div className="cta-buttons">
            <a href="#about" className="btn btn-primary">
              Explore My Journey
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
