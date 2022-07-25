import dots from '../assets/dots.png'
import chevron from '../assets/chevron.svg'

function About() {
  return (
    <section className="section" id="about">
      <img src={dots} alt="bg-shape" className="img-fluid bg-shape-3"></img>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="background-title">About Me</h2>
            <p className="font-secondary paragraph-lg">After +8 years of experience working in creative environments doing design and management, I wanted to future proof my skills and open a new path for myself. After completing an UX/UI Design course in 2020, I realised that where I actually belong is behind the browser, so I decided to undertake an immersive 12-week Software Engineering bootcamp at General Assembly, London.</p>
            <p className="font-secondary paragraph-lg">Currently working as a Frontend Engineer at Mercury Labs, a London-based agency, building side projects with Nuxt3 and React, and volunteering with Code Your Future.</p>
            <p className="font-secondary paragraph-lg">I am inspired to combine my creative and coding skills to achieve sustainable outcomes. I am keen to build upon my knowledge and continue to learn in an engaging and collaborative environment as I grow as a Software Engineer.</p>
            <p className="see-below" id="projects">See my projects below</p>
            <a href="#projects"><img src={chevron} className="chevron" /></a>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default About


