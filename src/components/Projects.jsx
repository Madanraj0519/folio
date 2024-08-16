import React from 'react';
import { GoLinkExternal } from "react-icons/go";
import { FaGithubSquare } from "react-icons/fa";
import {useShowMode} from "../DarkMode";

const Projects = () => {
    const { isShowDark } = useShowMode();
  return (
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
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >NodeJS</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >ExpressJS</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >MongoDB</p>
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
                                       <a href="https://movie-streaming-app-frontend.vercel.app/"  rel='noreferrer' target={'_blank'} className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 
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
                                    <h3 className="font-semibold text-xl lg:text-[25px]">Note-App</h3>
                                    <p>Notes taking app</p>
                                    <p className="mb-2 md:text-[17px] ">Created a note-taking application scratch using the MERN stack. It has all the capabilities you require, including the
                                    ability to add, modify, search, and remove notes.</p>
                                    <div className="flex flex-wrap gap-2 w-full mt-2">
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >ReactJS</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >NodeJs</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >ExpressJs</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >MongoDB</p>
                                        <p className={`border ${ isShowDark ? "border-[#fff] bg-[#ffffffa0] text-black" : "border-[#000] bg-[#2221] "} px-4 py-1 rounded-2xl text-sm `} >TailwindCSS</p>
                                    </div>
                                    <div className="flex items-center gap-5 mt-4">
                                       <a href="https://my-note-app-two.vercel.app/"  rel='noreferrer' target={'_blank'} className="text-lg py-2 text-center bg-blue-500 rounded w-[180px] mt-2 
                                       text-white font-semibold flex justify-center items-center gap-1">Explore Project <GoLinkExternal /> </a>
                                       <a href="https://github.com/Madanraj0519/Note-app" rel='noreferrer' target={'_blank'} ><FaGithubSquare className="text-5xl mt-1" /></a>
                                    </div>
                                </div>
                                <div>
                                    <img className="rounded  object-contain bg-contain w-full lg:w-[600px] h-[px] lg:h-[px] " src="Note-app.png" alt="" />
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
  )
}

export default Projects