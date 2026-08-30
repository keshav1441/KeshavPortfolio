import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RunningHead, Fade } from './ui/Editorial';

const EXPERIENCES = [
  {
    from: '2026',
    to: 'Now',
    role: 'Software Engineer',
    company: 'AI Assistant',
    location: 'Pune, IN · On-site',
    bullets: [
      'Ship production features for a multi-tenant medicine e-commerce platform.',
      'Built a config layer that lets new pharmacy tenants launch without code changes.',
    ],
    technologies: ['Multi-tenancy', 'E-commerce', 'Full Stack', 'Config-driven Systems'],
  },
  {
    from: '2025',
    to: '2026',
    role: 'Software Engineer Intern',
    company: 'AI Assistant',
    location: 'Pune, IN · On-site',
    bullets: [
      'Built an AI HR platform for resume parsing and ranking, with automated phone and Zoom voice interviews.',
      'Built a job aggregator scraping 1,000+ company career pages on a schedule, deduped into a searchable index.',
      'Integrated AI agents with Salesforce and Zoho CRM for data sync and lead management, plus agents automating SMS and email outreach.',
    ],
    technologies: ['AI Agents', 'Voice AI', 'Web Scraping', 'Salesforce', 'Zoho CRM', 'Search'],
  },
  {
    from: '2024',
    to: '2025',
    role: 'Artificial Intelligence Intern',
    company: 'Soven Developers',
    location: 'Remote',
    bullets: [
      'Developed a medical chatbot on Groq APIs that processes medical reports and images.',
      'Improved accuracy by applying NLP techniques tuned to medical terminology.',
      'Kept responses inside medical compliance and ethics constraints.',
    ],
    technologies: ['Groq', 'NLP', 'TensorFlow', 'Python'],
  },
  {
    from: '2024',
    to: '2024',
    role: 'Software Development Engineer Intern',
    company: 'Devtech Consulting Services',
    location: 'Pune, IN',
    bullets: [
      'Designed and implemented user registration in ASP.NET Core with Entity Framework.',
      'Optimized MySQL queries, cutting data retrieval time by 30%.',
      'Rebuilt interface sections with responsive React.js layouts and motion.',
    ],
    technologies: ['ASP.NET Core', 'Entity Framework', 'MySQL', 'React.js'],
  },
];

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="Experience" className="pt-24 md:pt-32">
      <RunningHead index="04" title="Record" meta={`${EXPERIENCES.length} positions`} />

      <div style={{ borderTop: '1px solid var(--rule-strong)' }}>
        {EXPERIENCES.map((exp, i) => {
          const isOpen = open === i;
          return (
            <Fade key={`${exp.company}-${exp.role}`} delay={i * 0.05} className="border-b">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className={`invert-row w-full text-left grid grid-cols-[1fr_auto] md:grid-cols-[9rem_1fr_auto] gap-x-6 gap-y-1 items-baseline py-6 px-3 -mx-3 ${isOpen ? 'is-open' : ''}`}
              >
                <span className="meta meta-ink order-1 md:order-none">
                  {exp.from} — {exp.to}
                </span>

                <span className="col-span-2 md:col-span-1 order-3 md:order-none">
                  <span className="display text-2xl md:text-4xl block">{exp.role}</span>
                  <span className="meta block mt-1.5">
                    {exp.company} <span style={{ color: 'var(--signal)' }}>·</span> {exp.location}
                  </span>
                </span>

                <span
                  className="order-2 md:order-none self-center font-mono leading-none"
                  style={{ fontSize: '1.5rem', color: 'var(--signal)' }}
                  aria-hidden
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-x-6 pb-8 md:pl-0">
                      <span className="meta hidden md:block">Detail</span>
                      <div>
                        <ul className="space-y-2 mb-5" style={{ maxWidth: '70ch' }}>
                          {exp.bullets.map(b => (
                            <li key={b} className="flex gap-3 text-sm soft">
                              <span style={{ color: 'var(--signal)' }} aria-hidden>—</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="flex flex-wrap gap-x-4 gap-y-1">
                          {exp.technologies.map(t => (
                            <li key={t} className="meta">{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Fade>
          );
        })}
      </div>
    </section>
  );
}
