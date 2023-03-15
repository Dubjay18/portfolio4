import React from 'react'
import SvgLine from './SvgLine'
import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/solid'
import AnimatedLayout from './AnimatedLayout'

function Hero() {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  const line1 = `I'm a Software engineer (Frontend heavy) specilized in building top notch applications for the web.`
  // 10182d
  return (
    <AnimatedLayout>
      <div className="hero relative min-h-screen overflow-x-hidden  text-white">
        <h2 className="absolute left-20 top-20 text-4xl font-bold text-[#4ECDC4]">
          {'</>'}
        </h2>
        <h2 className="absolute right-20 bottom-20 z-20 text-4xl font-black text-[#4ECDC4]">
          {'</>'}
        </h2>
        {/* <img
        className="mask mask-parallelogram-2 absolute -right-72 top-0 bg-black/70 opacity-40 "
        src="https://images.idgesg.net/images/article/2021/08/sale_301208_article_image-100900756-large.jpg?auto=webp&quality=85,70"

      /> */}

        <div className="hero-content text-center">
          <div className="mx-auto max-w-xs md:max-w-md">
            <p className="py-6 text-[#4ECDC4]">Hello, I'm</p>
            <h5 className="text-4xl font-bold md:text-7xl">
              <span className="txt rounded-md bg-slate-100 p-2 text-black">
                Yan
              </span>
              funmi
            </h5>
            <div className="mt-1">
              <SvgLine />
            </div>

            <motion.p
              variants={sentence}
              initial="hidden"
              animate="visible"
              className="py-6 md:text-xl"
            >
              {line1.split('').map((char, index) => {
                return (
                  <motion.span
                    variants={letter}
                    key={char + '-' + index}
                    className=""
                  >
                    {char}
                  </motion.span>
                )
              })}
              <br />
            </motion.p>
            <a
              href="#about"
              className="btn  rounded-lg border-none bg-[#4ECDC4] !px-10 text-black transition-all duration-500 hover:scale-110 hover:bg-[#4ECDC4]/70 hover:text-white hover:shadow"
            >
              Scroll down <ArrowDownIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  )
}

export default Hero
