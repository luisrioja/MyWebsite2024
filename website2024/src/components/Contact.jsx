import React from 'react'

const Contact = () => {
  return (
    <div className="container">
  
    <div className="section-title">
      <h2>Contact</h2>
      <p>Methods of contact <div id="resultado" className="sent-message"></div></p>
    </div>

    <div className="row mt-2">

      <div className="col-md-6 d-flex align-items-stretch">
        <div className="info-box">
          <i className="bx bx-map"></i>
          <h3>City</h3>
          <p>Madrid</p>
        </div>
      </div>

      <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
        <div className="info-box">
          <i className="bx bx-share-alt"></i>
          <h3>Social Medias</h3>
          <div className="social-links">
            <a href="https://twitter.com/LuisRioja11" className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
            <a href="https://es.linkedin.com/in/luis-rioja-c%C3%A1ceres-aa72941b3" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/luisrioja11/" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
            <a href="https://github.com/Luiser-ttv" className="github" target="_blank"><i className="bi bi-github"></i></a>
          </div>
        </div>
      </div>

      <div className="col-md-6 mt-4 d-flex align-items-stretch">
        <div className="info-box">
          <i className="bx bx-envelope"></i>
          <h3>Email</h3>
          <p>info@luisriojacaceres.com</p>
        </div>
      </div>
      <div className="col-md-6 mt-4 d-flex align-items-stretch">
        <div className="info-box">
          <i className="bx bx-phone-call"></i>
          <h3>Phone</h3>
          <p>Not Available</p>
        </div>
      </div>
    </div>


    <form id ="miFormulario" className="php-email-form mt-4">
      <div className="form-group d-none">
        <input type="text" className="form-control" name="first_name" />
        <div className="validate"></div>
        </div>
      <div className="row">
        <div className="col-md-6 form-group">
          <input type="text" name="name" className="form-control" id="name" placeholder="Name" required />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
        </div>
      </div>
      <div className="form-group mt-3">
        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
      </div>
      <div className="form-group mt-3">
        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
      </div>
      <div className="form-group mt-3">
        <div className="g-recaptcha" data-sitekey="6LfbI4AlAAAAAMiMx_pUgtj4wfbj_mWjSYRwuWh6"></div>
      </div>
      <div className="text-center"><button type="submit">Send</button></div>
    </form>

  </div>
  )
}

export default Contact