import {
  motion,
  useAnimation,
  useViewportScroll,
  useTransform,
} from 'framer-motion'

import React, { useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax'

import Personal from '../images/pp.png'
function About() {
  const animation = useAnimation()
  const { ref } = useParallax<HTMLDivElement>({ speed: 40 })

  return (
    <div className="about relative bg-slate-100 text-slate-900 shadow">
      <div
        className="flex  min-h-[92vh] items-center justify-around "
        id="about"
      >
        <motion.div
          initial={{ opacity: 0, y: -40, x: -40 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-28 w-full"
        >
          <div className="flex w-full  items-center justify-center px-4">
            {' '}
            <hr className="mx-5 w-24 rounded-md border-t-4 border-secondary" />
            <h1 className="prose-lg xs:text-4xl prose text-2xl font-bold text-primary md:text-6xl">
              About Me
            </h1>{' '}
            <hr className="mx-5 w-24 rounded-md border-t-4 border-secondary" />
          </div>
          <div className="my-8 flex grid-cols-7 flex-col-reverse  md:grid md:pt-10 ">
            <p className="col-span-7 my-10 px-5 md:col-span-4  md:mx-16 md:my-0  md:px-0 lg:mx-28 ">
              Hello! My name is Yanfunmi, I am passionate about tech and i like
              building web apps. My interest in web development started back in
              2021. I'm a good problem solver, a chess player and a hard working
              person.
              <br />
              I'm currently a Computer science student at Obafemi Awolowo
              University, ile-ife.
              <br />
              <br />
              <span>
                {' '}
                Here are a few technologies I’ve been working with recently:
              </span>
              <div className="exp">
                <ul>
                  <span className="flex w-4/5 flex-wrap items-center  justify-between py-3">
                    <li>React Js</li>
                    <li>Firebase</li>
                  </span>
                  <span className="flex w-4/5 flex-wrap items-center justify-between py-3">
                    <li>Tailwind CSS</li>
                    <li>Next js</li>
                  </span>
                  <span className="flex w-4/5 flex-wrap items-center justify-between py-3">
                    <li>Node js</li>
                    <li>Mongo DB</li>
                  </span>
                </ul>
              </div>
            </p>
            <div className="sec2__right col-span-7 mx-auto flex flex-col items-center justify-start md:col-span-3">
              <div className="bg h-fit w-fit rounded-lg   " ref={ref}>
                <motion.img
                  src={Personal.src}
                  width={'300px'}
                  height={'600px'}
                  className="= rounded-lg opacity-70 transition-all duration-300 hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
