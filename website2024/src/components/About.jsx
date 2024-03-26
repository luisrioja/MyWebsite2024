import React from 'react';



const About = () => {
  return (
    <div>
      {/* <!-- ======= About Me ======= --> */}
      <div className="about-me container">
        <div className="section-title">
          <h2>About me</h2>
          <p>Learn more about me</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/me.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Programmer &amp; Game Designer</h3>
            <p className="fst-italic"></p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Web:</strong> <span>www.luisriojacaceres.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+34 604 21 96 67</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Madrid, Spain</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>info@luisriojacaceres.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Availability:</strong> <span>Studying</span></li>
                </ul>
              </div>
            </div>
            <p>
              I am a student and technician in <span>Multiplatform Application Development(DAM)</span>, my current and past studies are at the <span>Universidad Francisco de Vitoria</span>.
              My current studies are <span>Narration and Video Game Creation</span> with my own degree in <span>Technical Artist</span>.
              Now let's advance and learn more about me.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End About Me --> */}

      {/* <!-- ======= Counts ======= --> */}
      <div className="counts container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="23" data-purecounter-duration="1" className="purecounter"></span>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="34" data-purecounter-duration="1" className="purecounter"></span>
              <p>Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-briefcase"></i>
              <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1" className="purecounter"></span>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-clock"></i>
              <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hours or less/response</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Counts --> */}

      {/* <!-- ======= Skills  ======= --> */}
      <div className="skills container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">JAVA <i className="val">92%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">HTML &amp; CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">C# <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">PHP <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Python <i className="val">65%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">SQL <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Skills --> */}
    </div>
  );
};

export default About;

