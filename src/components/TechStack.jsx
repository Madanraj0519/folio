import React from 'react';
import HTML from "../assests/Images/HTML.webp";
import CSS from "../assests/Images/CSS.png";
import BootStrap from "../assests/Images/Bootstrap.png";
import Tailwind from "../assests/Images/Tailwind.webp";
import ReactJS from "../assests/Images/react.png";
import GIT from "../assests/Images/git.png";
import GITHUB from "../assests/Images/github.png";
import Redux from "../assests/Images/redux-icon.webp";
import Firebase from "../assests/Images/firebase.webp";
import JS from "../assests/Images/javascript.png";
import Express from "../assests/Images/express.png";
import Node from "../assests/Images/nodejs.webp";
import MongoDB from "../assests/Images/mongodb.png";
import {useShowMode} from "../DarkMode";

const TechStack = () => {
    const { isShowDark } = useShowMode();
  return (
    <section className=" w-full mb-20 py-10 snap-y scroll-mt-[7.5rem] ">
    <h2 className={`title relative w-max px-2 mb-3 font-semibold text-4xl ${isShowDark ? "text-[#fff]" : "text-black"}`}>Tech Stack</h2>
    <section className={`grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-xl mt-10 ${isShowDark ? "text-[#fff]" : "text-black"}`}>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">HTML5</p>
            <img src={HTML} alt='' width='28px' height='28px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">CSS</p>
            <img src={CSS}  alt=''  width='30px' height='30px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">Javascript</p>
            <img src={JS} alt=''  width='48px' height='48px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">BootStrap</p>
            <img src={BootStrap} alt=''  width='30px' height='30px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">TailwindCSS</p>
            <img src={Tailwind} alt=''  width='30px' height='30px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">RectJS</p>
            <img src={ReactJS} alt=''  width='36px' height='36px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">Git</p>
            <img src={GIT} alt=''  width='36px' height='36px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">GitHub</p>
            <img src={GITHUB} alt=''  width='40px' height='40px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">Redux</p>
            <img src={Redux}  alt='' width='40px' height='40px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">Firebase</p>
            <img src={Firebase} alt=''  width='44px' height='44px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">NodeJS</p>
            <img src={Node} alt=''  width='40px' height='40px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">Express</p>
            <img src={Express} alt=''  width='48px' height='48px' />
        </div>
        <div className={`px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center ${ isShowDark ? "shadow-md shadow-[#ffffff86]" : "shadow-lg shadow-gray-300"} `}>
            <p className="px-2">MangoDb</p>
            <img src={MongoDB} alt=''  width='36px' height='36px' />
        </div>
    </section>
</section>
  )
}

export default TechStack