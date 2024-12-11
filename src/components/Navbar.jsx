import { useState, useEffect } from "react";
import "../styles/nav.css";

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Effect to handle menu state based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // Adjusted breakpoint for lg screens
        setIsMenuOpen(true); // Automatically open the menu on larger screens
      } else {
        setIsMenuOpen(false); // Close the menu on smaller screens
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call the function once to set initial state
    handleResize();

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="Navbar">
      <nav className="mb-20 flex items-center justify-between py-6 px-4 relative z-10">
        {/* Brand */}
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-5xl font-bold">Ks</h1>
        </div>

        {/* Hamburger button */}
        <button
          className="lg:hidden p-2 flex flex-col justify-center items-center space-y-1 rounded-lg relative z-20 ring-2 ring-zinc-100 absolute right-0"
          onClick={toggleMenu}
        >
          <div
            className={`w-6 h-1 bg-zinc-100 rounded transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-zinc-100 rounded transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-zinc-100 rounded transform transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>

        {/* Links container */}
        <div
          className={`navbar-links absolute top-full left-0 w-full text-white lg:block lg:static lg:flex justify-center lg:gap-5 z-10 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <a
            href="#Navbar"
            className="nav-link block py-2 px-4 te rounded-2xl ring-1 ring-inset ring-zinc-100 hover:bg-zinc-300 hover:text-black"
          >
            Home
          </a>
          <a
            href="#About_me"
            className="nav-link block py-2 px-4 rounded-2xl ring-1 ring-inset ring-zinc-100 hover:bg-zinc-300 hover:text-black"
          >
            About
          </a>
          <a
            href="#Projects"
            className="nav-link block py-2 px-4 rounded-2xl ring-1 ring-inset ring-zinc-100 hover:bg-zinc-300 hover:text-black"
          >
            Projects
          </a>
          <a
            href="#Technologies"
            className="nav-link block py-2 px-4 rounded-2xl ring-1 ring-inset ring-zinc-100 hover:bg-zinc-300 hover:text-black"
          >
            Technology
          </a>
          <a
            href="#Experience"
            className="nav-link block py-2 px-4 rounded-2xl ring-1 ring-inset ring-zinc-100 hover:bg-zinc-300 hover:text-black"
          >
            Experience
          </a>
          <a
            href="#Contact"
            className="nav-link block py-2 px-4 rounded-2xl ring-1 ring-inset ring-zinc-100 hover:bg-zinc-300 hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
