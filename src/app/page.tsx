import Navigation from '@/components/Navigation';
import BackgroundCarousel from '@/components/BackgroundCarousel';
import FloatingElements from '@/components/FloatingElements';
import HeroNew from '@/components/HeroNew';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import '@/styles/globals.scss';

export default function Home() {
  return (
    <>
      <BackgroundCarousel />
      <FloatingElements />
      <div className="main-content">
        <Navigation />
        <HeroNew />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

