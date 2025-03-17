import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../styles/nav.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close menu when clicking on a link (mobile)
  const closeMenu = () => {
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
  };

  // Effect to handle menu state based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false); // Hide mobile menu on larger screens
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call the function once to set initial state
    handleResize();

    // Handle scroll for navbar background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="Navbar" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4 sm:px-8 lg:px-10">
        {/* Brand */}
        <div className="flex flex-shrink-0 items-center">
          <a href="#Hero" className="flex items-center">
            <h1 className="text-4xl font-bold gradient-text">KS</h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          <a
            href="#Hero"
            className="nav-link text-base font-medium text-slate-300 hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#About_me"
            className="nav-link text-base font-medium text-slate-300 hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#Technologies"
            className="nav-link text-base font-medium text-slate-300 hover:text-white transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#Experience"
            className="nav-link text-base font-medium text-slate-300 hover:text-white transition-colors duration-300"
          >
            Experience
          </a>
          <a
            href="#Projects"
            className="nav-link text-base font-medium text-slate-300 hover:text-white transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="nav-link text-base font-medium text-slate-300 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-5 ml-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors text-lg"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors text-lg"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Hamburger button */}
        <button
          className="lg:hidden p-2 flex flex-col justify-center items-center space-y-1.5 rounded-lg z-20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`w-7 h-0.5 bg-slate-300 rounded transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-0.5 bg-slate-300 rounded transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-7 h-0.5 bg-slate-300 rounded transform transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-slate-900/95 z-40 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 p-4">
          <a
            href="#Hero"
            className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#About_me"
            className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#Technologies"
            className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            href="#Experience"
            className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Experience
          </a>
          <a
            href="#Projects"
            className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="text-2xl font-medium text-slate-300 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            Contact
          </a>
          
          {/* Social Icons for Mobile */}
          <div className="flex items-center space-x-8 mt-10">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors text-3xl"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-colors text-3xl"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
