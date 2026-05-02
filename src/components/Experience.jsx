import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Glass } from './ui/Glass';

const EXPERIENCES = [
  {
    year: 'Jun 2025 – Present',
    role: 'Software Engineer Intern',
    company: 'AI Assistant',
    description:
      'Integrated AI agents with Salesforce and Zoho CRM for seamless data sync and lead management. Built a scalable job listing platform aggregating opportunities from 1,000+ companies, featuring real-time updates, efficient search and filtering. Developed AI customer agents to automate SMS and email outreach, improving engagement and efficiency.',
    technologies: ['AI', 'Salesforce', 'Zoho CRM', 'SMS', 'Email Automation', 'Real-time Systems'],
  },
  {
    year: 'Dec 2024 – Mar 2025',
    role: 'Artificial Intelligence Intern',
    company: 'Soven Developers',
    description:
      'Developed a medical chatbot using Groq APIs to process medical reports and images. Improved chatbot accuracy by applying NLP techniques for medical terminology. Ensured the chatbot complies with medical regulations and provides accurate, ethical responses.',
    technologies: ['Groq', 'NLP', 'TensorFlow', 'Python'],
  },
  {
    year: 'Jul 2024 – Sep 2024',
    role: 'Software Development Engineer Intern',
    company: 'Devtech Consulting Services',
    description:
      'Designed and implemented user registration in ASP.NET Core with Entity Framework. Managed and optimized MySQL database queries, reducing data retrieval time by 30%. Enhanced the user interface through responsive design and animations using React.js and CSS frameworks.',
    technologies: ['ASP.NET Core', 'Entity Framework', 'MySQL', 'React.js', 'CSS'],
  },
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const spineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="Experience" className="pt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        Work <span className="accent-text">Experience</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center max-w-xl mx-auto mb-16 text-sm"
        style={{ color: 'var(--text-muted)' }}
      >
        My professional journey and roles
      </motion.p>

      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        {/* Animated spine */}
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px hidden md:block" aria-hidden>
          <motion.div
            className="w-full h-full origin-top"
            style={{ scaleY: spineScaleY, background: 'var(--accent-1)', opacity: 0.25 }}
          />
        </div>

        {EXPERIENCES.map((exp, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`relative flex mb-12 ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
            >
              {/* Connector dot */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full hidden md:block z-10"
                style={{ background: 'var(--accent-1)', boxShadow: '0 0 8px var(--accent-1)' }}
                aria-hidden
              />

              <div className={`w-full md:w-[46%] ${isLeft ? '' : ''}`}>
                <Glass className="p-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--accent-1)' }}>
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full self-start whitespace-nowrap"
                      style={{ color: 'var(--text-muted)', background: 'var(--bg-secondary)', border: '1px solid var(--border-glass)' }}
                    >
                      {exp.year}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(t => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-0.5 rounded-full"
                        style={{
                          color: 'var(--accent-1)',
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border-glass)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Glass>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
