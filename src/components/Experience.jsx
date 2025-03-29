import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      year: "Dec-2024 to Mar-2025",
      role: "Artificial Intelligence Intern",
      company: "Soven Developers",
      description: "Developed a medical chatbot using Groq APIs to process medical reports and images. Improved chatbot accuracy by applying NLP techniques for medical terminology. Ensured the chatbot complies with medical regulations and provides accurate, ethical responses.",
      technologies: ["Groq", "NLP", "TensorFlow", "Python"]
    },
    {
      year: "July-2024 to Sep-2024",
      role: "Software Development Engineer Intern",
      company: "Devtech Consulting Services",
      description: "Designed and implemented user registration in ASP.NET Core with Entity Framework. Managed and optimized MySQL database queries, reducing data retrieval time by 30%. Enhanced the user interface through responsive design and animations using React.js and CSS frameworks.",
      technologies: ["ASP.NET Core", "Entity Framework", "MySQL", "React.js", "CSS"]
    }
  ];

  return (
    <section id="Experience" className="pt-20">
      <div className="border-b border-slate-800 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            My professional journey and roles
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[7px] top-[30px] bottom-[-30px] w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600 opacity-30"></div>
              )}
              
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="mt-1.5 flex-shrink-0">
                  <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <span className="text-sm text-slate-400 md:text-right">
                      {experience.year}
                    </span>
                  </div>
                  
                  <p className="text-teal-400 font-medium mb-3">
                    {experience.company}
                  </p>
                  
                  <p className="mb-4 text-slate-300">
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 text-sm font-medium rounded-full bg-slate-800 text-teal-400 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
  