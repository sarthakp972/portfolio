import React from 'react'
import { animate, motion } from "framer-motion"

export default function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}

      className='my-10 text-center text-4xl'>Get In Touch</motion.h1>
      <div className='text-center tracking-tighter '>

        <motion.p
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:1}}
         className=' my-4'>Commissioner Colony Rampur, Jabalpur MP</motion.p>
        <motion.p 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:1}}
        className='my-4'>
           <a href="tel:+917649062706">7649062706</a> 
          </motion.p>



        <a href="mailto:sarthakpatwa972@gmail.com?subject=Hello&body=I%20would%20like%20to%20discuss..." className='border-b'>sarthakpatwa972@gmail.com</a>
      </div>
    </div>
  )
}
