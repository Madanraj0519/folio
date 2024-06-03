import React from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiNightSky } from "react-icons/gi";
import {useShowMode} from "../DarkMode";
// import { Link } from 'react-router-dom';

const Header = () => {
    const { isShowDark, toggleDarkMode } = useShowMode();
  return (
    <>
     <header className={`mx-auto  md: lg:px-10 flex  justify-between z-10 px-4 h-[5rem] items-center top-0 sticky ${isShowDark ? "bg-zinc-950 text-[#fff]" : "bg-[#fff] text-black"}`}>
                    <a href="/"><div className="">
                        <h2 className=" font-bold text-2xl uppercase tracking-wider ">Madanraj</h2>
                    </div></a>
                    <div className="flex items-center  gap-8 sm:gap-10 ">
                        <nav className="flex gap-x-8 text-[18px] font-semibold ">
                            <div className="navlink hidden lg:flex">
                                <a href="/#Hero"><p className="py-2">Home</p></a>
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
                            <div className="link hidden lg:flex">
                                <p className="py-2">
                                    <a href="/#Experience">Experience</a>
                                </p>
                            </div>
                        </nav>
                        <div>
                          <h4 className="py-2 cursor-pointer text-4xl" onClick={toggleDarkMode}>{ !isShowDark ? <TiWeatherPartlySunny /> : <GiNightSky /> }</h4>
                         </div>
                        {/* <a href="https://drive.google.com/file/d/1062HSO8HdPAtIzfwboH2maBH4YO5yxNP/view?usp=sharing" rel='noreferrer' target={'_blank'} className="border border-blue-500 py-2 px-3"> Download CV</a> */}
                    </div>
                </header>
    </>
  )
}

export default Header