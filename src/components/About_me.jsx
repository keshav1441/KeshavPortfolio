import { motion } from 'framer-motion';
import aboutImg from '../assets/aboutkeshav.jpg';
import { Glass } from './ui/Glass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faRobot, faDatabase } from '@fortawesome/free-solid-svg-icons';

const KEY_AREAS = [
  {
    icon: faCode,
    title: 'Frontend',
    desc: 'Responsive, interactive UIs with React, Tailwind CSS, and modern JavaScript.',
  },
  {
    icon: faServer,
    title: 'Backend',
    desc: 'Robust APIs with Node.js, FastAPI, and Express. Scalable server architecture.',
  },
  {
    icon: faRobot,
    title: 'AI & ML',
    desc: 'Intelligent solutions using TensorFlow, PyTorch, LangChain, and RAG pipelines.',
  },
  {
    icon: faDatabase,
    title: 'Databases',
    desc: 'SQL & NoSQL expertise across MySQL, PostgreSQL, and MongoDB.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="About_me" className="pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        About <span className="accent-text">Me</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center max-w-xl mx-auto mb-16 text-sm"
        style={{ color: 'var(--text-muted)' }}
      >
        Background, skills, and what drives me as a developer
      </motion.p>

      {/* Bio + photo row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center mb-20">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:col-span-2"
        >
          <div className="relative">
            <Glass
              className="p-2"
              style={{ transform: 'rotate(-3deg)', display: 'inline-block' }}
            >
              <img
                src={aboutImg}
                alt="Keshav Sharma"
                className="rounded-xl w-64 h-auto object-cover"
              />
            </Glass>
            <div
              className="absolute -inset-4 -z-10 blur-2xl opacity-20 rounded-full"
              style={{ background: `radial-gradient(circle, var(--accent-3), transparent 70%)` }}
              aria-hidden
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 lg:col-span-3"
          style={{ color: 'var(--text-primary)' }}
        >
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            I&apos;m pursuing my Bachelor&apos;s in Computer Science Engineering at the Indian Institute of
            Information Technology, Pune. As a passionate Full Stack Developer with expertise in Python
            and AI, I&apos;ve built strong skills across React.js, Node.js, FastAPI, MySQL, and MongoDB.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Over the past 3 years, I&apos;ve focused on building scalable, high-performance web applications
            and leveraging AI to deliver cutting-edge features — from intelligent chatbots to computer
            vision systems that operate at scale.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Alongside web development, I work with TensorFlow and PyTorch for data-driven solutions.
            I continually explore new tools to stay ahead in the field.
          </p>
          <div className="pt-2">
            <a href="#Contact" className="btn-accent">Get In Touch</a>
          </div>
        </motion.div>
      </div>

      {/* Key areas */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-2xl font-display font-semibold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
          Key <span className="accent-text">Areas</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_AREAS.map((area) => (
            <motion.div key={area.title} variants={fadeUp}>
              <Glass
                className="p-6 flex flex-col items-center text-center h-full cursor-default transition-transform duration-200 hover:scale-[1.04]"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl"
                  style={{ background: 'rgba(var(--accent-1-rgb, 0,255,224), 0.1)', color: 'var(--accent-1)' }}
                >
                  <FontAwesomeIcon icon={area.icon} style={{ color: 'var(--accent-1)' }} />
                </div>
                <h4 className="font-display font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{area.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{area.desc}</p>
              </Glass>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
