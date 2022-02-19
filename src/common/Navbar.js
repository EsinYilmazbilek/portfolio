import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {

  return (

    <section className="navigation fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand"><img src={logo} className="logo" href="#"></img></a>
          <button className="navbar-toggler align-items-end" type="button" data-bs-toggle="collapse" data-bs-target="#navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-center" id="navigation">
          
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#design">Design Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Connect</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>

  )
}

export default Navbar


// aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">


{/* <section className="navigation fixed-top">
<Link to="/"><img src={logo} className="logo"></img></Link>
<nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="#" aria-expanded="false" aria-controls="navigation"></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-center" id="navigation">
    
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#design">Design Works</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Connect</a>
      </li>
    </ul>
  </div>
</nav>
</section> */}



{/* <section className="navigation fixed-top">
      <Link to="/"><img src={logo} className="logo"></img></Link>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" role="button" aria-expanded="false" aria-controls="navigation"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-expanded="false" aria-controls="navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-center" id="navigation">
          
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#design">Design</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Connect</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section> */}