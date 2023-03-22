import dotsGroupV from '../assets/dotsGroupV.png'
import dotsCyan from '../assets/dotsCyan.png'
import { Parallax } from 'react-scroll-parallax'

function Hero() {
  return (
    <div className="container-main" id="hero">
      <img src={dotsCyan} alt="bg-shape" className="img-fluid bg-shape-1"></img>
      <img src={dotsGroupV} alt="bg-shape" className="img-fluid bg-shape-2"></img>
      <Parallax speed={-10}>
        <div className="container-title">

          <h1>esin yilmazbilek</h1>
          <h3 className="role">Frontend Developer &#38; Designer</h3>
        </div>
      </Parallax>
    </div>
  )
}

export default Hero