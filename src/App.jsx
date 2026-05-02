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
      <div className="overflow-x-hidden antialiased" style={{ color: 'var(--text-primary)', background: 'var(--bg-primary)' }}>
        <div className="bg-mesh" aria-hidden="true" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
