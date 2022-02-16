import dotsGroupV from '../assets/dotsGroupV.png'
import dotsCyan from '../assets/dotsCyan.png'

function Hero() {
  return (
    <div className="container-main">
      <img src={dotsCyan} alt="bg-shape" className="img-fluid bg-shape-1"></img>
      <img src={dotsGroupV} alt="bg-shape" className="img-fluid bg-shape-2"></img>
      <div className="container-title">
        <h1>esin yilmazbilek</h1>
        <h3>Junior Full Stack Engineer &#38; Designer</h3>
      </div>
    </div>
  )
}

export default Hero