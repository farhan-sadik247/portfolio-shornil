'use client';

import { useState } from 'react';
import '../styles/contact.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'anika.shornil@example.com',
      href: 'mailto:anika.shornil@example.com',
    },
    {
      icon: '🎓',
      label: 'University',
      value: 'BRAC University',
      href: '#',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      href: '#',
    },
    {
      icon: '🔬',
      label: 'ResearchGate',
      value: 'View my research',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-cards">
              {contactInfo.map((info, idx) => (
                <a key={idx} href={info.href} className="info-card">
                  <div className="icon">{info.icon}</div>
                  <div className="details">
                    <div className="label">{info.label}</div>
                    <div className="value">{info.value}</div>
                  </div>
                  <div className="arrow">→</div>
                </a>
              ))}
            </div>

            <div className="quote-card">
              <div className="quote-icon">🧬</div>
              <p>
                "Science knows no boundaries. Let's explore the microscopic world together!"
              </p>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                />
              </div>

              <button type="submit">Send Message 🚀</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
