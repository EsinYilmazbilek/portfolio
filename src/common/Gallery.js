import si from '../assets/si.png'
import dictionary from '../assets/dictionary.png'
import sniff from '../assets/sniff.png'
import honey from '../assets/honey.png'
import mimas from '../assets/mimas.png'
import yip from '../assets/yip.png'

function Gallery() {

  return (
    <section className="section">
      <div className="container">


        <div className="row shuffle-wrapper">

          <div className="col-lg-6 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
            <div className="position-relative rounded shadow hover-wrapper">
              <img src={si} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm">
                    <b className="hover-title">Space Invaders</b>
                    <p className="hover-text">My take on the classic 80&apos;s arcade game. A  single player Space Invaders game built with Vanilla JavaScript.</p>
                    <a href="https://github.com/EsinYilmazbilek/sei-project-one" target="blank" className="btn btn-xs">On GitHub</a>
                    <a href="https://esinyilmazbilek.github.io/sei-project-one/" target="blank" className="btn btn-xs">On Web</a>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
            <div className="position-relative rounded shadow hover-wrapper">
              <img src={dictionary} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm">
                    <b className="hover-title">Clever Nightingale</b>
                    <p className="hover-text">An online English dictionary. A front end only app built with HTML, CSS (Bulma), JavaScript, React and a 3rd party API.</p>
                    <a href="https://github.com/EsinYilmazbilek/SEI-project-two" target="blank" className="btn btn-xs">On GitHub</a>
                    <a href="https://clever-nightingale.netlify.app/" target="blank" className="btn btn-xs">On Web</a>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
            <div className="position-relative rounded shadow hover-wrapper">
              <img src={sniff} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm">
                    <b className="hover-title">Sniff</b>
                    <p className="hover-text">Sniff is a matchmaking website for furry friends. A full stack MERN application with CRUD functionality.</p>
                    <p className="hover-text">Feel free to use these credentials to look around:</p>
                    <p className="hover-text">email: dolly@email password: pass</p>
                    <a href="https://github.com/EsinYilmazbilek/sei-project-3-fe" target="blank" className="btn btn-xs">On GitHub</a>
                    <a href="https://sniff-project-three.netlify.app/" target="blank" className="btn btn-xs">On Web</a>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
            <div className="position-relative rounded shadow hover-wrapper">
              <img src={honey} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm">
                    <b className="hover-title">Honey &#38; Thyme</b>
                    <p className="hover-text">A Pinterest clone app for cocktails. A full stack app built with CSS (Bootstrap), React, Python, Django, Django REST Framework, PostgreSQL.</p>
                    <p className="hover-text">Feel free to use these credentials to look around:</p>
                    <p className="hover-text">email: betty@email password: pass</p>
                    <a href="https://github.com/EsinYilmazbilek/sei-project-four-fe" target="blank" className="btn btn-xs">On GitHub</a>
                    <a href="https://honeyandthyme.netlify.app/" target="blank" className="btn btn-xs">On Web</a>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
            <div className="position-relative rounded shadow hover-wrapper">
              <img src={mimas} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm">
                    <b className="hover-title">Mimas Permaculture Farm</b>
                    <p className="hover-text">A family owned almond orchard &#38; permaculture farm asked me to build them a website to showcase their work and share educational and practical information on permaculture practices.</p>
                    <p className="hover-text">Built on Wix</p>
                    <p className="hover-text">Translation available on Google Chrome</p>
                    <a href="https://www.mimasbadem.com/" target="blank" className="btn btn-xs">On Web</a>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
            <div className="position-relative rounded shadow hover-wrapper">
              <img src={yip} alt="portfolio-image" className="img-fluid rounded w-100 d-block"/>
              <div className="hover-overlay">
                <div className="hover-content">
                  <a className="btn btn-light btn-sm">
                    <b className="hover-title">Yip Tea</b>
                    <p className="hover-text">A UK based organic, ethical tea brand needed an e-commerce website. This is a project in development and not published commercially yet.</p>
                    <p className="hover-text">Built on Wix</p>
                    <a href="https://esinyilmazbilek.wixsite.com/yiptea" target="blank" className="btn btn-xs">On Web</a>
                  </a>
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