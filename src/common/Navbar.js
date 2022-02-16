import React from 'react'
import { Link } from 'react-router-dom'
// import Hamburger from 'hamburger-react'
import logo from '../assets/logo.png'

function Navbar() {
  // const [sideBarShow, setSideBarShow] = React.useState(false)
  // const handleSideBar = () => setSideBarShow(!sideBarShow)

  return (

    <section className="navigation fixed-top">
      <Link to="/"><img src={logo} className="logo"></img></Link>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand font-tertiary" href="index.html"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
          aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navigation">
          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">Design Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>

  )
}

export default Navbar


{/* <nav className="nav nav-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>
        <span className="nav-title">Full Stack Developer &#38; Designer</span>
        <div className="nav-buttons">
          <>
            <a href="/projects" className="nav-button">Projects</a>
            <a href="/projects" className="nav-button">Design Works</a>
            <a href="/about" className="nav-button">About</a>
            <a href="/contact" className="nav-button">Contact</a>
          </>
        </div>
      </nav>

      <nav className="nav burger-toggle">
        <Link to="/"><img src={logo} className="logo"></img></Link>
        <Link to="/" className="brand-name"></Link>
        <div className="burger-icon" onClick={handleSideBar}>
          <Hamburger toggled={sideBarShow} toggle={setSideBarShow} />
        </div>
        <div className={
          sideBarShow
            ? 'side-nav-menu-container active'
            : 'side-nav-menu-container'
        }>
          <div onClick={handleSideBar}>
            <div className="nav-buttons">
              <ul>
                <li className="li-buttons"><a href="/projects" className="li-hrefs">Projects</a></li>
                <li className="li-buttons"><a href="/projects" className="li-hrefs">Design Works</a></li>
                <li className="li-buttons"><a href="/about" className="li-hrefs">About</a></li>
                <li className="li-buttons"><a href="/contact" className="li-hrefs">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}