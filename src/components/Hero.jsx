import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profilepic from '../assets/Herophoto.jpg';
import { MaskLine, Marquee } from './ui/Editorial';

const RESUME_URL = 'https://drive.google.com/file/d/1q8BZW8x0yd15ZjupDxx-pX3EWU1AO650/view?usp=sharing';

const FACTS = [
  ['Status',   'Open to work'],
  ['Based',    'Pune, India'],
  ['Role',     'Software Engineer'],
  ['Focus',    'AI systems / full-stack'],
];

const KEYWORDS = [
  'NEXT.JS', 'PYTHON', 'RAG PIPELINES', 'TYPESCRIPT', 'FASTAPI',
  'POSTGRES', 'PYTORCH', 'REACT NATIVE', 'AGENT ORCHESTRATION', 'NODE.JS',
];

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <section id="Hero" ref={heroRef} className="pt-24 md:pt-32">
      {/* ── Masthead ── */}
      <div className="flex items-baseline justify-between pb-3 mb-8 border-b" style={{ borderColor: 'var(--rule)' }}>
        <span className="meta">Portfolio — Vol. 04</span>
        <span className="meta">2026</span>
      </div>

      {/* ── Headline ── */}
      <h1 className="display display-xl">
        <MaskLine delay={0.05}>Software</MaskLine>
        <MaskLine delay={0.15}>
          Engineer
          <span style={{ color: 'var(--signal)' }}>.</span>
        </MaskLine>
      </h1>

      {/* ── Statement + portrait ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-10 md:mt-14">
        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col gap-10"
        >
          <p className="lead" style={{ maxWidth: '34ch' }}>
            I build AI systems that reach production — agent orchestration, retrieval
            pipelines and the full-stack products they live inside.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#Projects" className="btn-fill">
              Selected Work <span aria-hidden>↓</span>
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-line">
              Resume <span aria-hidden>↗</span>
            </a>
          </div>
        </motion.div>

        {/* Facts ledger */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="lg:col-span-3 self-end"
        >
          {FACTS.map(([label, value], i) => (
            <div
              key={label}
              className="flex items-baseline justify-between gap-4 py-2.5 border-t"
              style={{ borderColor: 'var(--rule)' }}
            >
              <dt className="meta">{label}</dt>
              <dd className="meta meta-ink flex items-center gap-2">
                {i === 0 && (
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--signal)' }}
                    aria-hidden
                  />
                )}
                {value}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* Portrait — hard rectangle, duotone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-4 order-first lg:order-last"
          style={{ y: portraitY }}
        >
          <figure className="relative group">
            <img
              src={profilepic}
              alt="Keshav Sharma"
              fetchPriority="high"
              decoding="async"
              className="media-tone w-full h-[300px] sm:h-[380px] lg:h-[440px] object-cover object-top"
              style={{ border: '1px solid var(--ink)' }}
            />
            <figcaption
              className="meta absolute -bottom-6 right-0"
              aria-hidden
            >
              Fig. 01 — the engineer
            </figcaption>
          </figure>
        </motion.div>
      </div>

      {/* ── Keyword strip ── */}
      <div className="mt-20 md:mt-28">
        <Marquee items={KEYWORDS} />
      </div>
    </section>
  );
}
