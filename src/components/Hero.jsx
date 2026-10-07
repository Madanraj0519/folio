import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowDown, FaArrowUpRightFromSquare, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="Hero" className="hero-section" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <p className="eyebrow"><span className="eyebrow-dot" /> Software Engineer · MERN Stack</p>
        <h1 id="hero-title">
          Building reliable software, <span>one thoughtful experience at a time.</span>
        </h1>
        <p className="hero-summary">
          I&apos;m Madanraj P, a software engineer who builds full-stack web applications with
          React, TypeScript, Node.js, and MongoDB. I care about clean architecture, useful
          product experiences, and software that is easy to maintain.
        </p>

        <div className="hero-actions">
          <a className="button button--primary" href="/Madanraj_P_CV.pdf" download="Madanraj-P-CV.pdf">
            Download CV <FaArrowDown aria-hidden="true" />
          </a>
          <a className="button button--outline" href="/#Project">
            Explore my work <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </div>

        <div className="hero-contact">
          <a href="mailto:madanraj0519@gmail.com">
            <FaEnvelope aria-hidden="true" /> madanraj0519@gmail.com
          </a>
          <span><FaLocationDot aria-hidden="true" /> Chennai, India</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-portrait-wrap"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12 }}
      >
        <div className="portrait-grid" aria-hidden="true" />
        <div className="hero-portrait">
          <img src="/Madanraj_Profile (1).png" alt="Portrait of Madanraj P" />
        </div>
        <div className="portrait-note">
          <span className="portrait-note__icon" aria-hidden="true">{"</>"}</span>
          <span><strong>Full-stack developer</strong><small>From interface to API</small></span>
        </div>
        <span className="portrait-orbit portrait-orbit--one" aria-hidden="true" />
        <span className="portrait-orbit portrait-orbit--two" aria-hidden="true" />
      </motion.div>
    </section>
  );
};

export default Hero;
