import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMouseMove = ({ pageX, pageY }: MouseEvent) => {
      cursor.style.left = `${pageX}px`
      cursor.style.top = `${pageY}px`
    }

    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [cursorRef])

  return (
    <div id="cursor" ref={cursorRef} className="cursor">
      <div className="cursorInner" />
    </div>
  )
}

export default CustomCursor
