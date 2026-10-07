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
