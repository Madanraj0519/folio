import React from "react";
import './Home.css'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import {useShowMode} from "../DarkMode";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import { motion } from "framer-motion";


function App() {

    const { isShowDark } = useShowMode();

    const iconVariants = (duration) => ({
        initial : { y: -10 },
        animate: {
          y: [10, -10],
          transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      });

    return (
        <div className={isShowDark ? "bg-zinc-950" : ""}>
            <div className=" relative scroll-smooth select-none">
                <div className=" fixed flex items-center justify-center px-3 md:px-6 bottom-4 right-4 m-2 md:m-10 cursor-pointer p-2 md:p-3 md:text-xl rounded-3xl font-bold bg-blue-500 z-[20] ">
                    <span></span>
                    <a href="mailto:madanraj0519@gmail.com"><p>🍦Hire Me</p></a>
                </div>
                <Header />
                <section className="max-w-7xl px-6 lg:px-4 mx-auto">
                    <Hero />
                    <About />
                    <TechStack />
                    <Projects />
                    <Experience />
                    <div className="mx-auto pt-20   flex text-center  gap-4 items-center justify-center flex-col">
                        <h2 className="text-[2.5rem] md:text-[5rem] font-semibold md:leading-[80px] ">
                            <p className={` ${ isShowDark ? "text-[#fff]" : "text-black"}`}>I  <motion.span variants={iconVariants(2.5)}
                               initial="initial"
                               animate="animate" className="hero-h1-gradient">DESIGN</motion.span> AND I <motion.span variants={iconVariants(3)}
                               initial="initial"
                               animate="animate" className="hero-h1-gradient">CODE</motion.span> IT HERE</p>
                        </h2>
                    </div>
                </section>
               <Footer/>
            </div>
        </div>
    );
}

export default App;