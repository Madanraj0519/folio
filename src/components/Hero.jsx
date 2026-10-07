import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowDown, FaArrowUpRightFromSquare, FaEnvelope, FaStar } from "react-icons/fa6";

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
        <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> SOFTWARE ENGINEER · CHENNAI, INDIA</p>
        <h1 id="hero-title">
          I build <span className="hero-highlight">digital</span>
          <br className="hero-title-break" /> things that
          <br /> <span className="hero-outline">just work.</span>
        </h1>
        <p className="hero-summary">
          Hey, I&apos;m <strong>Madanraj P.</strong> I turn complex ideas into thoughtful,
          full-stack experiences — from the first line of interface to the last API request.
        </p>

        <div className="hero-actions">
          <a className="button button--primary" href="/Madanraj_P_CV.pdf" download="Madanraj-P-CV.pdf">
            Download CV <FaArrowDown aria-hidden="true" />
          </a>
          <a className="button button--outline" href="/#Project">
            Explore my work <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </div>

        <a className="hero-email" href="mailto:madanraj0519@gmail.com">
          <FaEnvelope aria-hidden="true" /> madanraj0519@gmail.com <span aria-hidden="true">↗</span>
        </a>
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
          <span className="portrait-note__icon" aria-hidden="true"><FaStar /></span>
          <span><strong>Full-stack engineer</strong><small>Building for the real world</small></span>
        </div>
        <div className="portrait-index"><span>01</span> / ENGINEERING</div>
        <span className="portrait-orbit portrait-orbit--one" aria-hidden="true" />
        <span className="portrait-orbit portrait-orbit--two" aria-hidden="true" />
      </motion.div>
    </section>
  );
};

export default Hero;
