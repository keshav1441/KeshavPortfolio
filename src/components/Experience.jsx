const Experience = () => {
    const experiences = [
      {
        year: "2022-2023",
        role: "Software Developer",
        company: "TechCorp",
        description: "Developed web applications using React and Node.js, focusing on user experience and scalability.",
        technologies: ["React", "Node.js", "JavaScript", "CSS"]
      },
      {
        year: "2021-2022",
        role: "Backend Developer",
        company: "DataSystems",
        description: "Worked on database management and API development, ensuring high availability and performance.",
        technologies: ["Python", "PostgreSQL", "Django"]
      },
      {
        year: "2020-2021",
        role: "Junior Developer",
        company: "WebSolutions",
        description: "Assisted in building and maintaining web applications with a focus on frontend development.",
        technologies: ["HTML", "CSS", "JavaScript"]
      },
      {
        year: "2019-2020",
        role: "Intern Developer",
        company: "CodeBase",
        description: "Assisted in testing and debugging web applications while learning modern web technologies.",
        technologies: ["JavaScript", "React"]
      }
    ];
  
    return (<section id="Experience" className="mt-8">
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Experience</h1>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
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
            </div>
          </div>
        ))}
      </div></section>
    );
  };
  
  export default Experience;
  