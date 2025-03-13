import img1 from "../assets/projects/project-1.jpg";
import img2 from "../assets/projects/Formup.png";
import img4 from "../assets/projects/project-4.jpg";
import img5 from "../assets/projects/college_olx.jpg";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

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
      link: "https://github.com/keshav1441/Formify",
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
      link: "https://github.com/why-aditi/Financial-Advisory",
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
      image: img1,
      link: "https://github.com/keshav1441/Food-Chatbot",
      description:
        "The chatbot is fixed in the bottom-left corner of the screen, providing continuous access to users for placing orders, asking questions, and getting information about the restaurant.",
      technologies: ["Dialogflow"],
    },
  ];

  return (
    <section id="Projects">
      <div className="border-b border-neutral-900 pb-12 mx-6">
        <motion.h1 
          whileInView={{y:0, opacity:1}} 
          initial={{y:-100, opacity:0}} 
          transition={{duration:1}}  
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-700 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                
                <p className="text-neutral-400 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;