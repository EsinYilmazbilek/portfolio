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
            <p className="font-secondary paragraph-lg">As a Junior Frontend Developer with background in Design, I bring over 8 years of experience managing projects and teams.</p>
            <p className="font-secondary paragraph-lg">After studying a UX/UI Design course in 2020, I decided to add programming to my skillset and completed 12-week Software Engineering bootcamp at General Assembly London in 2022.</p>
            <p className="font-secondary paragraph-lg">Following the bootcamp, I worked as a Frontend Engineer at Mercury Labs and volunteered with a non-profit organisation called Code Your Future in London. I relocated to Adelaide in Dec 22 and currently building UI Design and Web Dev projects with Figma and React.</p>
            <p className="font-secondary paragraph-lg">I am inspired to combine my design and coding skills to achieve sustainable outcomes and keen to utilise them in an engaging and collaborative environment as I grow as a developer.</p>
            <p className="see-below" id="projects">See my projects below</p>
            <a href="#projects"><img src={chevron} className="chevron" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


