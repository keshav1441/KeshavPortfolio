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
      'Core engineer on a multi-tenant pharmacy e-commerce platform serving 3 live brands from one codebase, with config-driven branding, roles and catalogs.',
      'Designed and built the telehealth prescription module: provider approval, request fees with card payments and refunds, partial orders in installments, and admin lifecycle tracking.',
      'Built the doctor approval pipeline in the companion TeleHealth service: e-signed prescription PDFs, a combined intake questionnaire cut from 72 to 51 questions, and a physician-network integration with replayable webhooks.',
      'Integrated 7 pharmacy fulfillment sources through APIs and signed webhooks, with checkout compliance checks for DEA schedules, max allowed dosing and per-state prescriber licensing.',
      'Built an AI HR platform that parses and ranks 50 resumes at once with LLMs, plus automated phone and Zoom voice interviews.',
      'Built Image Studio, a canvas-based product label generator with batch approval and ZIP export, plus BullMQ queues for email and in-app notifications.',
    ],
    technologies: ['TypeScript', 'React', 'Fastify', 'Prisma', 'PostgreSQL', 'BullMQ', 'Stripe', 'Voice AI', 'AWS EC2 / RDS'],
  },
  {
    from: '2025',
    to: '2026',
    role: 'Software Engineer Intern',
    company: 'AI Assistant',
    location: 'Pune, IN · On-site',
    bullets: [
      'Built lead-generation tooling for the marketing team, feeding new leads straight into the CRM.',
      'Built AI agents syncing Salesforce and Zoho CRM data and automating SMS and email outreach.',
      'Built a job portal scraping 1,500+ company career pages on a schedule into a deduped, searchable index of 100K+ jobs.',
    ],
    technologies: ['AI Agents', 'LLMs', 'Web Scraping', 'Salesforce', 'Zoho CRM'],
  },
  {
    from: '2024',
    to: '2025',
    role: 'Artificial Intelligence Intern',
    company: 'Soven Developers',
    location: 'Remote',
    bullets: [
      'Built an AI legal assistant automating document drafting, case-law research and compliance monitoring.',
      'Developed a medical chatbot on Groq APIs handling 100+ daily queries for diagnosis and document automation.',
      'Applied NLP tuned to medical terminology to read reports and images within compliance limits.',
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
      'Implemented user registration and PhonePe payments in ASP.NET Core with Entity Framework.',
      'Optimized MySQL queries and indexed high-traffic tables, cutting data retrieval time by 30%.',
      'Built responsive UI components and animations in React.js and Tailwind CSS.',
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
