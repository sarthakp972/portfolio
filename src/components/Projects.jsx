import React from 'react'
 import { PROJECTS } from '../constant'
 import { motion } from "framer-motion"
// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
//  import { div } from 'framer-motion/client';


const Projects = () => {
// console.log(PROJECTS[0].title);
    return (
    <div className='border-b border-neutral-900 pb-4'>
        
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}} 
        className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            {PROJECTS.map((project,index)=>(
                    <div key={index } className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                             whileInView={{opacity:1, x:0}}
                             initial={{opacity:0,x:-100}}
                                transition={{duration:1}}
                         className='w-full lg:w-1/4'>
                    
                        <img 
                        width={150}
                        height={150}
                        src={project.image} alt={project.title}
                        className='mb-6 rounded' />
                        </motion.div>

                        <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0,x:100}}
                           transition={{duration:1}}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400' >{project.description}</p>

                        </motion.div>
                          
                    </div>

            ))}
        </div>

   
      {/* </div> */}
    

    </div>
  )
}

export default Projects
