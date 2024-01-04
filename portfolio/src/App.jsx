import React, { useEffect, useState } from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from './scenes/Navbar'
import DotGroup from './scenes/DotGroup'
import { motion } from 'framer-motion'
import Landing from './scenes/Landing'
import LineGradient from './components/LineGradient'
import MySkills from './scenes/MySkills'

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage("home")
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    // cleanup function
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 md:h-full mx-auto">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient height='mt-40' />
      <div className="w-5/6 mx-auto md:h-full">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("skills")}
          >
            <MySkills />
          </motion.div>
      </div>
      <LineGradient height='mt-40' />
    </div>
  )
}

export default App
