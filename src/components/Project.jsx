import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { RunningHead, Fade } from './ui/Editorial';

import imgRetinopathy from '../assets/projects/diabetic-retinopathy.png';
import imgFormUp      from '../assets/projects/Formup.png';
import imgAdvisory    from '../assets/projects/financial-advisory.png';
import imgCollegeOlx  from '../assets/projects/college_olx.jpg';
import imgPlanIt      from '../assets/projects/planit.png';
import imgSegmenting  from '../assets/projects/autodriving.jpg';
import imgRagPdf      from '../assets/projects/PDF-chat-assistant.png';

const PROJECTS = [
  {
    title: 'KhabriAI',
    subtitle: 'Crime Intelligence Assistant',
    year: '2026',
    link: 'https://github.com/keshav1441/KhabriAI',
    description: 'Conversational AI for police investigators to query crime data in plain English. A Mistral agent orchestrator plans tool calls — RAG-driven SQL generation, full-text FIR search, anomaly insights, network graphs and risk prediction — streaming each step to a live Case Board. Built for Datathon 2026 (KSP × Hack2Skill).',
    technologies: ['Next.js 16', 'Mistral', 'Prisma', 'Neon Postgres', 'RAG', 'Cytoscape'],
    category: 'AI/ML',
  },
  {
    title: 'Axon',
    subtitle: 'Personal Ops App',
    year: '2026',
    link: 'https://github.com/keshav1441/Axon',
    demo: 'https://axon-eta-nine.vercel.app',
    description: 'Cross-platform mobile app unifying tasks, focus sessions, money and personal data in one dashboard. Expo/React Native client with biometric auth and speech recognition, backed by serverless APIs on Neon Postgres with Drizzle and JWT sessions.',
    technologies: ['Expo', 'React Native', 'TypeScript', 'Drizzle ORM', 'Neon', 'Vercel'],
    category: 'Frontend',
  },
  {
    title: 'Foundrly',
    subtitle: 'Founder Matching',
    year: '2025',
    link: 'https://github.com/keshav1441/Foundrly',
    demo: 'https://foundrly-six.vercel.app',
    description: 'Swipe-based matching app for startup ideas, with a two-step request/accept flow, Socket.io real-time chat and notifications, JWT + Google OAuth, and AI features that generate, roast and rewrite pitches.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Gemini'],
    category: 'Frontend',
  },
  {
    title: 'GrainChain',
    subtitle: 'Agri Trade Platform',
    year: '2025',
    link: 'https://github.com/keshav1441/GrainChain',
    description: 'AI-powered marketplace connecting farmers directly with institutional buyers and lenders. Includes AI price recommendations, credit scoring, loan review workflows and risk-based pricing across three role-specific dashboards.',
    technologies: ['FastAPI', 'React', 'TypeScript', 'MongoDB', 'Redis', 'JWT'],
    category: 'Backend',
  },
  {
    title: 'FormUp',
    subtitle: 'Form Builder',
    year: '2025',
    image: imgFormUp,
    link: 'https://github.com/keshav1441/FormUp',
    description: 'Drag-and-drop form builder with real-time preview, built using Next.js, TypeScript, PostgreSQL, Prisma, Dnd-Kit, and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Dnd-Kit', 'PostgreSQL', 'Prisma'],
    category: 'Frontend',
  },
  {
    title: 'Project Triton',
    subtitle: 'RAG Assistant',
    year: '2025',
    link: 'https://github.com/keshav1441/Project-triton',
    description: 'Full-stack RAG assistant with a ChromaDB-backed knowledge base, authentication, user profiles, connection management and a scheduler service. FastAPI backend paired with a React + Vite client deployed on AWS Amplify.',
    technologies: ['FastAPI', 'ChromaDB', 'React', 'Vite', 'AWS Amplify'],
    category: 'Backend',
  },
  {
    title: 'RAG PDF Chat',
    subtitle: 'Document Assistant',
    year: '2025',
    image: imgRagPdf,
    link: 'https://github.com/keshav1441/RAG-PDF-chat-assistant',
    description: 'File-based chatbot using Retrieval-Augmented Generation. Upload PDFs and chat with their content. FastAPI + React + LangChain.',
    technologies: ['FastAPI', 'React', 'LangChain', 'Google Gemini'],
    category: 'Backend',
  },
  {
    title: 'Financial Voice Agent',
    subtitle: 'Multi-Agent Market Brief',
    year: '2025',
    link: 'https://github.com/keshav1441/Financial-Assistant-voice-agent',
    description: 'Microservice agents that poll market data, scrape filings and news, and deliver spoken market briefs with RAG-backed analysis. Tracks Asian tech exposure across TSMC, Samsung and Softbank with voice in and out.',
    technologies: ['Python', 'Streamlit', 'RAG', 'YFinance', 'Alpha Vantage', 'Docker'],
    category: 'AI/ML',
  },
  {
    title: 'Maitri AI',
    subtitle: 'Scheme Advisor',
    year: '2025',
    link: 'https://github.com/keshav1441/Maitri-AI',
    description: 'Voice-driven assistant helping rural women discover government schemes in their own language without reading or typing. Coqui STT/TTS with Gemini intent classification, eligibility matching and an empathy layer that adapts tone.',
    technologies: ['FastAPI', 'React Native', 'Coqui STT/TTS', 'Gemini', 'MongoDB'],
    category: 'AI/ML',
  },
  {
    title: 'Concisio',
    subtitle: 'Chat Insights',
    year: '2025',
    link: 'https://github.com/keshav1441/Concisio',
    description: 'Chat summarization platform with WebSocket-based real-time processing, Gemini-powered summaries, sentiment analysis and keyword extraction over a MongoDB conversation store.',
    technologies: ['FastAPI', 'Streamlit', 'MongoDB', 'WebSockets', 'Gemini'],
    category: 'Backend',
  },
  {
    title: 'A2K Financial Advisory',
    subtitle: 'Advisory Platform',
    year: '2025',
    image: imgAdvisory,
    link: 'https://github.com/keshav1441/Financial-Advisory',
    description: 'AI-powered financial advisory platform with spending insights, savings projections, and chatbot-driven advice via Google Gemini.',
    technologies: ['MERN Stack', 'Google Gemini'],
    category: 'Frontend',
  },
  {
    title: 'PlanIt',
    subtitle: 'Task Manager',
    year: '2025',
    image: imgPlanIt,
    link: 'https://github.com/keshav1441/PlanIt',
    demo: 'https://planit-drab-five.vercel.app',
    description: 'Full-stack collaborative task management with role-based access control, team dashboards, priority tagging, and real-time progress tracking.',
    technologies: ['MERN Stack', 'Express', 'MongoDB'],
    category: 'Backend',
  },
  {
    title: 'Vian Enterprises',
    subtitle: 'Marketing Site',
    year: '2025',
    link: 'https://github.com/keshav1441/Vian-Enterprises',
    description: 'Marketing site for an enterprise client, built on the Next.js App Router with a Radix UI component system, accessible forms with validation, and a fully responsive Tailwind layout.',
    technologies: ['Next.js', 'TypeScript', 'Radix UI', 'Tailwind CSS'],
    category: 'Frontend',
  },
  {
    title: 'Universal Job Scraper',
    subtitle: 'Config-driven Crawler',
    year: '2025',
    link: 'https://github.com/keshav1441/Jobs-Scrapping',
    description: 'Config-driven scraping engine that targets any careers site through YAML definitions instead of bespoke code, routing requests via ScraperAPI and normalizing listings into a single schema.',
    technologies: ['Python', 'YAML', 'ScraperAPI', 'BeautifulSoup'],
    category: 'Backend',
  },
  {
    title: 'BeyondGuidebooks',
    subtitle: 'Heritage Data Atlas',
    year: '2025',
    link: 'https://github.com/keshav1441/BeyondGuidebooks',
    description: 'Snowflake Hackathon project that merges heritage-site datasets across Indian regions into one standardized, geocoded dataset, surfaced through an interactive Streamlit map.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'GeoPandas', 'Folium'],
    category: 'Backend',
  },
  {
    title: 'Vehicle Segmentation',
    subtitle: 'Autonomous Driving',
    year: '2025',
    image: imgSegmenting,
    link: 'https://www.kaggle.com/code/aditishere/btp-test',
    description: 'Semantic segmentation using a U-Net architecture, reaching 76% accuracy classifying critical objects in complex traffic scenes.',
    technologies: ['Python', 'PyTorch', 'Pandas', 'NumPy'],
    category: 'AI/ML',
  },
  {
    title: 'Diabetic Retinopathy',
    subtitle: 'Retinal Classification',
    year: '2025',
    image: imgRetinopathy,
    link: 'https://github.com/keshav1441/Diabetic-Retinopathy',
    description: 'Deep learning classification of retinal images with 82% accuracy using a DenseNet-201 architecture.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    category: 'AI/ML',
  },
  {
    title: 'College OLX',
    subtitle: 'Campus Marketplace',
    year: '2024',
    image: imgCollegeOlx,
    link: 'https://github.com/keshav1441/College-olx',
    description: 'Campus marketplace for buying and selling goods, with browsing, secure transactions and seamless user registration.',
    technologies: ['Django', 'React.js', 'Bootstrap'],
    category: 'Frontend',
  },
];

