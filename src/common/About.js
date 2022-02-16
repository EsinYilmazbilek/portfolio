import dots from '../assets/dots.png'
import chevron from '../assets/chevron.svg'

function About() {
  return (
    <section className="section">
      <img src={dots} alt="bg-shape" className="img-fluid bg-shape-3"></img>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center">
            <h2>About Me</h2>
            <p className="font-secondary paragraph-lg">After 7 years of experience working in design and management, I decided to future proof what I can offer and open a new path for myself. I extended my technical skills with a 3-month Software Engineering bootcamp at General Assembly.</p>
            <p className="font-secondary paragraph-lg">I am inspired by achieving sustainable results with my creative thinking, problem solving, and programming skills. Whilst looking for my next workplace, I am polishing my coding skills with a side project. I am keen to build upon my knowledge and continue to learn as I grow in my next role.</p>
            <p className="see-below">See my projects below</p>
            <img src={chevron} className="chevron"/>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default About