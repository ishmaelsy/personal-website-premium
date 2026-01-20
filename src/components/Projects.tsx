import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A clean, professional portfolio showcasing my work and skills. Built with modern web technologies and best practices.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Voting Application (coming soon)",
    description:
      "A modern web application that enables users to participate in polls and elections. Features real-time vote counting and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Manager (coming soon)",
    description:
      "A productivity app for managing daily tasks with features like adding, editing, and marking tasks as complete.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Campus Buy (coming soon)",
    description:
      "A web platform for students to buy and sell items within their campus community. Includes user authentication and item listings.",
    tech: ["HTML", "CSS", "JavaScript", "API", "Firebase", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mt-2">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of projects I've worked on to sharpen my skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card-elevated p-8 group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Folder className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground flex-grow mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
