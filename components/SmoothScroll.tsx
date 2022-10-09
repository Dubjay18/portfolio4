import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion"

type refType = () =>  React.MutableRefObject<HTMLDivElement | null>;

const SmoothScroll = () => {
  const scrollRef= useRef<HTMLDivElement>(null)
  const ghostRef = useRef<HTMLDivElement>(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    if(null !== scrollRef.current){
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
    }
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    if(null !== ghostRef.current)
    resizeObserver?.observe(ghostRef?.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useViewportScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <div className="scroll-container">
        <div className="text-white text-xl">dkgnfkg</div>
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div className="thumbnails">
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
            <div className="thumbnail" />
          </div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  )
}

export default SmoothScroll
