import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {useShowMode} from "../DarkMode"

function Footer() {

    const { isShowDark } = useShowMode();


  return (
    <footer >
    <div className="py-36 flex flex-col items-center justify-center">
        <div className={`flex gap-6 pb-4 ${isShowDark ? "text-white" : "text-black"}`}>
            <a href='https://twitter.com/Madan__raj'  rel='noreferrer' target={'_blank'} className=' text-2xl md:text-4xl  '><FaXTwitter /></a>
            <a href='https://www.instagram.com/__.mad_dy._/' rel='noreferrer' target={'_blank'} className='text-2xl md:text-4xl  '><FaInstagram /></a>
            <a href='mailto:madanraj0519@gmail.com' rel='noreferrer' target={'_blank'} className='text-2xl md:text-4xl '><MdOutlineMailOutline /></a>
            <a href='https://www.linkedin.com/in/madanraj-7b8b23232/' rel='noreferrer' target={'_blank'} className='text-2xl md:text-4xl'><FaLinkedinIn /></a>
            <a href='https://github.com/Madanraj0519' rel='noreferrer' target={'_blank'} className='text-2xl md:text-4xl '><FaGithub /></a>
        </div>
        <a href='mailto:madanraj0519@gmail.com' className={`${isShowDark ? "text-white" : "text-black"}`}>made with 💗 by Madanraj.</a>
    </div>
    <div className={`sm:text-md mx-auto mt-10 flex h-20 items-center justify-between border-t text-sm md:text-lg lg:text-xl px-1 ${isShowDark ? "text-white" : "text-black"}`}>
        <p>Copyright @ 2023 |
            <span className='text-brand font-bold text-red-600'>PORTFOLIO</span>
        </p>
        <p>Designed By:
            <a href='https://twitter.com/Madan__raj'>Madanraj</a>
        </p>
    </div>
</footer>
  )
}

export default Footer