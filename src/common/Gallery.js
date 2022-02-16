import si from '../assets/si.png'
import dictionary from '../assets/dictionary.png'
import sniff from '../assets/sniff.png'
import honey from '../assets/honey.png'


function Gallery() {
  return (
    
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
  )
}

export default Gallery