import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface ICursor {
  x: number
  y: number
}
function MyApp({ Component, pageProps }: AppProps) {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
      <motion.div
        className="main-cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </ParallaxProvider>
  )
}

export default MyApp
