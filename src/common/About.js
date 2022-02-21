import dots from '../assets/dots.png'
import chevron from '../assets/chevron.svg'

function About() {
  return (
    <section className="section" id="about">
      <img src={dots} alt="bg-shape" className="img-fluid bg-shape-3"></img>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h2>About Me</h2>
            <p className="font-secondary paragraph-lg">After 7 years of experience working in creative environments doing design and management, I wanted to future proof my skills and open a new path for myself. With covid pausing my career in March 2020, I wanted to upskill and took a short UX/UI Design course. It made me realise that where I actually belong is behind the browser, so I decided to undertake an immersive 12-week Software Engineering bootcamp at General Assembly, London.</p>
            <p className="font-secondary paragraph-lg">I am inspired to combine my creative and coding skills to achieve sustainable outcomes. I am keen to build upon my knowledge and continue to learn in an engaging and collaborative environment as I grow as a software engineer.</p>
            <p className="font-secondary paragraph-lg">Whilst looking for my next workplace, I am polishing my coding skills with a full stack side project and volunteering with Code Your Future.</p>
            <p className="see-below" id="projects">See my projects below</p>
            <a href="#projects"><img src={chevron} className="chevron" /></a>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default About