import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useLenis } from '../context/LenisContext';
import { scrollToElement } from '../lib/scroll';

const NAV_LINKS = [
  { num: '01', label: 'Index',      href: '#Hero' },
  { num: '02', label: 'Profile',    href: '#About_me' },
  { num: '03', label: 'Stack',      href: '#Technologies' },
  { num: '04', label: 'Record',     href: '#Experience' },
  { num: '05', label: 'Work',       href: '#Projects' },
  { num: '06', label: 'Contact',    href: '#Contact' },
];

const SECTION_IDS = NAV_LINKS.map(l => l.href.slice(1));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Hero');
  const lenis = useLenis();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 260, damping: 40, mass: 0.4 });

  // Section tracking via IntersectionObserver rather than a scroll listener.
  // The old handler read offsetTop for all six sections on every scroll event,
  // forcing a synchronous layout each frame while Lenis was already driving a
  // rAF loop — the main cause of scroll jank.
  useEffect(() => {
    const visible = new Map();
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) visible.set(entry.target.id, entry.intersectionRatio);
        let best = null;
        let bestRatio = 0;
        for (const id of SECTION_IDS) {
          const ratio = visible.get(id) || 0;
          if (ratio > bestRatio) { best = id; bestRatio = ratio; }
        }
        if (best) setActive(best);
      },
      { rootMargin: '-88px 0px -55% 0px', threshold: [0, 0.15, 0.4, 0.75, 1] },
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const go = (href) => {
    setIsOpen(false);
    scrollToElement(lenis, document.getElementById(href.slice(1)));
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'var(--ground)', borderBottom: '1px solid var(--rule)' }}
    >
      <div className="page flex items-center justify-between h-14 md:h-16">
        {/* Identity */}
        <a
          href="#Hero"
          onClick={e => { e.preventDefault(); go('#Hero'); }}
          className="meta meta-ink hover:opacity-60 transition-opacity"
        >
          Keshav Sharma
          <span className="hidden sm:inline" style={{ color: 'var(--ink-soft)' }}> — Software Engineer</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map(({ num, label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={e => { e.preventDefault(); go(href); }}
                className={`meta link-draw ${isActive ? 'meta-ink link-draw-on' : ''}`}
                style={isActive ? { color: 'var(--ink)' } : undefined}
              >
                <span style={{ color: 'var(--signal)' }}>{num}</span>{' '}{label}
              </a>
            );
          })}
        </nav>

        {/* Mobile trigger */}
        <button
          className="md:hidden meta meta-ink"
          onClick={() => setIsOpen(v => !v)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Scroll progress hairline */}
      <motion.div
        className="absolute bottom-0 left-0 h-px origin-left w-full"
        style={{ scaleX: progress, background: 'var(--signal)' }}
        aria-hidden
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 top-14 z-40 md:hidden flex flex-col"
            style={{ background: 'var(--ground)' }}
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ num, label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={e => { e.preventDefault(); go(href); }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  className="invert-row flex items-baseline gap-4 px-[var(--page-pad)] py-5 border-b"
                  style={{ borderColor: 'var(--rule)' }}
                >
                  <span className="meta" style={{ color: 'var(--signal)' }}>{num}</span>
                  <span className="display display-md">{label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
