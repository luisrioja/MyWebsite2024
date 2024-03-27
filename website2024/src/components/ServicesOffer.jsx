import React from 'react'

const ServicesOffer = () => {
  return (
    <div className="container">
  
    <div className="section-title">
      <h2>Services</h2>
      <p>My Services</p>
    </div>

    <div className="row">
      
      <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div className="icon-box">
          <div className="icon"><i className="bx bx-file"></i></div>
          <h4><a>Web Development</a></h4>
          <p>Creation of fully customized web pages for startups and personal use</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
        <div className="icon-box">
          <div className="icon"><i className="bx bx-phone"></i></div>
          <h4><a href="">Coding mobiles apps</a></h4>
          <p>Development of app fully customized for IOS/Android</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
        <div className="icon-box">
          <div className="icon"><i className="bx bx-game"></i></div>
          <h4><a href="">Game Developer</a></h4>
          <p>Development of videogames at engines like Unity or Unreal</p>
        </div>
      </div>
    </div>

  </div>
  )
}

export default ServicesOffer