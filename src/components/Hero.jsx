import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import profilepic from "../assets/Herophoto.jpg";

const Hero = () => {
  return (
    <section id="Hero" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-sm sm:text-base text-slate-400 font-medium mb-2">
                Hello, I&apos;m
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
                Keshav Sharma
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl gradient-text font-medium">
                Full-Stack Developer & AI Expert
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-slate-300 text-lg max-w-xl"
            >
              I am a passionate Full Stack Developer with expertise in Python, AI, and FastAPI. With 3+ years of experience, I build scalable web applications using React.js, Node.js, MySQL, and MongoDB, leveraging AI for innovative solutions. I specialize in crafting high-performance back-end systems and thrive on tackling new tech challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#Projects"
                className="btn-primary"
              >
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1SATFVM6n0HEzkzD0hKsBsEPEj4jhz3E5/view?usp=sharing" 
                download
                className="btn-secondary flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faFileArrowDown} /> Resume
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur opacity-70"></div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-2">
              <img
                src={profilepic}
                alt="Keshav Sharma"
                className="w-full max-w-md h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex justify-center mt-16"
      >
        <a
          href="#About_me"
          className="flex flex-col items-center text-slate-400 hover:text-teal-400 transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
