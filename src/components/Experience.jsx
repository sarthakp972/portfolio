import React from 'react';
import { animate, motion } from "framer-motion"


export default function Experience() {
  return (
    <>
   
    <div className='border-b border-neutral-900 pb-4'>

      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}

      className='my-20 text-center text-4xl'>Internship</motion.h1>
     <div>
      <div className='mb-8 flex flex-wrap lg:justify-center'>

        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className=' w-full lg:w-1/4'>
        <p className=' mb-2 text-sm  text-neutral-400'>2024</p>
        </motion.div>
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x :100}}
         transition={{duration:1}} 
        className=' w-full max-w-xl lg:w-3/4'>
        <h6 className='mb-2 font-semibold'>Web Developer - <span className='text-sm text-purple-100'>Konnection India </span></h6>

        <p className='mb-4 text-neutral-400'>• Software Development: Worked on modules allotted, with proper precision and attention to code formatting and structure.</p>

        <p className='mb-4 text-neutral-400'>• Team Collaboration: Participated actively in brainstorming sessions, code reviews, and agile sprint planning.</p>

        <p className='mb-4 text-neutral-400'>• Research and Development: Conducted research on emerging technologies and best practices, contributing to process improvements.</p>
        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-smfont-medium text-purple-800'>HTML</span>
        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-smfont-medium text-purple-800'>CSS</span>
        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-smfont-medium text-purple-800'>JAVASCRIPT</span>
        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-smfont-medium text-purple-800'>Jquery</span>
        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-smfont-medium text-purple-800'>PHP</span>
        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-smfont-medium text-purple-800'>SQL</span>
        </motion.div>
      </div>
     </div>

    
    </div>
    {/* ///////////////////// */}
    <div>
      <div className='mb-8 flex flex-wrap lg:justify-center'>

        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className=' w-full lg:w-1/4'>
        <p className=' mb-2 text-sm  text-neutral-400'></p>
        </motion.div>
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x :100}}
         transition={{duration:1}} 
        className=' w-full max-w-xl lg:w-3/4'>
        <h6 className='mb-2 font-semibold'>Web Developer - <span className='text-sm text-purple-100'>SkyStar Software</span></h6>

        <p className='mb-4 text-neutral-400'>• Acquired hands-on experience in JavaScript, HTML, and CSS while contributing to various web development projects..</p>

        <p className='mb-4 text-neutral-400'>• Team Collaboration: Participated actively in brainstorming sessions, code reviews, and agile sprint planning.</p>

        <p className='mb-4 text-neutral-400'>• Developed practical skills in JavaScript, HTML, and CSS while working on dynamic web applications and enhancing user interfaces..</p>
        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-smfont-medium text-purple-800'>HTML</span>
        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-smfont-medium text-purple-800'>CSS</span>
        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-smfont-medium text-purple-800'>JAVASCRIPT</span>
        <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-smfont-medium text-purple-800'>Bootstrap</span>
       
       
        </motion.div>
      </div>
     </div>
   
</>
  );
}
