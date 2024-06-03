import React from 'react';
import {useShowMode} from "../DarkMode";

const About = () => {
    const { isShowDark } = useShowMode();
  return (
    <section id="About" className=" w-full mb-20 py-10 snap-y scroll-mt-[6rem] ">
                        <h2 className={`title relative w-max px-2 mb-3 font-semibold text-4xl ${isShowDark ? "text-[#fff]" : "text-black"}`}>About Me</h2>
                        <p className={`align-justify text-[18px] leading-[1.8em]  md:leading-[2em] md:text-xl ${isShowDark ? "text-[#fff]" : "text-black"} `}>
                            I have a strong passion for technology and thrive on constantly learning new things. Every day, I make it a point to document my progress by creating and building new projects. My expertise lies in crafting visually appealing and user-friendly websites and web applications. I take pride in translating visions into web realities, paying attention to every pixel.
                            <br /> <br/>
                            As a frontend developer, I am dedicated to creating seamless and intuitive user experiences. Design is not just a task for me; it's a form of problem-solving that I enjoy immensely. I believe in simplicity but strive for perfection in every project I undertake. My journey in the tech industry is driven by a love for building innovative solutions and solving problems.
                            <br /> <br/>
                        </p>
    </section>
  )
}

export default About