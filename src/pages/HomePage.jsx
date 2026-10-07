import React from "react";
import "./Home.css";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import { useShowMode } from "../DarkMode";

const HomePage = () => {
  const { isShowDark } = useShowMode();

  return (
    <div className={`portfolio-app ${isShowDark ? "theme-dark" : "theme-light"}`}>
      <Header />
      <main className="page-content">
        <Hero />
        <div className="tech-ribbon" aria-label="Technologies I work with">
          <div className="tech-ribbon__track">
            <span>React</span><i>✳</i><span>TypeScript</span><i>✳</i><span>Node.js</span><i>✳</i>
            <span>MongoDB</span><i>✳</i><span>PostgreSQL</span><i>✳</i><span>REST APIs</span><i>✳</i>
            <span>Redux Toolkit</span><i>✳</i>
            <span aria-hidden="true">React</span><i aria-hidden="true">✳</i>
            <span aria-hidden="true">TypeScript</span><i aria-hidden="true">✳</i>
            <span aria-hidden="true">Node.js</span><i aria-hidden="true">✳</i>
            <span aria-hidden="true">MongoDB</span><i aria-hidden="true">✳</i>
            <span aria-hidden="true">PostgreSQL</span><i aria-hidden="true">✳</i>
            <span aria-hidden="true">REST APIs</span><i aria-hidden="true">✳</i>
            <span aria-hidden="true">Redux Toolkit</span><i aria-hidden="true">✳</i>
          </div>
        </div>
        <About />
        
        <Experience />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
