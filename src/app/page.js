'Use Client'

import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import ScrollingText from './components/ScrollingText'

const page = () => {
  return (
    <main>
      <NavBar />
      <Home />
      <ScrollingText />
      <Services />
      <Work />
      <Contact />
    </main>
  )
}

export default page