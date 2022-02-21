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
            <p className="font-secondary paragraph-lg">After 7 years of experience working in design and management, I wanted to future proof my skills and open a new path for myself. With covid pausing my career, I decided to upskill and learn web development. After doing a short UX/UI Design course, I completed an immersive 12-week Software Engineering bootcamp at General Assembly.
            </p>
            <p className="font-secondary paragraph-lg">In my work, I am inspired to achieve sustainable outcomes with my problem solving, creative thinking, and programming skills. I am keen to build upon my knowledge and continue to learn as I move forward in my programming path. Whilst looking for my next workplace, I am polishing my coding skills with a side project and volunteering with Code Your Future.</p>
            <p className="font-secondary paragraph-lg">When I am not looking at code, I like to get hands on with making jams, doing pottery, and keeping up to date with science, technology and the environment.</p>
            <p className="see-below" id="projects">See my projects below</p>
            <a href="#projects"><img src={chevron} className="chevron" /></a>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default About