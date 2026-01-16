'use client';

import { useEffect, useState } from 'react';

export default function BackgroundCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-carousel">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`carousel-slide ${slide} ${index === activeSlide ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}
