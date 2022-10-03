import React, { useState, useEffect } from 'react'
import Mypic from '../images/mypic.png'
import { motion } from 'framer-motion'
function Navbar() {
  const [newBg, setNewBg] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  useEffect(() => {
    const handleNewBg = () => {
      if (window.scrollY >= 30) {
        setNewBg(true)
      } else {
        setNewBg(false)
      }
    }
    window.addEventListener('scroll', handleNewBg)
  }, [])
  return (
    <>
      <div
        className={`${newBg && 'bg '} navbar  fixed top-0 z-50 text-[#4ECDC4] `}
      >
        <div className="lg:navbar-start">
          <div className="dropdown">
            <label
              tabIndex="0"
              className="btn btn-ghost lg:hidden "
              onClick={() => setMobileNav((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <ul
            tabIndex="0"
            className={`dropdown-content menu rounded-box menu-compact absolute ${
              mobileNav ? 'top-0' : '-top-[1000px]'
            } left-0 flex h-screen w-full flex-col items-center justify-center gap-10 rounded-none bg-base-100 p-2 shadow transition-all duration-500 lg:hidden`}
          >
            <button type="button" onClick={() => setMobileNav(false)}>
              x
            </button>
            <li className="text-2xl my-5">
              <a>My Projects</a>
            </li>
            <li className="text-2xl my-5">
              <a>About Me</a>
            </li>
            <li className="text-2xl my-5">
              <a>My Tools</a>
            </li>
            <li className="text-2xl my-5">
              <a>Contact Me</a>
            </li>
          </ul>
          <a className="btn btn-ghost text-xl normal-case text-[#4ECDC4]">
            <motion.img
              src={Mypic.src}
              alt=""
              height={40}
              width={40}
              className="mx-3"
              layoutId="main-image"
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            />
            Jayfolio
          </a>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal p-0 !justify-between w-3/4 mx-auto">
            <li className="cursor-pointer">
              <a>My Projects</a>
            </li>
            <li className="cursor-pointer">
              <a>About Me</a>
            </li>
            <li className="cursor-pointer">
              <a>My Tools</a>
            </li>
            <li className="cursor-pointer">
              <a>Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
