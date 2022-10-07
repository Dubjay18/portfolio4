import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '../images/mypic.png'

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}
const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeIn',
    },
  },
}
const itemMain = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      delay: 0.2,
      duration: 1.3,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 0.6,
      delay: 0.5,
      duration: 0.7,
      type: 'spring',
      stiffness: 180,
    },
  },
}

function Loader({ setLoading }: {setLoading: (state: boolean)=> void;}) {
  return (
    <div className="h-screen overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
        className="flex h-full items-center justify-center"
      >
        <motion.div variants={itemMain}>
          <motion.img
            src={logo.src}
            width={'210px'}
            height={'200px'}
            layoutId="main-image"
            className="animate-bounce"
          />
        </motion.div>
        
      </motion.div>
    </div>
  )
}

export default Loader
