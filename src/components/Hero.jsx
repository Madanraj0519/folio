import React from 'react';
import {TypeAnimation} from "react-type-animation";
import {useShowMode} from "../DarkMode";

const Hero = () => {
    const { isShowDark } = useShowMode();
  return (
    <section id='Hero' className="overflow-hidden lg:h-[100vh] flex flex-col lg:flex-row gap-4 mb-20 py-10 justify-evenly items-center ">
                        <div className="">
                            <img src="Madanraj-pic.jpg" alt="" className="p-6 sm:w-[30rem] overflow-x-hidden rounded-full " />
                        </div>
                        <section className="w-full lg:w-[650px] flex flex-col gap-3 ">
                            <TypeAnimation
                                data-aos="fade-up"
                                sequence={[
                                  "MERN Stack Developer",
                                  2500,
                                  "Front End Developer",
                                  2500,
                                  "Freelancer",
                                  2500,
                                  ""
                                ]}
                                speed={30}
                                wrapper="h2"
                                repeat={Infinity}
                                className="text-[rgba(169,169,169,0.8)] text-4xl font-bold sm:text-3xl"
                            />
                            {/* <p className="font-semibold text-lg lg:text-xl opacity-60 ">Frontend Developer | MERN Stack Developer | Freelancer </p> */}
                            <h3 className="text-blue-500 text-4xl lg:text-5xl font-bold tracking-wider">Madanraj</h3>
                            <h3 className={`md:text-xl text-[18px] font-medium ${ isShowDark ? "text-[#fff]" : "text-black"}`}>As a dedicated MERN Stack developer. I specialize in creating websites and web applications, combining technical expertise with an aptitude for design. My proficiency extends to crafting user-friendly interfaces and ensuring seamless functionality.I have a sharp eye for detail and am dedicated to turning your web vision into reality.With a passion for innovation, I leverage my front-end skills to transform ideas into impactful digital
                            experiences. I thrive in collaborative environments and continuously seek opportunities to enhance my skills.</h3>
                            <div className=""></div>
                            <div className="flex gap-4 text-[16px] md:text-xl">
                            <a href="https://drive.google.com/file/d/11vmrahc6crY1G1MUOuHm0mxo-H5kHGXN/view?usp=sharing" rel='noreferrer' target={'_blank'} className={`border border-blue-500 py-2 px-3 ${ isShowDark ? "text-[#fff]" : "text-black"}`}> Download CV</a>
                            <a href="mailto:madanraj0519@gmail.com" rel='noreferrer' target={'_blank'} className=" bg-[rgba(169,169,169,0.8)] py-[10px] px-6 hero-link" >Get In Touch</a>
                            </div>
                        </section>
                    </section>
  )
}

export default Hero