import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './common/Navbar'
import Hero from './common/Hero'
import About from './common/About'
import Skills from './common/Skills'
import Gallery from './common/Gallery'
import Design from './common/Design'
import Background from './common/Background'
import Footer from './common/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ParallaxProvider>
          <Hero />
        </ParallaxProvider>
        <About />
        <Gallery />

        <Design />
        <Skills />
        <Background />
      </BrowserRouter><Footer />
    </>
  )
}

export default App
