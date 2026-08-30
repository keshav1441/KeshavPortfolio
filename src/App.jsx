import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About_me from './components/About_me';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeSwitcher } from './components/ui/ThemeSwitcher';

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="antialiased" style={{ color: 'var(--ink)', background: 'var(--ground)' }}>
        {/* Only paints in the Blueprint theme; --grid is transparent elsewhere */}
        <div className="grid-overlay" aria-hidden="true" />
        <Navbar />
        <main className="page relative" style={{ zIndex: 1 }}>
          <Hero />
          <About_me />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
        <ThemeSwitcher />
      </div>
    </MotionConfig>
  );
};

export default App;
