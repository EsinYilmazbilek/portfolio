import si from '../assets/si.png'
import dictionary from '../assets/dictionary.png'
import sniff from '../assets/sniff.png'
import honey from '../assets/honey.png'


function Gallery() {
  return (
  // <>
  //   <div className="gallery">
  //     <div className="project">
  //       <img src={si} className="image"></img>
  //       <div className="text">
  //         <div className="textArea">
  //           <a className="btn btn-light btn-sm" href="#!">view project</a>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="project">
  //       <img src={dictionary} className="image"></img>
  //       <div className="text">
  //         <div className="textArea">
  //           <a className="btn btn-light btn-sm" href="#!">view project</a>
  //         </div>
  //       </div>
  //     </div>
        
  //     <div className="project">
  //       <img src={sniff} className="image"></img>
  //       <div className="text">
  //         <div className="textArea">
  //           <a className="btn btn-light btn-sm" href="#!">view project</a>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="project">
  //       <img src={honey} className="image"></img>
  //       <div className="text">
  //         <div className="textArea">
  //           <a className="btn btn-light btn-sm" href="#!">view project</a>
  //         </div>
  //       </div>
  //     </div>
  //   </div></>

    <section className="section">
      <div className="container">
        {/* <div className="row mb-5">
          <div className="col-12">
          </div>
        </div> */}
        <div className="row shuffle-wrapper">
          <div className="col-lg-6 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
            <div className="position-relative rounded hover-wrapper">
              <img src={si} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm" href="#!">view project</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
            <div className="position-relative rounded hover-wrapper">
              <img src={dictionary} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm" href="#!">view project</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
            <div className="position-relative rounded hover-wrapper">
              <img src={sniff} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm" href="#!">view project</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
            <div className="position-relative rounded hover-wrapper">
              <img src={honey} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm" href="#!">view project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery