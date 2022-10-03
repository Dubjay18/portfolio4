import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { SocialIcon } from 'react-social-icons'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import Loader from '../components/Loader'
const Home: NextPage = () => {
  const [loading, setLoading] = useState<Boolean>(true)
  return (
    <div className="bg-slate-100">
      <Head>
        <title>Dev-jay</title>
        <meta
          name="description"
          content="Jeje Yanfunmi - Dev-jay is an experienced full-stack developer that eats and breaths React js."
        />
        <meta property="og:url" content="https://jayfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dev-jay" />
        <meta
          property="og:description"
          content="Jeje Yanfunmi - Dev-jay is an experienced full-stack developer that eats and breaths React js."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1656803174/OGimage_mgka5q.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jayfolio.vercel.app" />
        <meta property="twitter:url" content="https://jayfolio.vercel.app/" />
        <meta name="twitter:title" content="Dev-jay" />
        <meta
          name="twitter:description"
          content="Jeje Yanfunmi - Dev-jay is an experienced full-stack developer that eats and breaths React js."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1656803174/OGimage_mgka5q.jpg"
        />
      </Head>

      <main className=" min-h-screen overflow-x-hidden text-base-content">
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {loading ? (
              <motion.div className="cus-scroll overflow-y-hidden" key="loader">
                <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              <>
                <div className="fixed left-0 z-50 flex min-h-screen w-[50px] flex-col items-center justify-center gap-6 bg-transparent ">
                  <div>
                    <SocialIcon
                      url="https://github.com/Dubjay18/"
                      fgColor="white"
                      className="w-5 rounded-lg   transition-all duration-500 hover:scale-125"
                    />
                  </div>
                  <div>
                    <SocialIcon
                      url="https://www.linkedin.com/in/oluwayanfunmi-jeje-a023b2210/"
                      fgColor="white"
                      className="rounded-lg  transition-all duration-500 hover:scale-125"
                    />
                  </div>
                  <div>
                    <SocialIcon
                      url="https://twitter.com/@YanfunmiJ"
                      fgColor="white"
                      className="rounded-lg  transition-all duration-500 hover:scale-125"
                    />
                  </div>
                </div>
                <Navbar />
                <Hero />
                <About />

                <Experience />

                <Projects />
                <Skills />
                <Contact />
              </>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </main>
    </div>
  )
}

export default Home
