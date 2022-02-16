import si from '../assets/si.png'
import dictionary from '../assets/dictionary.png'
import sniff from '../assets/sniff.png'
import honey from '../assets/honey.png'
// import banner from '../assets/banner.png'

function Home() {

  return (
    <>
      <div className="container-main">
        <div className="container-title">
          <h1>esin yilmazbilek</h1>
          <span className="arrow"></span>
          {/* <img src={banner} className="esin"></img> */}
          {/* <span className="title-word title-word-1">esin </span>
          <span className="title-word title-word-2">yilmazbilek</span>  */}
        </div>
      </div>

      <div className="gallery">

        <div className="project">
          <img src={si} className="image"></img>
          <div className="text">
            <div className="textArea">
              <p className="title">Space Invaders</p>
              <p>My take on the classic 80&#39;s Space Invaders arcade game with Borg theme. This grid base single player game is my first dev project built with HTML, CSS, Vanilla JavaScript and GitHub.</p>
              <p>Click here for details.</p>
              <p>Click here to view the website.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <img src={dictionary} className="image"></img>
          <div className="text">
            <div className="textArea">
              <p className="title">English Dictionary</p>
              <p>An English Dictionary built with an external API, utilising HTML, CSS, JavaScript and React.</p>
              <p>Click here for details.</p>
              <p>Click here to view the website.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <img src={sniff} className="image"></img>
          <div className="text">
            <div className="textArea">
              <p className="title">Sniff</p>
              <p>A match making site for our furry friends. A full stack MERN app with CRUD functionality.</p>
              <p>Click here for details.</p>
              <p>Click here to view the website.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <img src={honey} className="image"></img>
          <div className="text">
            <div className="textArea">
              <p className="title">Honey&#38;Thyme</p>
              <p>A Pinterest clone app built for cocktails, utilising CSS (Bootstrap), React, Python, Django, Django REST Framework, and PostgreSQL.</p>
              <p>Click here for details.</p>
              <p>Click here to view the website.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home