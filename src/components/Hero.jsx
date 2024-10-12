import React from 'react'
import {HERO_CONTENT} from "../constant"
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion"


export default function Hero() {
  const container= (delay)=>({
      hidden:{x:-100,opacity:0},
      visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay},
      }
  })
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className=' w-full lg:w-1/2'>
            <div className=' flex flex-col items-center  lg:items-start'>
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                 className=' pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>
                  Sarthak Patwa
                  </motion.h1>
                <motion.span
                 variants={container(0.5)}
                 initial="hidden"
                 animate="visible"
                 className=' bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'> Web Devloper</motion.span>
                <motion.p 
                 variants={container(1)}
                 initial="hidden"
                 animate="visible"
                className='my-2 max-x-xl py-6 font-light tracking-tighter'>As a web developer, I have honed my skills in modern front-end frameworks like React and Next.js, alongside robust back-end technologies such as Java, PHP, and MySQL. I thrive on transforming ideas into reality through code, ensuring that every project meets the highest standards of quality and user engagement.
               <br/>
               <br/>
                I’m always excited to discuss new projects and opportunities. Feel free to reach out to me via the contact form below, or connect with me on social media.
                </motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1, delay:1.2}}
                 src={profilePic} alt="sarthak patwa" />
            </div>
            </div>
        </div>
      
    </div>
  )
}
