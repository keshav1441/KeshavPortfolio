import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Glass } from './ui/Glass';

const NAV_LINKS = [
  { label: 'Home',       href: '#Hero' },
  { label: 'About',      href: '#About_me' },
  { label: 'Skills',     href: '#Technologies' },
  { label: 'Experience', href: '#Experience' },
  { label: 'Projects',   href: '#Projects' },
  { label: 'Contact',    href: '#Contact' },
];

const SECTION_IDS = ['Hero', 'About_me', 'Technologies', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const pos = window.scrollY + 120;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= pos) {
          setActive(SECTION_IDS[i]);
          return;
        }
      }
    };
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <Glass
        intensity={scrolled ? 'lg' : 'md'}
        className="w-full max-w-[860px] px-6 py-3 flex items-center justify-between"
        style={{ transition: 'all 0.3s ease' }}
      >
        {/* Logo */}
        <a
          href="#Hero"
          onClick={() => handleLinkClick('#Hero')}
          className="flex items-center justify-center w-10 h-10 rounded-lg font-display font-bold text-lg"
          style={{ background: 'var(--accent-1)', color: 'var(--bg-primary)' }}
          aria-label="Home"
        >
          KS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(href); }}
                className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200"
                style={{ color: isActive ? 'var(--accent-1)' : 'var(--text-muted)' }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'var(--accent-1)', opacity: 0.12 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setIsOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-5 h-0.5 rounded-full transition-all duration-300"
              style={{
                background: 'var(--text-primary)',
                transform: isOpen
                  ? i === 0 ? 'rotate(45deg) translateY(8px)' : i === 2 ? 'rotate(-45deg) translateY(-8px)' : 'scaleX(0)'
                  : 'none',
                opacity: isOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </Glass>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center"
            style={{ background: 'var(--bg-primary)', backdropFilter: 'blur(20px)' }}
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(href); }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="text-3xl font-display font-semibold transition-colors duration-200"
                  style={{ color: active === href.replace('#', '') ? 'var(--accent-1)' : 'var(--text-primary)' }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
