import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

const About = () => {
  return (
    <section
      id="About"
      className="site-section about-section"
      aria-labelledby="about-title"
    >
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2 id="about-title">A bit about me</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m a software engineer with experience building full-stack applications and CRM
            features. I&apos;ve worked on React interfaces, REST APIs, authentication, and
            applications backed by PostgreSQL and MongoDB.
          </p>
          <p>
            I like working through a problem, understanding what the feature needs to do, and
            building it in a way that is clear to use and maintain.
          </p>
          <a className="text-link" href="/#Experience">
            A closer look at my experience <span aria-hidden="true">↗</span>
          </a>
        </div>
        <aside className="education-card" aria-label="Education">
          <span className="education-card__icon"><FaGraduationCap aria-hidden="true" /></span>
          <p className="eyebrow">Education</p>
          <h3>B.E. in Computer Engineering</h3>
          <p>Vels Institute of Science, Technology &amp; Advanced Studies</p>
          <div className="education-card__meta">
            <span>Chennai</span><span>May 2023</span><span>CGPA 7.42</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
