import design from '../assets/design.png'
import feedWeb from '../assets/feedWeb.png'
import feedBook from '../assets/feedBook.png'
import explore from '../assets/explore.png'

function Design() {
  return (

    <section className="section">
      <img src={design} alt="bg-shape" className="img-fluid bg-shape-3"></img>
      <div className="title-section">
        <h4>Design Works</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <article className="card shadow">
              <img className="rounded card-img-top" src={feedWeb} alt="post-thumb"/>
              <div className="card-body">
                <h5 className="card-title"><a className="text-dark">Feed Website</a>
                </h5>
                <p className="cars-text">
                UX/UI Design mockup built on Adobe XD.
                </p>
                <p className="cars-text">
                Hint: Try the Caramelised Shiitake Mushroom Risotto.
                </p>
                <a href="https://xd.adobe.com/view/1c4a06d5-b894-4645-73d7-a2637ea3ead2-6a7b/?fullscreen" target="blank" className="btn btn-xs">View Mockup</a>
                <a href="https://www.behance.net/gallery/97402483/Feed-UXUI-Design" target="blank" className="btn btn-xs">View Behance</a>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <article className="card shadow">
              <img className="rounded card-img-top" src={feedBook} alt="post-thumb"/>
              <div className="card-body">
                <h5 className="card-title"><a className="text-dark">Feed Book</a>
                </h5>
                <p className="cars-text">Designed on Adobe Photoshop based on the Feed Website mockup.</p>
                <p className="cars-text">Print version of the Feed recipes.</p>
                <a href="https://www.behance.net/gallery/98123487/Feed-Cookbook" target="blank" className="btn btn-xs">View Behance</a>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <article className="card shadow">
              <img className="rounded card-img-top" src={explore} alt="post-thumb"/>
              <div className="card-body">
                <h5 className="card-title"><a className="text-dark">Explore In</a>
                </h5>
                <p className="cars-text">Mobile app mockup built on Adobe XD.</p>
                <p className="cars-text">Helps you organise your day and time.</p>
                <a href="https://xd.adobe.com/view/df5ceb24-4afa-4355-42ea-ed7fb6fae989-a96d/?fullscreen" target="blank" className="btn btn-xs last">View Mockup</a>
                <a href="https://www.behance.net/gallery/97511639/Explore-In-App-UXUI-Design" target="blank" className="btn btn-xs last">View Behance</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Design