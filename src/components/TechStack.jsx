import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const skillGroups = [
  { title: "Languages", skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { title: "Frontend", skills: ["React.js", "React Router", "Redux Toolkit", "Tailwind CSS", "Responsive design"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT"] },
  { title: "Databases", skills: ["PostgreSQL", "MongoDB"] },
  { title: "State & integration", skills: ["Redux Toolkit", "Context API", "Axios", "API integration"] },
  { title: "Testing", skills: ["Jest", "Supertest"] },
  { title: "Tools", skills: ["Git", "Docker", "Redis", "Swagger / OpenAPI", "Postman"] },
  { title: "Core concepts", skills: ["Layered architecture", "Design patterns", "Data structures & algorithms", "API performance", "Authentication & authorization", "Microservices fundamentals"] },
];

const TechStack = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="Skills" className="site-section skills-section" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="eyebrow">Tools of the trade</p>
        <h2 id="skills-title">Technical skills</h2>
        <p className="section-description">
          Technologies and engineering practices from my professional experience and projects.
        </p>
      </div>
      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <motion.article
            className="skill-card"
            key={group.title}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.035 }}
          >
            <h3>{group.title}</h3>
            <ul className="skill-list">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
