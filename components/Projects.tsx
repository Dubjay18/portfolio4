import Image from 'next/image'
import React from 'react'
import projectData from './data'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <div
      id="projects"
      className=" min-h-screen scroll-m-20 scroll-p-6 bg-slate-100 pb-20 text-slate-900"
    >
      <div className="mt-20">
        <div className="flex w-full  items-center justify-center px-4">
          {' '}
          <hr className="mx-5 w-24 rounded-md border-t-4 border-secondary" />
          <h1 className="prose-lg xs:text-4xl prose text-2xl font-bold text-primary md:text-6xl">
            Projects
          </h1>{' '}
          <hr className="mx-5 w-24 rounded-md border-t-4 border-secondary" />
        </div>
        <div className="mx-auto mt-10 grid w-[80%] grid-flow-row-dense grid-cols-1 gap-5 lg:w-[99%]  xl:w-[80%] ">
          {projectData.map(({ image, name, desp, liveLink }, i) => (
            // <motion.div
            //   key={i}
            //   className="group h-64 cursor-pointer rounded-xl bg-black shadow transition-all duration-500 hover:rotate-[2deg] hover:scale-95"
            //   style={{
            //     backgroundImage: `url(${image.src})`,
            //     backgroundPosition: '50% 50%',
            //     backgroundSize: 'cover',
            //   }}
            //   initial={{ opacity: 0, y: -40, x: 0 }}
            //   whileInView={{ opacity: 1, y: 0, x: 0 }}
            //   transition={{ duration: 0.5, delay: 0.2 }}
            // >
            //   <div className="hidden h-full items-center justify-center rounded-xl text-white transition-all duration-500 group-hover:flex group-hover:bg-black/90">
            //     <div className="flex flex-col items-center px-6">
            //       <span className="text-bold text-xl text-blue-600 underline decoration-dashed">
            //         {name}
            //       </span>
            //       <br />
            //       <span>{desp}</span>
            //       <br />
            //       <a
            //         href={`${liveLink}`}
            //         target="_blank"
            //         className="btn rounded-xl bg-blue-600 text-white hover:bg-blue-700"
            //       >
            //         View
            //       </a>
            //     </div>
            //   </div>
            // </motion.div>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -40, x: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="my-5"
            >
              <ProjectCard
                image={image}
                name={name}
                desp={desp}
                liveLink={liveLink}
                index={i}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
