import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Responsive online shopping website built using React, CSS and JavaScript.",
      tech: "React • CSS • JavaScript",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-demo-link.com"
    },
    {
      title: "Student Management System",
      description: "A student management application to manage student records.",
      tech: "React • MySQL • Java",
      github: "https://github.com/yourusername/student-management",
      demo: "https://your-demo-link.com"
    },
    {
      title: "Portfolio Website",
      description: "Modern personal portfolio with animations and responsive design.",
      tech: "React • CSS • Vite",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-demo-link.com"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;