const FILTERS = ['All', 'Frontend', 'Backend', 'AI/ML'];

/* Deterministic hue so each generated plate keeps a stable identity */
function hueFor(title) {
  let h = 0;
  for (let i = 0; i < title.length; i++) h = (h * 31 + title.charCodeAt(i)) % 360;
  return h;
}

function monogram(title) {
  const words = title.replace(/[^A-Za-z0-9 ]/g, ' ').trim().split(/\s+/);
  const letters = words.length > 1 ? words.slice(0, 2).map(w => w[0]).join('') : words[0].slice(0, 2);
  return letters.toUpperCase();
}

/** Projects with no screenshot get a typeset plate rather than a stock image. */
function Plate({ project, className = '' }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className={`media-tone w-full h-full object-cover ${className}`}
      />
    );
  }

  const hue = hueFor(project.title);
  return (
    <div
      aria-hidden
      className={`w-full h-full flex flex-col justify-between p-6 ${className}`}
      style={{ background: `hsl(${hue} 12% 50% / 0.10)` }}
    >
      <span className="meta">{project.subtitle}</span>
      <span
        className="display leading-none"
        style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', color: 'var(--ink)', opacity: 0.85 }}
      >
        {monogram(project.title)}
      </span>
    </div>
  );
}

Plate.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeIdx, setActiveIdx] = useState(0);

  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const active = visible[Math.min(activeIdx, visible.length - 1)] || visible[0];

  const selectFilter = f => {
    setFilter(f);
    setActiveIdx(0);
  };

  const countFor = f => (f === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === f).length);

  return (
    <section id="Projects" className="pt-24 md:pt-32">
      <RunningHead index="05" title="Selected Work" meta={`${PROJECTS.length} entries`} />

      {/* Filters as text, not pills */}
      <div className="flex flex-wrap items-baseline gap-x-7 gap-y-2 mb-10">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => selectFilter(f)}
            className={`meta link-draw ${filter === f ? 'meta-ink link-draw-on' : ''}`}
          >
            {f}
            <sup className="ml-1" style={{ color: 'var(--signal)' }}>{countFor(f)}</sup>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* ── Index ── */}
        <div className="lg:col-span-7" style={{ borderTop: '1px solid var(--rule-strong)' }}>
          {visible.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveIdx(i)}
              onFocus={() => setActiveIdx(i)}
              className="invert-row group block border-b px-3 -mx-3 py-5"
            >
              <div className="flex items-baseline gap-4">
                <span className="meta" style={{ color: 'var(--signal)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="display text-2xl md:text-[2rem] flex-1 min-w-0 leading-none break-words">
                  {project.title}
                </h3>
                <span className="meta hidden sm:block shrink-0">{project.category}</span>
                <span className="meta shrink-0">{project.year}</span>
                <span
                  className="meta meta-ink shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mt-2 pl-9">
                <span className="meta">{project.subtitle}</span>
                <span className="text-xs soft hidden md:inline">
                  {project.technologies.slice(0, 4).join(' · ')}
                </span>
              </div>

              {/* Mobile-only detail; the desktop preview panel covers this on wide screens */}
              <p className="text-sm soft mt-3 pl-9 lg:hidden">{project.description}</p>
            </a>
          ))}
        </div>

        {/* ── Preview plate ── */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="sticky top-28">
            {/* Keyed remount fades the new plate in. No AnimatePresence: the key
                changes faster than an exit animation can finish on hover. */}
            <motion.figure
              key={active.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
                <div
                  className="w-full aspect-[4/3] overflow-hidden"
                  style={{ border: '1px solid var(--ink)' }}
                >
                  <Plate project={active} />
                </div>

                <figcaption className="pt-4">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h4 className="display text-xl">{active.title}</h4>
                    <span className="meta">{active.year}</span>
                  </div>
                  <p className="text-sm soft mb-4">{active.description}</p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-5">
                    {active.technologies.map(t => (
                      <li key={t} className="meta">{t}</li>
                    ))}
                  </ul>
                  <div className="flex gap-6">
                    <a
                      href={active.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="meta meta-ink link-draw"
                    >
                      Source ↗
                    </a>
                    {active.demo && (
                      <a
                        href={active.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="meta link-draw"
                        style={{ color: 'var(--signal)' }}
                      >
                        Live demo ↗
                      </a>
                    )}
                  </div>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>

      <Fade className="mt-14">
        <a
          href="https://github.com/keshav1441"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-line"
        >
          Full repository index <span aria-hidden>↗</span>
        </a>
      </Fade>
    </section>
  );
}
