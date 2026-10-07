import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="About"
      className="site-section about-section"
      aria-labelledby="about-title"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
    >
      <div className="section-heading">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">Good software starts with understanding the problem.</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m a software engineer with professional experience building full-stack
            applications and CRM workflows. My work spans responsive React interfaces,
            reusable APIs, authentication, and data-backed features using PostgreSQL and MongoDB.
          </p>
          <p>
            I enjoy turning requirements into maintainable software: choosing clear boundaries,
            writing reusable components and services, and working with teammates to deliver
            features that feel straightforward to use.
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
    </motion.section>
  );
};

export default About;
