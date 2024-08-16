import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {useShowMode} from "../DarkMode";
import { motion } from 'framer-motion';

function Footer() {

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
    <footer >
    <div className="py-36 flex flex-col items-center justify-center">
        <motion.div 
         whileInView={{opacity: 1, y: 0}}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 1.5 }}
         className={`flex gap-6 pb-4 ${isShowDark ? "text-white" : "text-black"}`}>

            <motion.a variants={iconVariants(2.5)}
                initial="initial"
                animate="animate" href='https://twitter.com/Madan__raj'  rel='noreferrer' target={'_blank'} className=' text-2xl md:text-4xl  '><FaXTwitter /></motion.a>
            <motion.a variants={iconVariants(3)}
                initial="initial"
                animate="animate" href='https://www.instagram.com/__.mad_dy._/' rel='noreferrer' target={'_blank'} className='text-2xl md:text-4xl  '><FaInstagram /></motion.a>
            <motion.a variants={iconVariants(3.5)}
                initial="initial"
                animate="animate" href='mailto:madanraj0519@gmail.com' rel='noreferrer' target={'_blank'} className='text-2xl md:text-4xl '><MdOutlineMailOutline /></motion.a>
            <motion.a variants={iconVariants(6)}
                initial="initial"
                animate="animate" href='https://www.linkedin.com/in/madanraj-7b8b23232/' rel='noreferrer' target={'_blank'} className='text-2xl md:text-4xl'><FaLinkedinIn /></motion.a>
            <motion.a variants={iconVariants(4)}
                initial="initial"
                animate="animate" href='https://github.com/Madanraj0519' rel='noreferrer' target={'_blank'} className='text-2xl md:text-4xl '><FaGithub /></motion.a>


        </motion.div>
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