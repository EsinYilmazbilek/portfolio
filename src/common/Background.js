// import dots from '../assets/dots.png'

function Background() {
  return (
    <section className="section skills" id="skills">
      {/* <img src={dots} alt="bg-shape" className="img-fluid bg-shape-3"></img> */}
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-12 text-center">
            <h2 className="skills-title" id="skills">Background</h2>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="d-flex">
              <div className="mr-lg-5 mr-3">
                <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
              </div>
              <div>
                <p className="text-dark mb-1">2022</p>
                <h4>Immersive Software Engineering</h4>
                <p className="mb-0 text-light">General Assembly</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                </div>
                <div>
                  <p className="text-dark mb-1">2013</p>
                  <h4>MA Design Futures</h4>
                  <p className="mb-0 text-light">Goldsmiths University of London</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                </div>
                <div>
                  <p className="text-dark mb-1">2012</p>
                  <h4>BA Product Design</h4>
                  <p className="mb-0 text-light">Istituto Europe di Design, Milan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Background


{/* <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div> */}