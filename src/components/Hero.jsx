import React from "react";
import { FaArrowDown, FaArrowUpRightFromSquare, FaEnvelope } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="Hero" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">Software engineer · Chennai, India</p>
        <h1 id="hero-title">
          Software engineer building web applications.
        </h1>
        <p className="hero-summary">
          I&apos;m <strong>Madanraj P.</strong> I work mainly with React, Node.js, and databases,
          building web applications that are useful and straightforward to maintain.
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
      </div>

      <div className="hero-portrait-wrap">
        <div className="hero-portrait">
          <img src="/Madanraj_Profile (1).png" alt="Portrait of Madanraj P" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
