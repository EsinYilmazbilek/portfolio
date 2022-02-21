import github1 from '../assets/icons/github1.svg'
import linkedin from '../assets/icons/linkedin.svg'
import dotsGroupCyan from '../assets/dotsGroupCyan.png'
import dotsOrange from '../assets/dotsOrange.png'


function Footer() {
  return (
    <footer className="bg-dark footer-section" id="contact">
      <img src={dotsOrange} alt="bg-shape" className="img-fluid bg-shape-bottom-1"></img>
      <img src={dotsGroupCyan} alt="bg-shape" className="img-fluid bg-shape-bottom-2"></img>
      {/* <img src={dotsGroupCyan} alt="bg-shape" className="img-fluid bg-shape-bottom-3"></img> */}
      <div className="section">
        <div className="container footer-text">
          <div className="row">
            <div className="col-md-6">
              <h6 className="text-light">Email</h6>
              <p className="text-white paragraph-lg font-footer"><a href="mailto:esinyilmazbilek@gmail.com?subject=Hi Esin!" className="email">esinyilmazbilek@gmail.com</a></p>
            </div>
            <div className="col-md-6">
              <h6 className="text-light">Connect</h6>
              <a href="https://www.linkedin.com/in/esin-yilmazbilek/" target="blank"><img src={linkedin} alt="icon-footer" className="icon-linkedin"/></a>
              <a href="https://github.com/EsinYilmazbilek" target="blank"><img src={github1} alt="icon-footer" className="icon-git"/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top text-center border-dark py-5">
        <p className="mb-0 text-bottom">Copyright &copy;<script>
        var CurrentYear = new Date().getFullYear()
        document.write(CurrentYear)
        </script> Designed &amp; Developed by <a className="text-white-50">Esin Yilmazbilek &#38; Themefisher</a></p>
      </div>
    </footer>
  )
}
export default Footer