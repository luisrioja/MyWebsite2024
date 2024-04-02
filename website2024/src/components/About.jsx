import React from 'react';
import { FaJava } from 'react-icons/fa';

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
            <img src="../assets/me.jpg" className="img-fluid" alt="" />
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

      <div style={{ textAlign: 'right', marginTop: '50px', cursor: 'pointer' }}>
        <FaJava size={40} style={{ transition: 'color 1s' }} />
        <style jsx>{`
          .fa-java:hover {
            color: red;
          }
        `}</style>
      </div>
    </div>
  );
};

export default About;
