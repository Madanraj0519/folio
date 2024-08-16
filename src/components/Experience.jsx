import React from 'react';
import { MdOutlineDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import {useShowMode} from "../DarkMode";
import { motion } from 'framer-motion';


const Experience = () => {
    const { isShowDark } = useShowMode();
  return (
    <section id='Experience' className="mb-10 mt-28">
    <motion.h2 
    whileInView={{opacity: 1, y: 0}}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1 }} className={`title w-max px-2 mt-8 mb-3 font-semibold relative text-4xl ${isShowDark ? "text-[#fff]" : "text-black"}`}>My Experience</motion.h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">

    <motion.div
    whileInView={{opacity: 1, x: 0}}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 1 }}
     className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">

         <motion.div
         whileInView={{opacity: 1, x: 0}}
         initial={{ opacity: 0, x: 100 }}
         transition={{ duration: 1 }}
         className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><FaLaptopCode /></i> </motion.div>
            <div>
                <h2 className="text-xl font-semibold mb-1">Teenofes Tech Solutions Pvt. Ltd</h2>
                <span className=''>(Front-end Developer)</span>
                <ul className="mt-2 gap-5 md:text-lg">
                    <li>* Developed a responsive hospital website using HTML and CSS, ensuring optimal display on all devices. Implemented
                        animations using JavaScript to enhance user interactivity and engagement.</li>
                    <li>* Collaborated with a team of three members, leveraging their expertise to learn and apply new skills effectively.</li>
                    <li>* Gained hands-on experience in web development best practices, including responsive design and JavaScript
                        animations, under real-world project constraints.</li>
                </ul>
            </div>
        </motion.div>

        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
         className=" bg-[rgba(169,169,169,0.8)] flex gap-4 rounded-md p-4 py-6">
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
             className="bg-blue-500 h-[55px] rounded-md p-3 flex items-center justify-center"> <i className="text-4xl text-white"><MdOutlineDesignServices /></i> </motion.div>
            <div>
                <h2 className="text-xl font-semibold mb-1">Open Source Contributor and Freelancer</h2>
                <span className=''>(Front-end Developer)</span>
                <ul className="mt-2 gap-5 md:text-lg">
                    <li>* Created an engaging and responsive landing page for the gym website. And developed an user experience and
                          user-friendly admin dashboard for gym administrators.</li>
                    <li>* Converted a Figma Design into a modern and responsive main page using React and Tailwind CSS, Demonstrated
                          strong attention to detail, UI/UX design skills, and expertise in front-end development.</li>
                    <li>* Added a signIn and SignUp page in the Blood Donation website project(React.js) and contributed to TigDog, Linkfree,
                          Freehit, ProjectsHut, and many other projects.</li>
                </ul>
            </div>
        </motion.div>

        </div>
    </section>
  )
}

export default Experience