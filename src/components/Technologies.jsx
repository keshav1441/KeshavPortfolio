import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiFastapi, SiPostgresql, SiMysql, SiTensorflow, SiTypescript, SiTailwindcss, SiGit, SiCplusplus, SiFlask, SiPytorch, SiDotnet, SiNextdotjs } from 'react-icons/si';
import { FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

// Custom C# icon component
const CSharpIcon = ({ className, size }) => (
  <div className={`${className} flex items-center justify-center`} style={{ fontSize: size }}>
    <span className="font-bold">C#</span>
  </div>
);

// PropTypes for the custom component
CSharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

// Default props
CSharpIcon.defaultProps = {
  className: '',
  size: 24
};

const iconVariant = (duration) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [10, -10],
    opacity: 1,
    transition: {
      y: {
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
      opacity: {
        duration: 0.5,
      }
    },
  },
});

// Technology data organized by categories
const techCategories = [
  {
    title: "Programming Languages",
    items: [
      {
        name: "Python",
        icon: FaPython,
        color: "text-yellow-500",
        duration: 1.0
      },
      {
        name: "Java",
        icon: FaJava,
        color: "text-orange-600",
        duration: 1.2
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "text-blue-500",
        duration: 1.3
      },
      {
        name: "C#",
        icon: CSharpIcon,
        color: "text-green-500",
        duration: 1.5
      }
    ]
  },
  {
    title: "Frontend",
    items: [
      {
        name: "React.js",
        icon: RiReactjsLine,
        color: "text-cyan-400",
        duration: 1.4
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
        duration: 1.5
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-teal-400",
        duration: 1.8
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-400",
        duration: 1.4
      }
    ]
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-600",
        duration: 1.6
      },
      {
        name: ".NET",
        icon: SiDotnet,
        color: "text-purple-500",
        duration: 1.7
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "text-teal-500",
        duration: 1.8
      },
      {
        name: "Flask",
        icon: SiFlask,
        color: "text-gray-300",
        duration: 1.5
      },
    ]
  },
  {
    title: "Databases",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
        duration: 1.2
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-600",
        duration: 1.4
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-500",
        duration: 1.6
      }
    ]
  },
  {
    title: "AI & DevOps",
    items: [
      {
        name: "TensorFlow",
        icon: SiTensorflow,
        color: "text-orange-500",
        duration: 1.0
      },
      {
        name: "PyTorch",
        icon: SiPytorch,
        color: "text-red-500",
        duration: 1.1
      },
      {
        name: "Git",
        icon: SiGit,
        color: "text-red-500",
        duration: 1.6
      }
    ]
  }
];

const Technologies = () => {
  return (
    <section id="Technologies" className="pt-20">
      <div className="border-b border-slate-800 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-center">
                <span className="gradient-text">{category.title}</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={iconVariant(tech.duration)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10"
                  >
                    <tech.icon size={40} className={`text-4xl ${tech.color}`} aria-label={tech.name} />
                    <p className="mt-4 text-center text-sm font-medium text-white">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;