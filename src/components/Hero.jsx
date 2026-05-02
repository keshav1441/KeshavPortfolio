import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import profilepic from '../assets/Herophoto.jpg';
import { Glass } from './ui/Glass';

const ROLES = ['Frontend Engineer', 'AI Builder', 'Vision Researcher'];

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 8 + 6,
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const headlineY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="Hero" ref={heroRef} className="relative pt-36 pb-20 md:pt-44 md:pb-28 min-h-screen flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">

        {/* ── Text column ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 space-y-7"
        >
          <motion.p variants={itemVariants} className="text-sm font-mono tracking-widest uppercase" style={{ color: 'var(--accent-2)' }}>
            Hello, I&apos;m
          </motion.p>

          <motion.div variants={itemVariants} style={{ y: headlineY }}>
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-display font-extrabold leading-none tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Keshav
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3 h-10">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="text-xl sm:text-2xl font-display font-semibold"
                style={{ color: 'var(--accent-1)' }}
              >
                {ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
            <span className="text-2xl animate-cursor-blink" style={{ color: 'var(--accent-1)' }}>|</span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base max-w-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Passionate full-stack developer with 3+ years building scalable web apps and AI-powered systems.
            I bridge pixel-perfect UIs with intelligent backends — from React frontends to PyTorch models.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a href="#Projects" className="btn-accent">View Work</a>
            <a
              href="https://drive.google.com/file/d/1SATFVM6n0HEzkzD0hKsBsEPEj4jhz3E5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              Resume ↗
            </a>
          </motion.div>
        </motion.div>

        {/* ── Portrait column ── */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          style={{ y: portraitY }}
        >
          <div className="relative">
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
              {PARTICLES.map(p => (
                <span
                  key={p.id}
                  className="absolute rounded-full opacity-50"
                  style={{
                    left: p.left,
                    bottom: 0,
                    width: p.size,
                    height: p.size,
                    background: 'var(--accent-1)',
                    animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                  }}
                />
              ))}
            </div>

            {/* Portrait card */}
            <Glass
              intensity="lg"
              className="relative p-3 animate-float"
              style={{ borderRadius: '40% 60% 60% 40% / 50% 50% 50% 50%', animation: 'blobMorph 8s ease-in-out infinite, float 6s ease-in-out infinite' }}
            >
              <img
                src={profilepic}
                alt="Keshav Sharma"
                className="w-72 h-72 sm:w-96 sm:h-96 object-cover"
                style={{ borderRadius: '38% 62% 58% 42% / 48% 52% 48% 52%', animation: 'blobMorph 8s ease-in-out infinite' }}
              />
            </Glass>

            {/* Glow orb behind portrait */}
            <div
              className="absolute -inset-8 -z-10 blur-3xl opacity-30 rounded-full"
              style={{ background: `radial-gradient(circle, var(--accent-1), transparent 70%)` }}
              aria-hidden
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#About_me"
        onClick={(e) => { e.preventDefault(); document.getElementById('About_me')?.scrollIntoView({ behavior: 'smooth' }); }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          ↓
        </motion.div>
      </motion.a>
    </section>
  );
}
