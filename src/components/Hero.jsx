import { motion } from "framer-motion"; // Correct import
import profilepic from "../assets/DSC_0488.png";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  visible1: { x: 10, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <section id="Hero">
      <div className="border-b border-neutral-900 pb-4 lg:mb-35 ml-6">
        <div className="flex flex-wrap">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible1"
                className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              >
                Keshav Sharma
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible1"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              >
                Full-Stack Developer | Python & AI Expert
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible1"
                className="my-2 max-w-xl py-6 font-light"
              >
                I am a passionate Full Stack Developer with expertise in Python
                and AI. Over the past 3 years, I’ve developed strong skills in
                front-end and back-end technologies like React.js, Node.js,
                FastAPI, MySQL, and MongoDB, enabling me to build scalable,
                high-performance web applications. I focus on creating
                innovative solutions that drive growth and leverage AI to
                deliver cutting-edge features. With expertise in FastAPI, I
                craft efficient back-end systems that support modern web
                architectures and am always eager to embrace new challenges in
                technology.
              </motion.p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
                src={profilepic}
                alt="Keshav Sharma"
                className="max-w-md rounded-lg"
                initial={{ x: 100, opacity: 0} }
                animate={{x: 0, opacity: 1, transition: { duration: 0.5, delay: 1.3 } }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
