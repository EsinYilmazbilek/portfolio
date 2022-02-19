import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './common/Navbar'
import Hero from './common/Hero'
import About from './common/About'
import Skills from './common/Skills'
import Gallery from './common/Gallery'
import Design from './common/Design'
// import Experience from './common/Experience'
import Footer from './common/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Design />
        <Skills />
        {/* <Experience /> */}
      </BrowserRouter><Footer />
    </>
  )
}

export default App
