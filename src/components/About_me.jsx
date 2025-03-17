import aboutImg from "../assets/about.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faRobot, faDatabase } from '@fortawesome/free-solid-svg-icons';

// The data string split into two paragraphs for readability
const data1 = `I'm pursuing my Bachelor's in Computer Science Engineering at the Indian Institute of Information Technology, Pune. As a passionate Full Stack Developer with expertise in Python and AI, I've developed strong skills in front-end and back-end technologies such as React.js, Node.js, FastAPI, MySQL, and MongoDB.`;

const data2 = `Over the past 3 years, I've focused on building scalable, high-performance web applications and leveraging AI to deliver cutting-edge features. I specialize in creating efficient back-end systems with FastAPI and am eager to embrace new challenges in technology.`;

const data3 = `Alongside my web development experience, I'm deeply involved in machine learning, having worked with Python frameworks like TensorFlow and PyTorch to implement data-driven solutions. I continually explore new tools and technologies to stay ahead in the field.`;

// Key skills/interests
const keyAreas = [
  {
    icon: faCode,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, Tailwind CSS, and modern JavaScript."
  },
  {
    icon: faServer,
    title: "Backend Development",
    description: "Creating robust APIs and server-side applications using Node.js, FastAPI, and Express."
  },
  {
    icon: faRobot,
    title: "AI & Machine Learning",
    description: "Implementing intelligent solutions with TensorFlow, PyTorch, and other ML frameworks."
  },
  {
    icon: faDatabase,
    title: "Database Design",
    description: "Working with SQL and NoSQL databases including MySQL, PostgreSQL, and MongoDB."
  }
];

// The About component
const About = () => {
  return (
    <section id="About_me" className="pt-20">
      <div className="border-b border-slate-800 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            My background, skills, and what drives me as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left section - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur opacity-30"></div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-2">
                <img
                  className="rounded-xl max-w-sm w-full h-auto"
                  src={aboutImg}
                  alt="Keshav Sharma"
                />
              </div>
            </div>
          </motion.div>

          {/* Right section - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-slate-300">{data1}</p>
              <p className="text-lg text-slate-300">{data2}</p>
              <p className="text-lg text-slate-300">{data3}</p>
            </div>

            <div className="pt-4">
              <a
                href="#Contact"
                className="btn-primary"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Key areas section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Key <span className="gradient-text">Areas</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-600/20 mb-4">
                    <FontAwesomeIcon icon={area.icon} className="text-xl gradient-text" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">{area.title}</h4>
                  <p className="text-sm text-slate-400">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
