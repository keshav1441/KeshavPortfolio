import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiFastapi, SiPostgresql, SiMysql, SiTensorflow } from 'react-icons/si';
import { FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { motion } from "framer-motion";

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

// Technology data with consistent styling
const technologies = [
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
    name: "React.js",
    icon: RiReactjsLine,
    color: "text-cyan-400",
    duration: 1.4
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
    duration: 1.6
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "text-teal-500",
    duration: 1.8
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "text-orange-500",
    duration: 1.0
  },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={iconVariant(tech.duration)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-slate-800/50 rounded-xl border border-slate-700 p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10"
            >
              <tech.icon size={50} className={`text-5xl ${tech.color}`} aria-label={tech.name} />
              <p className="mt-4 text-center text-sm font-medium text-white">{tech.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["HTML/CSS", "Tailwind CSS", "Git", "Docker", "AWS", "Redux", "TypeScript", "PyTorch", "Express.js", "REST API"].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-slate-800 text-sm rounded-full border border-slate-700 text-slate-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;