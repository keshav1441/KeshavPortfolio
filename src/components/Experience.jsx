import { motion } from "framer-motion";
const Experience = () => {
    const experiences = [
      {
        year: "July-2024 to Sept-2024",
        role: "Software Development Engineer Intern",
        company: "Devtech Consulting Services",
        description: "Designed and implemented user registration in ASP.NET Core with Entity Framework. Managed and optimized MySQL database queries, reducing data retrieval time by 30%. Enhanced the user interface through responsive design and animations using React.js and CSS frameworks.",
        technologies: ["ASP.NET Core", "Entity Framework", "MySQL", "React.js", "CSS"]
}

    ];
  
    return (<section id="Experience" className="mt-8">
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{dutation:1}} className="my-20 text-center text-4xl">Experience</motion.h1>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p whileInView={{x:0,opacity:1}} initial={{x:-50,opacity:0}} transition={{dutation:1}} className="mb-2 text-sm text-neutral-400">{experience.year}</motion.p>
            </div>
            <motion.div whileInView={{x:0,opacity:1}} initial={{x:50,opacity:0}} transition={{dutation:1}} className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} - {" "}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div></section>
    );
  };
  
  export default Experience;
  