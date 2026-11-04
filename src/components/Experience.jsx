import React from "react";
const roles = [
  {
    title: "Software Engineer · MERN Stack",
    company: "Stratsyn.ai Pvt. Ltd.",
    location: "Chennai",
    dates: "Sep 2024 – Mar 2026",
    highlights: [
      "Developed scalable CRM applications for customer, lead, and contact management using React, TypeScript, Node.js, Express, and MongoDB.",
      "Built and maintained RESTful APIs with CRUD operations, reusable services, request validation, and centralized error handling.",
      "Created reusable React components, custom hooks, and API services using Redux Toolkit and Context API.",
      "Integrated PostgreSQL and MongoDB for application data retrieval, processing, and business workflows.",
      "Implemented caching for frequently accessed data and external API responses, and JWT authentication with access and refresh token flows.",
      "Applied controller–service–repository architecture and collaborated with teammates on API integrations, debugging, and application features.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "Teenofes",
    location: "Chennai",
    dates: "Mar 2022 – May 2022",
    highlights: [],
  },
];

const Experience = () => {
  return (
    <section id="Experience" className="site-section experience-section" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="eyebrow">Work history</p>
        <h2 id="experience-title">Experience</h2>
        <p className="section-description">
          From early front-end work to building and maintaining full-stack business applications.
        </p>
      </div>

      <div className="experience-timeline">
        {roles.map((role) => (
          <article
            className="experience-card"
            key={role.company}
          >
            <div className="experience-card__marker" aria-hidden="true" />
            <div className="experience-card__heading">
              <div>
                <h3>{role.title}</h3>
                <p className="experience-company">{role.company} <span>·</span> {role.location}</p>
              </div>
              <span className="experience-dates">{role.dates}</span>
            </div>
            {role.highlights.length > 0 && (
              <ul className="experience-highlights">
                {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
