import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Expense Tracker",
    type: "Full-stack personal finance app",
    categories: ["Full stack"],
    primaryCategory: "Full stack",
    description: "A MERN finance app for managing income and expenses, setting monthly budgets, reviewing spending insights, and exporting reports. Includes protected accounts, multiple currencies, and responsive dashboards.",
    image: "/expense-tracker-preview.svg",
    imageAlt: "Expense Tracker dashboard with a monthly spending chart and category breakdown",
    technologies: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT", "Chart.js"],
    github: "https://github.com/Madanraj0519/Expenses-Tracker",
  },
  {
    title: "Disney+ Clone",
    type: "Personal project",
    categories: ["Full stack"],
    primaryCategory: "Full stack",
    description: "A streaming-platform interface with movie discovery, trailer browsing, Redux state management, and Google sign-in using Firebase.",
    image: "/Disney-clone.png",
    imageAlt: "Disney+ clone project preview",
    technologies: ["React", "Redux", "Firebase", "TMDB API", "Tailwind CSS"],
    demo: "https://movie-streaming-app-frontend.vercel.app/",
    github: "https://github.com/Madanraj0519/Disney-clone",
  },
  {
    title: "Underdogs Gym",
    type: "Freelance project",
    categories: ["Freelance", "Full stack"],
    primaryCategory: "Freelance",
    description: "A gym website paired with an admin dashboard, designed to make the public experience engaging and day-to-day gym management straightforward.",
    image: "/underdogs.png",
    imageAlt: "Underdogs Gym website project preview",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS"],
    demo: "https://www.underdogsfitness.in/",
  },
  {
    title: "Home Page",
    type: "Freelance project",
    categories: ["Freelance", "Frontend"],
    primaryCategory: "Freelance",
    description: "A modern, responsive homepage and login experience created to give a client project a clear and engaging starting point.",
    image: "/piechips.png",
    imageAlt: "Freelance homepage project preview",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Zendesk",
    type: "Personal project",
    categories: ["Full stack"],
    primaryCategory: "Full stack",
    description: "A MERN-stack CRM and employee-tracking application with a Zendesk-inspired interface.",
    image: "/Zendesk.png",
    imageAlt: "Zendesk CRM project preview",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demo: "https://zendesk-clone.onrender.com/",
    github: "https://github.com/Madanraj0519/ZenDesk",
  },
  {
    title: "Note-App",
    type: "Personal project",
    categories: ["Full stack"],
    primaryCategory: "Full stack",
    description: "A full-stack notes app for creating, editing, finding, and deleting notes, built with the MERN stack.",
    image: "/Note-app.png",
    imageAlt: "Note-taking application project preview",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demo: "https://my-note-app-two.vercel.app/",
    github: "https://github.com/Madanraj0519/Note-app",
  },
  {
    title: "Portfolio Site",
    type: "Personal project",
    categories: ["Frontend"],
    primaryCategory: "Frontend",
    description: "An earlier version of my portfolio, built to bring my background, technical skills, and selected projects together in one place.",
    image: "/Port-folio.png",
    imageAlt: "Earlier portfolio site project preview",
    technologies: ["React", "Tailwind CSS"],
    demo: "https://new-madanraj-portfolio.vercel.app/",
    github: "https://github.com/Madanraj0519/New-Madanraj-Portfolio",
  },
  {
    title: "E-commerce website",
    type: "Personal project",
    categories: ["Frontend"],
    primaryCategory: "Frontend",
    description: "A product-shopping experience that uses Redux Toolkit and asynchronous API requests to manage and load application data.",
    image: "/e-commerce.png",
    imageAlt: "E-commerce website project preview",
    technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
    demo: "https://e-commerce-website-phi-seven.vercel.app/",
    github: "https://github.com/Madanraj0519/e-commerce-website-redux",
  },
];

const filters = ["All", "Freelance", "Full stack", "Frontend"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const reduceMotion = useReducedMotion();
  const visibleProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="Project" className="site-section projects-section" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-title">Projects</h2>
        <p className="section-description">
          A selection of personal and freelance work, from full-stack apps to front-end experiences.
        </p>
      </div>

      <div className="project-filters" role="group" aria-label="Filter projects by type">
        {filters.map((filter) => (
          <button
            className={`filter-button${activeFilter === filter ? " filter-button--active" : ""}`}
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
        <span className="project-count" aria-live="polite">
          {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.42, delay: reduceMotion ? 0 : (index % 3) * 0.06 }}
          >
            {project.image ? (
              <div className="project-image">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </div>
            ) : (
              <div className="project-case-visual" aria-label="Professional case study">
                <span className="project-case-visual__code" aria-hidden="true">{"</>"}</span>
                <span className="project-case-visual__flow">UI <span>→</span> API <span>→</span> Data</span>
                <span className="project-case-visual__caption">Professional case study</span>
              </div>
            )}
            <div className="project-card__body">
              <div className="project-card__meta">
                <span>{project.type}</span>
                {project.primaryCategory && (
                  <span className="project-category">{project.primaryCategory}</span>
                )}
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              {(project.demo || project.github) && (
                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live project <FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>
                      <FaGithub aria-hidden="true" /> Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
