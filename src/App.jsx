import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About_me from "./components/About_me";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // Enable smooth scrolling
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="overflow-x-hidden text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900">
      {/* Enhanced background gradient */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,170,0.3),rgba(255,255,255,0))]"></div> 
      <div className="absolute top-0 left-0 z-[-2] min-h-screen w-full bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,170,0.3),rgba(255,255,255,0))]"></div>
      
      {/* Main content container with improved padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <About_me />
        <Technologies />
        <Experience />
        <Projects />
        <Contact/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
