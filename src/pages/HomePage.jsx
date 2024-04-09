import React from "react";
import './Home.css'
import { FaLaptopCode } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { TbWriting } from "react-icons/tb";
import Footer from "../components/Footer";
import {TypeAnimation} from "react-type-animation";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiNightSky } from "react-icons/gi";
import {useShowMode} from "../DarkMode"


function App() {

    const { isShowDark, toggleDarkMode } = useShowMode();
    return (
        <div className={isShowDark ? "bg-zinc-950" : ""}>
            <div className=" relative scroll-smooth select-none">
                <div className=" fixed flex items-center justify-center px-3 md:px-6 bottom-4 right-4 m-2 md:m-10 cursor-pointer p-2 md:p-3 md:text-xl rounded-3xl font-bold bg-blue-500 z-[20] ">
                    <span></span>
                    <a href="mailto:madanraj0519@gmail.com"><p>🍦Hire Me</p></a>
                </div>
                <header className={`mx-auto  md: lg:px-10 flex  justify-between z-10 px-4 h-[5rem] items-center top-0 sticky ${isShowDark ? "bg-zinc-950 text-[#fff]" : "bg-[#fff] text-black"}`}>
                    <a href="/"><div className="">
                        <h2 className=" font-bold text-2xl uppercase tracking-wider ">Madanraj</h2>
                    </div></a>
                    <div className="flex items-center  gap-8 sm:gap-10 ">
                        <nav className="flex gap-x-8 text-[18px] font-semibold ">
                            <div className="navlink hidden lg:flex">
                                <a href="/"><p className="py-2">Home</p></a>
                            </div>
                            <div className="link hidden lg:flex">
                                <p className="py-2">
                                    <a href="/#About">About</a>
                                </p>
                            </div>
                            <div className="link hidden lg:flex">
                                <p className="py-2">
                                    <a href="/#Project">Project</a>
                                </p>
                            </div>
                        </nav>
                        <div>
                          <h4 className="py-2 cursor-pointer text-4xl" onClick={toggleDarkMode}>{ !isShowDark ? <TiWeatherPartlySunny /> : <GiNightSky /> }</h4>
                         </div>
                        {/* <a href="https://drive.google.com/file/d/1062HSO8HdPAtIzfwboH2maBH4YO5yxNP/view?usp=sharing" rel='noreferrer' target={'_blank'} className="border border-blue-500 py-2 px-3"> Download CV</a> */}
                    </div>
                </header>
                <section className="max-w-7xl px-6 lg:px-4 mx-auto">
                    <section className="overflow-hidden lg:h-[100vh] flex flex-col lg:flex-row gap-4 mb-20 py-10 justify-evenly items-center ">
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
                            <h3 className={`md:text-xl text-[18px] font-medium ${ isShowDark ? "text-[#fff]" : "text-black"}`}>As a dedicated front-end software developer. I specialize in creating websites and web applications, combining technical expertise with an aptitude for design. My proficiency extends to crafting user-friendly interfaces and ensuring seamless functionality.I have a sharp eye for detail and am dedicated to turning your web vision into reality.With a passion for innovation, I leverage my front-end skills to transform ideas into impactful digital
                            experiences. I thrive in collaborative environments and continuously seek opportunities to enhance my skills.</h3>
                            <div className=""></div>
                            <div className="flex gap-4 text-[16px] md:text-xl">
                            <a href="https://drive.google.com/file/d/1062HSO8HdPAtIzfwboH2maBH4YO5yxNP/view?usp=sharing" rel='noreferrer' target={'_blank'} className={`border border-blue-500 py-2 px-3 ${ isShowDark ? "text-[#fff]" : "text-black"}`}> Download CV</a>
                            <a href="mailto:madanraj0519@gmail.com" rel='noreferrer' target={'_blank'} className=" bg-[rgba(169,169,169,0.8)] py-[10px] px-6 hero-link" >Get In Touch</a>
                            </div>
                        </section>
                    </section>
                    <section className="mb-20">
                        <h2 className={`title w-max px-2 mb-3 font-semibold relative text-4xl ${isShowDark ? "text-[#fff]" : "text-black"}`}>My Work</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                        <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><FaLaptopCode /></i> </div>
                        <div>
                         <h2 className="text-xl font-semibold">Web Development</h2>
                                    <p className="md:text-lg">
                                        Dedicated to crafting compelling and user-friendly interfaces through expert use of HTML, CSS, and JavaScript. Specialized proficiency in developing visually appealing and responsive websites, with expertise in popular front-end frameworks such as React and Next.js. Adept in utilizing Tailwind CSS for streamlined styling. Committed to implementing responsive design principles and ensuring seamless compatibility across various browsers.
                                    </p>
                                </div>
                            </div>
                            <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                                <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><FaCode /></i> </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Problem Solving</h2>
                                    <p className="md:text-lg">
                                        I approach challenges methodically, employing analytical thinking and a solutions-oriented mindset to deliver effective outcomes. Additionally, my effective communication skills extend beyond code, fostering open and collaborative dialogue with team members and stakeholders. This ensures a holistic approach to delivering exceptional user experiences while maintaining clear and transparent communication throughout the development process
                                    </p>
                                </div>
                            </div>
                            <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                                <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><MdOutlineDesignServices /></i> </div>
                                <div>
                                    <h2 className="text-xl font-semibold">UI/UX Design</h2>
                                    <p className="md:text-lg">
                                        Enhancing user satisfaction by improving the usability, accessibility, and overall visual appeal of digital interfaces. Integrating design principles into front-end development projects. While I may not be a professional designer, rest assured that I bring a strong design sensibility to the table. Allow me to contribute to your next project. I am confident in my ability to deliver impactful design solutions with dedication and skill.
                                    </p>
                                </div>
                            </div>
                            <div className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
                                <div className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><TbWriting /></i> </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Freelancer</h2>
                                    <p className="md:text-lg">
                                        Proficient in translating intricate technical details into accessible and clear communication. Leveraging advanced writing skills to produce comprehensive documentation, user-friendly guides, and insightful articles that contribute to a deeper understanding of software development. Experienced in distilling complex concepts into digestible content for diverse audiences, fostering effective knowledge transfer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="About" className=" w-full mb-20 py-10 snap-y scroll-mt-[6rem] ">
                        <h2 className={`title relative w-max px-2 mb-3 font-semibold text-4xl ${isShowDark ? "text-[#fff]" : "text-black"}`}>About Me</h2>
                        <p className={`align-justify text-[18px] leading-[1.8em]  md:leading-[2em] md:text-xl ${isShowDark ? "text-[#fff]" : "text-black"} `}>

                            I have a strong passion for technology and thrive on constantly learning new things. Every day, I make it a point to document my progress by creating and building new projects. My expertise lies in crafting visually appealing and user-friendly websites and web applications. I take pride in translating visions into web realities, paying attention to every pixel.
                            <br /> <br/>
                            As a frontend developer, I am dedicated to creating seamless and intuitive user experiences. Design is not just a task for me; it's a form of problem-solving that I enjoy immensely. I believe in simplicity but strive for perfection in every project I undertake. My journey in the tech industry is driven by a love for building innovative solutions and solving problems.
                            <br /> <br/>
                            Beyond coding, I find inspiration in music and in playing cricket. These are not just hobbies for me; they contribute to my creative thinking and problem-solving skills. The decision to join the tech industry was fueled by my passion for building new things and the joy I find in overcoming challenges. In essence, simplicity, perfection, and a love for problem-solving define my approach to both technology and life.
                        </p>
                    </section>

                    <section id="Project" className=" py-10 pb-20 snap-y scroll-mt-[6rem] ">
                        <div className=" flex justify-between">
                        <h2 className={`title relative w-max px-2 mb-3 font-semibold text-4xl ${isShowDark ? "text-[#fff]" : "text-black"}`}>
                            Projects
                        </h2>
                        <a href="/#Project" className="text-blue-500 hover:text-pink-700">
                        <h3 className=" title relative w-max text-2xl font-extrabold">Visual</h3>
                        </a>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className={` justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden  p-5 lg:p-10 ${isShowDark ? "text-[#fff] shadow-[#fff] shadow-md" : "text-black shadow-2xl"} `}>

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <div className="flex justify-between">
                                        <h3 className="font-semibold text-xl lg:text-[25px] ">Underdogs Gym</h3>
                                        <h5 className="bg-blue-500 text-white px-2 rounded-md">Freelance</h5>
                                    </div>
                                    <p>Underdogs Gym Landing page & admin DashBoard:</p>
                                    <p>A freelancing project developed using React.js and Redux, Created an engaging and responsive landing page for the gym website.
                                       and developed an intuitive and user-friendly admin dashboard for gym administrators.</p>
                                    {/* <p className="mb-2  md:text-[17px] ">A movie trailer application i built using React, TMDB API and firebase for user authentication and data storage. Implemented dynamic content fetching, displaying movie details, search movie functionality and streaming trailers.</p> */}
                                    <div className="flex flex-wrap gap-2 w-full mt-2">
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >ReactJS</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >Firebase</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >Redux</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >TailwindCSS</p>
                                    </div>
                                    <div className="flex items-center gap-5 mt-4">
                                       <a href="https://www.underdogsfitness.in/" rel='noreferrer' target={'_blank'} className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                       {/* <a href="#"><FaGithubSquare className="text-5xl" /></a> */}
                                    </div>
                                </div>
                                <div>
                                    <img className="rounded opacity-90 object-contain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] " src="underdogs.png" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className={` justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden  p-5 lg:p-10 ${isShowDark ? "text-[#fff] shadow-[#fff] shadow-md" : "text-black shadow-2xl"} `}>

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                   <div className="flex justify-between">
                                        <h3 className="font-semibold text-xl lg:text-[25px]">Home Page</h3>
                                        <h5 className="bg-blue-500 text-white px-2 rounded-md">Freelance</h5>
                                    </div>
                                    <p>Main page & User login:</p>
                                    <p className="mb-2 md:text-[17px] "> A freelancing project developed using react.js and JavaScript, Created a modern and engaging main page using React.js and Tailwind CSS, enhancing user engagement and visual appeal.</p>
                                    <div className="flex flex-wrap gap-2 w-full mt-2">
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >ReactJS</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >TailwindCSS</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >JavaScript</p>
                                    </div>
                                    {/* <div className="flex items-center gap-5 mt-4">
                                       <a href="#" className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 
                                       text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                       <a href="#"><FaGithubSquare className="text-5xl" /></a>
                                    </div> */}
                                </div>
                                <div>
                                    <img className="rounded object-cntain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] " src="piechips.png" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className={` justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden  p-5 lg:p-10 ${isShowDark ? "text-[#fff] shadow-[#fff] shadow-md" : "text-black shadow-2xl"} `}>

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">Zendesk</h3>
                                    <p>Zendesk main page and CRM system :</p>
                                    <p className="mb-2 md:text-[17px] ">Developed and implemented a comprehensive employee tracking system using the MERN (MongoDB, Express.js, React.js, Node.js) stack.</p>
                                    <div className="flex flex-wrap gap-2 w-full mt-2">
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >ReactJs</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >NodeJs</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >ExpressJs</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >MongoDB</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >Redux</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >TailwindCSS</p>
                                    </div>
                                    <div className="flex items-center gap-5 mt-4">
                                       <a href="https://zendesk-clone.onrender.com/" rel='noreferrer' target={'_blank'} className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 
                                       text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                       <a href="https://github.com/Madanraj0519/ZenDesk" rel='noreferrer' target={'_blank'}><FaGithubSquare className="text-5xl mt-1" /></a>
                                    </div>
                                </div>
                                <div>
                                    <img className="rounded object-contain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] opacity-90 " src="Zendesk.png" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className={` justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden  p-5 lg:p-10 ${isShowDark ? "text-[#fff] shadow-[#fff] shadow-md" : "text-black shadow-2xl"} `}>

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">Disney+ Clone</h3>
                                    <p>The Movie with trailer</p>
                                    <p className="mb-2 md:text-[17px] "> Developed a Disney+ clone using React.js and Redux for state management, closely mimicking the original user interface. Leveraged Firebase to implement Google user authentication. </p>
                                    <div className="flex flex-wrap gap-2 w-full mt-2">
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >ReactJS</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >TailwindCSS</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >Redux</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >Firebase</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >TmdbAPI</p>
                                    </div>
                                    <div className="flex items-center gap-5 mt-4">
                                       <a href="https://disney-clone-aaf1.vercel.app/"  rel='noreferrer' target={'_blank'} className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 
                                       text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                       <a href="https://github.com/Madanraj0519/Disney-clone" rel='noreferrer' target={'_blank'} ><FaGithubSquare className="text-5xl mt-1" /></a>
                                    </div>
                                </div>
                                <div>
                                    <img className="rounded  object-contain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] " src="Disney-clone.png" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className={` justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden  p-5 lg:p-10 ${isShowDark ? "text-[#fff] shadow-[#fff] shadow-md" : "text-black shadow-2xl"} `}>
                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">Portfolio Site</h3>
                                    <p>My first portfolio:</p>
                                    <p className="mb-2 md:text-[17px] ">A portfolio website built with React.js and tailwind CSS. This website is a portfolio website i built for myself showcasing my progress as a frontend developer, which includes projects i have worked on, my tech stack, about me section and my work as a prolific frontend developer.This was to show clients and recruiters what i can do.</p>
                                    <div className="flex flex-wrap gap-2 w-full mt-2">
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >ReactJS</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >TailwindCSS</p>
                                    </div>
                                    <div className="flex items-center gap-5 mt-4">
                                       <a href="https://new-madanraj-portfolio.vercel.app/" rel='noreferrer' target={'_blank'} className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 
                                       text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                       <a href="https://github.com/Madanraj0519/New-Madanraj-Portfolio" rel='noreferrer' target={'_blank'} ><FaGithubSquare className="text-5xl mt-1" /></a>
                                    </div>
                                </div>
                                <div>
                                    <img className="rounded  object-contain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] " src="Port-folio.png" alt="" />
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 scroll-m-[30px] ">
                            <section className={` justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden  p-5 lg:p-10 ${isShowDark ? "text-[#fff] shadow-[#fff] shadow-md" : "text-black shadow-2xl"} `}>

                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">E-commerce website</h3>
                                    <p>E-commerce website with redux toolkit:</p>
                                    <p className="mb-2 md:text-[17px] ">Developed an e-commerce website using Redux Toolkit for state management, showcasing proficiency in API integration and async thunk for data fetching</p>
                                    <div className="flex flex-wrap gap-2 w-full mt-2">
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >ReactJS</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >Redux</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >TailwindCSS</p>
                                    </div>
                                    <div className="flex items-center gap-5 mt-4">
                                       <a href="https://e-commerce-website-phi-seven.vercel.app/" rel='noreferrer' target={'_blank'} className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 
                                       text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                       <a href="https://github.com/Madanraj0519/e-commerce-website-redux" rel='noreferrer' target={'_blank'} ><FaGithubSquare className="text-5xl mt-1" /></a>
                                    </div>
                                </div>
                                <div>
                                    <img className="rounded  object-contain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] " src="e-commerce.png" alt="" />
                                </div>
                            </section>
                        </div>
                        {/* <div className="mt-10 scroll-m-[30px] ">
                            <section className=" justify-between  flex flex-col lg:flex-row relative gap-14 lg:gap-15  rounded-2xl overflow-hidden shadow-2xl p-5 lg:p-10 ">
                                <div className="w-full lg:w-[55%] relative flex flex-col  leading-[2rem]">
                                    <h3 className="font-semibold text-xl lg:text-[25px]">FB Clone</h3>
                                    <p>Frontend Application:</p>
                                    <p className="mb-2  md:text-[17px] ">Built with html, pure CSS and vanilla JavaScript.Developed the front-end of Facebook web application. Applied design principles to create an interface that mirrors the look and feel of the Facebook platform.</p>
                                    <div className="flex flex-wrap gap-2 w-full">
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">HTML5</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">PureCSS</p>
                                        <p className="border border-[#000] px-4 py-1 bg-[#2221] rounded-2xl text-sm">Javascript</p>
                                    </div>
                                    <a href="https://supbook.vercel.app/" className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                </div>
                                <div>
                                    <img className="rounded  object-cover bg-contain w-full lg:w-[600px]" src="fb.png" alt="fbclone" />
                                </div>
                            </section>
                        </div> */}
                    </section>

                    <section className=" w-full mb-20 py-10 snap-y scroll-mt-[7.5rem] ">
                        <h2 className={`title relative w-max px-2 mb-3 font-semibold text-4xl ${isShowDark ? "text-[#fff]" : "text-black"}`}>Tech Stack</h2>
                        <section className={`grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-xl mt-10 ${isShowDark ? "text-[#fff]" : "text-black"}`}>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">HTML5</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">CSS</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">TailwindCSS</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">RectJS</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">NextJS</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">Git git</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">Redux</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">Firebase</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">Photoshop</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">Javascript</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">Typescript</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">React native</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">Express</p>
                                <i></i>
                            </div>
                        
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">NodeJS</p>
                                <i></i>
                            </div>
                            <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
                                <p className="px-2">MangoDb</p>
                                <i></i>
                            </div>
                        </section>
                    </section>
                    <div className="mx-auto pt-20   flex text-center  gap-4 items-center justify-center flex-col">
                        <h2 className="text-[2.5rem] md:text-[5rem] font-semibold md:leading-[80px] ">
                            <p className={` ${ isShowDark ? "text-[#fff]" : "text-black"}`}>I  <span className="hero-h1-gradient">DESIGN</span> AND I <span className="hero-h1-gradient">CODE</span> IT HERE</p>
                        </h2>
                    </div>
                </section>
               <Footer/>
            </div>
        </div>
    );
}

export default App;