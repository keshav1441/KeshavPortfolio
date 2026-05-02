import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import {
  SiMongodb, SiFastapi, SiPostgresql, SiMysql, SiTensorflow,
  SiTypescript, SiTailwindcss, SiGit, SiCplusplus, SiFlask,
  SiPytorch, SiDotnet, SiNextdotjs,
} from 'react-icons/si';
import { FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Glass } from './ui/Glass';

const CSharpIcon = ({ size }) => (
  <span className="font-mono font-bold" style={{ fontSize: size }}>C#</span>
);
CSharpIcon.propTypes = { size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]) };
CSharpIcon.defaultProps = { size: 36 };

const CATEGORIES = [
  {
    title: 'Languages',
    span: 'col-span-2',
    items: [
      { name: 'Python',     Icon: FaPython,     color: '#eab308' },
      { name: 'Java',       Icon: FaJava,       color: '#ea580c' },
      { name: 'C++',        Icon: SiCplusplus,  color: '#3b82f6' },
      { name: 'C#',         Icon: CSharpIcon,   color: '#22c55e' },
    ],
  },
  {
    title: 'Frontend',
    span: 'col-span-2',
    items: [
      { name: 'React',      Icon: RiReactjsLine, color: '#22d3ee' },
      { name: 'Next.js',    Icon: SiNextdotjs,  color: '#ffffff' },
      { name: 'Tailwind',   Icon: SiTailwindcss, color: '#2dd4bf' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#60a5fa' },
    ],
  },
  {
    title: 'Backend',
    span: 'col-span-1',
    items: [
      { name: 'Node.js',  Icon: FaNodeJs,  color: '#16a34a' },
      { name: '.NET',     Icon: SiDotnet,  color: '#a855f7' },
      { name: 'FastAPI',  Icon: SiFastapi, color: '#14b8a6' },
      { name: 'Flask',    Icon: SiFlask,   color: '#d1d5db' },
    ],
  },
  {
    title: 'Databases',
    span: 'col-span-1',
    items: [
      { name: 'MongoDB',    Icon: SiMongodb,    color: '#22c55e' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#2563eb' },
      { name: 'MySQL',      Icon: SiMysql,      color: '#3b82f6' },
    ],
  },
  {
    title: 'AI & DevOps',
    span: 'col-span-2',
    items: [
      { name: 'TensorFlow', Icon: SiTensorflow, color: '#f97316' },
      { name: 'PyTorch',    Icon: SiPytorch,    color: '#ef4444' },
      { name: 'Git',        Icon: SiGit,        color: '#ef4444' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Technologies() {
  return (
    <section id="Technologies" className="pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        My <span className="accent-text">Skills</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center max-w-xl mx-auto mb-16 text-sm"
        style={{ color: 'var(--text-muted)' }}
      >
        Technologies and tools I work with
      </motion.p>

      <div className="space-y-10 max-w-5xl mx-auto">
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: ci * 0.08 }}
          >
            {/* Category label */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-mono font-semibold px-3 py-1 rounded-full border"
                style={{ color: 'var(--accent-1)', borderColor: 'var(--border-glass)', background: 'var(--bg-glass)' }}
              >
                {cat.title}
              </span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-glass)' }} />
            </div>

            {/* Tech grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cat.items.map(({ name, Icon, color }) => (
                <motion.div key={name} variants={fadeUp}>
                  <Glass
                    className="p-5 flex flex-col items-center gap-3 cursor-default group"
                    style={{ transition: 'transform 0.2s, box-shadow 0.2s' }}
                  >
                    <div
                      className="text-4xl transition-transform duration-300 group-hover:rotate-[15deg]"
                      style={{ color }}
                    >
                      <Icon size={38} />
                    </div>
                    <p
                      className="text-xs font-mono font-medium text-center"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {name}
                    </p>
                  </Glass>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
