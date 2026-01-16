'use client';

import '../styles/footer.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3 className="footer-name">Anika Jahan Shornil</h3>
          <p className="footer-tagline">
            Microbiology Student | BRAC University | Future Researcher
          </p>

          <div className="social-links">
            {[
              { icon: '📧', label: 'Email' },
              { icon: '💼', label: 'LinkedIn' },
              { icon: '🔬', label: 'ResearchGate' },
              { icon: '📚', label: 'Google Scholar' },
            ].map((social, idx) => (
              <a key={idx} href="#" aria-label={social.label}>
                <div className="social-icon">{social.icon}</div>
                <span className="social-label">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="divider"></div>

          <div className="copyright">
            <p>© {currentYear} Anika Jahan Shornil. All rights reserved.</p>
            <p>Built with 🧬 Next.js & SCSS | Inspired by the beauty of microbiology</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
