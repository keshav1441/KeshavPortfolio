import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Glass } from './ui/Glass';

import img1  from '../assets/projects/project-1.png';
import img2  from '../assets/projects/Formup.png';
import img4  from '../assets/projects/FA[1].png';
import img5  from '../assets/projects/college_olx.jpg';
import img6  from '../assets/projects/image.png';
import img7  from '../assets/projects/planit.png';
import img8  from '../assets/projects/movierecommender.jpg';
import img9  from '../assets/projects/autodriving.jpg';
import img10 from '../assets/projects/PDF-chat-assistant.png';

const PROJECTS = [
  {
    title: 'FormUp — Form Builder',
    image: img2,
    link: 'https://github.com/keshav1441/FormUp',
    description: 'Drag-and-drop form builder with real-time preview, built using Next.js, TypeScript, PostgreSQL, Prisma, Dnd-Kit, and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Dnd-Kit', 'PostgreSQL', 'Prisma'],
    category: 'Frontend',
    featured: true,
  },
  {
    title: 'A2K Financial Advisory',
    image: img4,
    link: 'https://github.com/keshav1441/Financial-Advisory',
    description: 'AI-powered financial advisory platform with spending insights, savings projections, and chatbot-driven advice via Google Gemini.',
    technologies: ['MERN Stack', 'Google Gemini'],
    category: 'Frontend',
  },
  {
    title: 'RAG PDF Chat Assistant',
    image: img10,
    link: 'https://github.com/keshav1441/RAG-PDF-chat-assistant',
    description: 'File-based chatbot using Retrieval-Augmented Generation. Upload PDFs and chat with their content. FastAPI + React + LangChain.',
    technologies: ['FastAPI', 'React', 'LangChain', 'Google Gemini'],
    category: 'Backend',
  },
  {
    title: 'PlanIt — Task Manager',
    image: img7,
    link: 'https://github.com/keshav1441/PlanIt',
    description: 'Full-stack collaborative task management with role-based access control, team dashboards, priority tagging, and real-time progress tracking.',
    technologies: ['MERN Stack', 'Git'],
    category: 'Backend',
  },
  {
    title: 'Autonomous Vehicle Segmentation',
    image: img9,
    link: 'https://www.kaggle.com/code/aditishere/btp-test',
    description: 'Semantic segmentation using U-Net architecture achieving 76% accuracy in classifying critical objects in complex traffic scenes.',
    technologies: ['Python', 'PyTorch', 'Pandas', 'NumPy'],
    category: 'AI/ML',
  },
  {
    title: 'Movie Recommendation System',
    image: img8,
    link: 'https://github.com/keshav1441/Personalized-movie-recommendation-system',
    description: 'Collaborative filtering-based recommendation engine. Predicts movie ratings and recommends top titles based on user similarity.',
    technologies: ['C++', 'Git'],
    category: 'AI/ML',
  },
  {
    title: 'Diabetic Retinopathy Detection',
    image: img1,
    link: 'https://github.com/keshav1441/Diabetic-Retinopathy',
    description: 'Deep learning classification of retinal images with 82% accuracy using DenseNet-201 architecture.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    category: 'AI/ML',
  },
  {
    title: 'College OLX',
    image: img5,
    link: 'https://github.com/keshav1441/College-olx',
    description: 'Campus marketplace for buying and selling goods, with browsing, secure transactions, and seamless user registration.',
    technologies: ['Django', 'React.js', 'Bootstrap'],
    category: 'Frontend',
  },
  {
    title: 'Food Chatbot',
    image: img6,
    link: 'https://github.com/keshav1441/Food-Chatbot',
    description: 'Persistent chatbot widget for restaurant ordering — allows customers to place orders and get menu info in real time.',
    technologies: ['Dialogflow'],
    category: 'Backend',
  },
];

const FILTERS = ['All', 'Frontend', 'Backend', 'AI/ML'];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="Projects" className="pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        My <span className="accent-text">Projects</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center max-w-xl mx-auto mb-8 text-sm"
        style={{ color: 'var(--text-muted)' }}
      >
        Showcasing my work and technical expertise
      </motion.p>

      {/* Filter bar */}
      <div className="flex justify-center gap-2 flex-wrap mb-12">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              background: filter === f ? 'var(--accent-1)' : 'var(--bg-glass)',
              color: filter === f ? 'var(--bg-primary)' : 'var(--text-muted)',
              border: `1px solid ${filter === f ? 'var(--accent-1)' : 'var(--border-glass)'}`,
              backdropFilter: 'blur(8px)',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={project.featured ? 'lg:col-span-2' : ''}
            >
              <Glass className="overflow-hidden h-full flex flex-col group cursor-default">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{ background: 'rgba(var(--bg-primary-rgb, 5,8,16), 0.88)', backdropFilter: 'blur(8px)' }}
                  >
                    <p className="text-sm text-center px-4" style={{ color: 'var(--text-primary)' }}>
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
                      style={{ background: 'var(--accent-1)', color: 'var(--bg-primary)' }}
                      onClick={e => e.stopPropagation()}
                    >
                      <FaGithub size={14} /> View Code
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-display font-semibold text-base leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub for ${project.title}`}
                      style={{ color: 'var(--accent-1)', flexShrink: 0 }}
                      className="hover:opacity-70 transition-opacity mt-0.5"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  </div>

                  <p className="text-xs leading-relaxed mb-4 flex-grow line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map(t => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-0.5 rounded-full"
                        style={{ color: 'var(--accent-1)', background: 'var(--bg-secondary)', border: '1px solid var(--border-glass)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Glass>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* GitHub link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mt-12"
      >
        <a
          href="https://github.com/keshav1441"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass flex items-center gap-2"
        >
          <FaGithub /> View More on GitHub <FaExternalLinkAlt size={12} />
        </a>
      </motion.div>
    </section>
  );
}
