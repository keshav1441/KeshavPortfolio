import img1 from "../assets/projects/project-1.png";
import img2 from "../assets/projects/Formup.png";
import img4 from "../assets/projects/FA[1].png";
import img5 from "../assets/projects/college_olx.jpg";
import img6 from "../assets/projects/image.png";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.5,
      delay: i * 0.1
    }
  })
};

const Projects = () => {
  const PROJECTS = [
    {
      title: "FormUp - Form Builder",
      image: img2,
      link: "https://github.com/keshav1441/FormUp",
      description:
        "A drag-and-drop form builder for creating dynamic, customizable forms with real-time preview, built using React, TypeScript, PostgreSQL, Prisma, Dnd-Kit, and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Dnd-Kit", "PostgreSQL", "Prisma", "Tailwind CSS"],
    },
    {
      title: "Diabetic Retinopathy Detection",
      image: img1,
      link: "https://github.com/why-aditi/Diabetic-Retinopathy",
      description:
        "Diabetic Retinopathy Detection: A deep learning approach utilizing DenseNet-201 architecture to classify retinal images with 80% accuracy.",
      technologies: ["Python", "Tensorflow", "Pandas","Numpy"],
    },
    {
      title: "A2K Financial Advisory",
      image: img4,
      link: "https://github.com/keshav1441/Financial-Advisory",
      description:
      "An AI-powered financial advisory platform offering spending insights, savings projections, and chatbot-driven advice, leveraging Azure Cognitive Services, OpenAI, and interactive dashboards.",
      technologies: ["MERN Stack", "Git", "Google Gemini"],
      timeline: "Jul 2024 – Present",
    },
    {
      title: "College OLX",
      image: img5,
      link: "https://github.com/keshav1441/College-olx",
      description:
      "A platform for students to buy and sell goods with features like browsing, secure transactions, and seamless user registration, built using Django and React.js.",
      technologies: ["Django", "React.js", "Bootstrap"],
      timeline: "Feb 2024",
    },
    {
      title: "PlanIt",
      image: img1,
      link: "https://github.com/keshav1441/Collaborative-Task-Management-System",
      description:
        "A full-stack collaborative task management platform with role-based access control.",
      technologies: ["MERN Stack", "Git"],
    },
    {
      title: "Movie Recommendation System",
      image: img1,
      link: "https://github.com/keshav1441/Personalized-movie-recommendation-system",
      description:
        "A collaborative filtering-based movie recommendation system. It predicts movie ratings for users and recommends top-rated movies based on user similarities.",
      technologies: ["C++", "Git"],
    },
    {
      title: "Food Chatbot",
      image: img6,
      link: "https://github.com/keshav1441/Food-Chatbot",
      description:
        "The chatbot is fixed in the bottom-left corner of the screen, providing continuous access to users for placing orders, asking questions, and getting information about the restaurant.",
      technologies: ["Dialogflow"],
    },
  ];

  return (
    <section id="Projects" className="pt-20">
      <div className="border-b border-slate-800 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Showcasing my work and technical expertise
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-slate-800/50 rounded-xl overflow-hidden shadow-lg flex flex-col h-full border border-slate-700 hover:border-teal-500/30 transition-all duration-300 hover:shadow-md hover:shadow-teal-500/10"
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                
                <p className="text-slate-300 mb-4 flex-grow text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-slate-700/70 text-teal-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <a 
            href="https://github.com/keshav1441" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-secondary"
          >
            <FaGithub /> View More on GitHub <FaExternalLinkAlt size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;