import img1 from "../assets/projects/project-1.jpg";
import img2 from "../assets/projects/project-2.jpg";
import img4 from "../assets/projects/project-4.jpg";
import img5 from "../assets/projects/college_olx.jpg";
import { motion } from "framer-motion";

const imgd = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const desd = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Projects = () => {
  const PROJECTS = [
    {
      title: "Formify - Form Builder",
      image: img2,
      description:
        "A drag-and-drop form builder for creating dynamic, customizable forms with real-time preview, built using React, TypeScript, PostgreSQL, Prisma, Dnd-Kit, and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Dnd-Kit", "PostgreSQL", "Prisma", "Tailwind CSS"],
    },
    {
      title: "AI Financial Advisory",
      image: img4,
      description:
        "An AI-powered financial advisory platform offering spending insights, savings projections, and chatbot-driven advice, leveraging Azure Cognitive Services, OpenAI, and interactive dashboards.",
      technologies: ["MERN Stack", "Git", "Microsoft Azure OpenAI"],
      timeline: "Jul 2024 – Present",
    },
    {
      title: "College OLX",
      image: img5,
      description:
        "A platform for students to buy and sell goods with features like browsing, secure transactions, and seamless user registration, built using Django and React.js.",
      technologies: ["Django", "React.js", "Bootstrap"],
      timeline: "Feb 2024",
    },
    {
      title: "AI Web Scraper",
      image: img1,
      description:
        "A Python-based web scraper using Beautiful Soup to extract, clean, and process data efficiently from multiple websites for analysis and research purposes.",
      technologies: ["Python", "Beautiful Soup", "Selenium"],
    },
  ];

  return (
    <section id="Projects">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{dutation:1}}  className="my-20 text-center text-4xl">Projects</motion.h1>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              variants={imgd(0.2 * index)}
              initial="hidden"
              whileInView="visible"
            >
              <img
                 src={project.image}
                 width={150}
                 height={150}
                 alt={project.title}
                 className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              variants={desd(0.2 * index)}
              initial="hidden"
              whileInView="visible"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
