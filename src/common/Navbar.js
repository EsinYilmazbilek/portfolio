import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import logo from '../assets/logo.png'

function Navbar() {
  const [sideBarShow, setSideBarShow] = React.useState(false)
  const handleSideBar = () => setSideBarShow(!sideBarShow)

  return (
    <>
      <nav className="nav nav-toggle">
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
      </nav>

    </>
  )
}

export default Navbar