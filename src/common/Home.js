import si from '../assets/si.png'
import dictionary from '../assets/dictionary.png'
import sniff from '../assets/sniff.png'
import honey from '../assets/honey.png'
import dotsGroupV from '../assets/dotsGroupV.png'
import dotsCyan from '../assets/dotsCyan.png'
import dots from '../assets/dots.png'
import chevron from '../assets/chevron.svg'

function Home() {

  return (
    <>
      <div className="container-main">
        <img src={dotsCyan} alt="bg-shape" className="img-fluid bg-shape-1"></img>
        <img src={dotsGroupV} alt="bg-shape" className="img-fluid bg-shape-2"></img>
        <div className="container-title">
          <h1>esin yilmazbilek</h1>
        </div>
      </div>

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

      <div className="gallery">
        <div className="project">
          <img src={si} className="image"></img>
          <div className="text">
            <div className="textArea">
              <a className="btn btn-light btn-sm" href="#!">view project</a>
            </div>
          </div>
        </div>

        <div className="project">
          <img src={dictionary} className="image"></img>
          <div className="text">
            <div className="textArea">
              <a className="btn btn-light btn-sm" href="#!">view project</a>
            </div>
          </div>
        </div>

        <div className="project">
          <img src={sniff} className="image"></img>
          <div className="text">
            <div className="textArea">
              <a className="btn btn-light btn-sm" href="#!">view project</a>
            </div>
          </div>
        </div>

        <div className="project">
          <img src={honey} className="image"></img>
          <div className="text">
            <div className="textArea">
              <a className="btn btn-light btn-sm" href="#!">view project</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home