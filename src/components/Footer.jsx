import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa6";

const Footer = () => (
  <footer id="Contact" className="site-footer">
    <div className="footer-main">
      <div>
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let&apos;s build something useful.</h2>
        <p className="footer-copy">I&apos;m happy to talk about software engineering, product work, and new opportunities.</p>
      </div>
      <a className="button button--primary footer-cta" href="mailto:madanraj0519@gmail.com">
        Get in touch <FaEnvelope aria-hidden="true" />
      </a>
    </div>
    <div className="footer-bottom">
      <a className="brand-mark" href="/#Hero" aria-label="Back to top">
        M<span>.</span>
      </a>
      <div className="footer-contact-links">
        <a href="mailto:madanraj0519@gmail.com"><FaEnvelope aria-hidden="true" /> Email</a>
        <a href="tel:+918072441294"><FaPhone aria-hidden="true" /> +91 80724 41294</a>
        <a href="https://www.linkedin.com/in/madanraj-7b8b23232/" target="_blank" rel="noreferrer">
          <FaLinkedinIn aria-hidden="true" /> LinkedIn
        </a>
        <a href="https://github.com/Madanraj0519" target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" /> GitHub
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Madanraj P</p>
    </div>
  </footer>
);

export default Footer;
