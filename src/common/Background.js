import dots from '../assets/dots.png'
import chevron from '../assets/chevron.svg'
import dotsGroupCyan from '../assets/dotsGroupCyan.png'
import dotsOrange from '../assets/dotsOrange.png'

function Background() {
  return (
    <section className="section background" id="background">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-12 text-center">
            <h2 className="background-title">Background</h2>
            <p className="background-text paragraph-lg"><a href="https://www.linkedin.com/in/esin-yilmazbilek/" target="blank" className="linke">A little bit on my background below and more on Linkedin.</a></p>
            <p className="background-text paragraph-lg"><a href="https://docs.google.com/document/d/1lZj7R_Dr5N659GBaFIIdb6TM2Ztvgap3JJhRRL0LWys/edit?usp=sharing" target="blank" className="linke">Click <span className="here">here</span> for my full CV.</a></p>
            <a href="#experience"><img src={chevron} className="chevron-background" /></a>
          </div>
          <img src={dots} alt="bg-shape" className="img-fluid bg-shape-3"></img>
          <div className="col-lg-12 text-center experience" id="experience">
            <h2 className="background-each-title">Work Experience</h2>
          </div>
          <div className="col-lg-3 col-md-4 text-center">
            <p className="year">May 2022 - ongoing</p>
            <h5 className="background-each">Frontend Engineer</h5>
            <p className="work">Mercury Labs, London (Hybrid)</p>
          </div>
          <div className="col-lg-3 col-md-4 text-center">
            <p className="year">Sep 2019 - Mar 2020</p>
            <h5 className="background-each">Office Manager</h5>
            <p className="work">Build Up Foundation, London</p>
          </div>
          <div className="col-lg-3 col-md-4 text-center">
            <p className="year">Mar 2019 - Dec 2019</p>
            <h5 className="background-each">Studio Manager</h5>
            <p className="work">Studio Bark, London</p>
          </div>
          <div className="col-lg-3 col-md-4 text-center">
            <p className="year">Sep 2016 - Oct 2017</p>
            <h5 className="background-each">Freelance Comms Manager</h5>
            <p className="work">Mizzi Studio, London</p>
          </div>

          <div className="col-lg-12 text-center">
            <h2 className="background-each-title">Education</h2>
          </div>
          <div className="col-lg-3 col-md-4 text-center">
            <p className="year">2022</p>
            <h5 className="background-each">Software Engineering</h5>
            <p className="education">General Assembly, London</p>
          </div>
          <div className="col-lg-3 col-md-4 text-center">
            <p className="year">2020</p>
            <h5 className="background-each">UX/UI Design</h5>
            <p className="education">Udemy</p>
          </div>
          <div className="col-lg-3 col-md-4 text-center">
            <p className="year">2013</p>
            <h5 className="background-each">MA Design Futures</h5>
            <p className="education">Goldsmiths University of London</p>
          </div>
          <div className="col-lg-3 col-md-4 text-center">
            <p className="year">2012</p>
            <h5 className="background-each">BA Product Design</h5>
            <p className="education">Istituto Europeo di Design, Milan</p>
          </div>
        </div>
        <div className="col-lg-12 text-center what-else">
          <img src={dotsOrange} alt="bg-shape" className="img-fluid bg-shape-bottom-1"></img>
          <img src={dotsGroupCyan} alt="bg-shape" className="img-fluid bg-shape-bottom-2"></img>
          <h2 className="background-each-title">What else?</h2>
          <p className="what-else-text paragraph-lg">When I am not looking at code, I like to get hands on with making jams, doing pottery, and keeping up to date with science, well-being, and technology. I also like to travel, now more than ever. Next stop: Tasmania. Currently reading: Venus on the Half Shell by Kilgore Trout.</p>
        </div>


      </div>
    </section>
  )
}

export default Background

