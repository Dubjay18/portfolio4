import Image from 'next/image'
import React from 'react'
import projectData from './data'
import { motion } from 'framer-motion'
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
        <div className="mx-auto mt-10 grid w-[80%] grid-flow-row-dense grid-cols-1 gap-3 lg:w-[99%] lg:grid-cols-2 xl:w-[80%] xl:grid-cols-3">
          {projectData.map((pro, i) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: -40, x: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  backgroundImage: `url(${pro.image.src})`,
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  backgroundColor: 'black',
                }}
                className=" group h-64 cursor-pointer rounded-xl shadow transition-all duration-500 hover:rotate-[2deg] hover:scale-95 lg:w-[400px]"
              >
                <div className="hidden h-full items-center justify-center rounded-xl text-white transition-all duration-500 group-hover:flex group-hover:bg-black/90">
                  <div className="flex flex-col items-center px-6">
                    <span className="text-bold text-xl text-blue-600 underline decoration-dashed">
                      {pro.name}
                    </span>
                    <br />
                    <span>{pro.desp}</span>
                    <br />
                    <a
                      href={`${pro.liveLink}`}
                      target="_blank"
                      className="btn rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                    >
                      View
                    </a>
                  </div>
                </div>
                {/* <Image src={pro?.image} className="w-full" /> */}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
