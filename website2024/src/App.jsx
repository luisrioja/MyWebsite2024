import { Navbar, SocialMedia } from "./components";

const App = () => (
  
  <div>
    <header id="header">
    <Navbar />
    </header> 
  
    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
  
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
            <p className="fst-italic">
             
            </p>
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

  
      
  
    </section>
    {/* <!-- End About Section --> */}
  
    {/* <!-- ======= Resume Section ======= --> */}
    <section id="resume" className="resume">
      <div className="container">
  
        <div className="section-title">
          <h2>Resume</h2>
          <p>Take a look</p>
        </div>
  
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Overwiew</h3>
            <div className="resume-item pb-0">
              <h4>Luis Rioja</h4>
              <p><em>I am a Junior Developer, specialized in Java, also in C#, C, C++, JavaScript, HTML, CSS, Laravel, Swift, MySQL and PHP.
                The environments in which I have worked are:
                NetBeans, Eclipse, Visual Studio and Studio Code, X-Code, Android Studio.
                My native language is Spanish, besides having a B2 level of English.
              </em></p>
              <p>
              <ul>
                <li>Madrid, Spain</li>
                <li>(+34) 604 21 96 67</li>
                <li>info@luisriojacaceres.com</li>
              </ul>
              </p>
            </div>
  
            <h3 className="resume-title">Studies</h3>
            <div className="resume-item">
              <h4>Voluntary learning in Multiplatform Applications Development</h4>
              <h5>2019 - 2021</h5>
              <p><em>Francisco de Vitoria University, Madrid</em></p>
              <p>Graduate in Development in Multiplatform Applications, with own degrees in Unity, 
                and own degree in Title in training and human and professional leadership, both obtained in 
                the academic year 2019-2020, with a TFC qualified with a quality of Excellent (10).</p>
            </div>
            <div className="resume-item">
              <h4>Degree in Narration and Video Game Creation</h4>
              <h5>2021 - Currently</h5>
              <p><em>Francisco de Vitoria University, Madrid</em></p>
              <p>Currently pursuing this degree, looking for a new specialty and focus on the video game industry, 
                in addition to the title the university offers a degree in Technical Artist, which gives me more useful 
                knowledge that will make me more university offers a degree in Technical Artist, which gives me more useful 
                knowledge that will make me more complete and competent.</p>
            </div>
            <div className="resume-item">
              <h4>VideoGame Business</h4>
              <h5>2023 - Currently</h5>
              <p><em>NHL Stenden, Leeuwarden</em></p>
              <p>Minor oriented towards learning marketing in the video game industry, which make me a more complete and competent professional. The objective of these studies will be to obtain investors and make a plan to attract both investors and the target audience.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional experience</h3>
            <div className="resume-item">
              <h4>Intern in NTT DATA</h4>
              <h5>March 2021 - June 2021</h5>
              <p><em>NTT DATA, Madrid </em></p>
              <p>
                As part of my internship at DAM, I worked for 3 months as an intern, 
                which gave me the opportunity to see the working world and to get a broader 
                experience of the working world and how large companies such as NTT DATA work 
                to get a broader experience of the working world and how large companies such as NTT DATA work.
              </p>
            </div>
  
            <div className="resume-item">
              <h4>Indie Consultor</h4>
              <h5>Sept. 2023 - Currently</h5>
              <p><em>NHL Stenden, Leeuwarden </em></p>
              <p>
                  We work side by side to help and achieve a common goal, to get investors to look at our game, for this we develop a marketing plan that will attract our target audience and potential investors to ensure the success of our game.
              </p>
            </div>
            
          </div>
        </div>
  
      </div>
    </section>
    {/* <!-- End Resume Section --> */}
  
    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">
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
    </section>
    {/* <!-- End Services Section --> */}
  
    {/* <!-- ======= Portfolio Section ======= --> */}
    <section id="portfolio" className="portfolio">
      <div className="container">
  
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My projects</p>
        </div>
  
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-sql">SQL</li>
              <li data-filter=".filter-web">Web</li>
              <li data-filter=".filter-tfc">TFC</li>
              <li data-filter=".filter-games">Games</li>
            </ul>
          </div>
        </div>
  
        <div className="row portfolio-container">
  
          <div className="col-lg-4 col-md-6 portfolio-item filter-tfc">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/tfc.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>GTAV Roleplay Server</h4>
                <p>TFC</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/tfc.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="GTAV Roleplay Server"><i className="bx bx-plus"></i></a>
                  <a href="tfc-eng.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/github.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Github</h4>
                <p>Repositories</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/github.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Github"><i className="bx bx-plus"></i></a>
                  <a href="github-eng.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col-lg-4 col-md-6 portfolio-item filter-sql">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/m-mysql.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Database Connection App</h4>
                <p>JAVA, SQL</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/m-mysql.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Database Connection App"><i className="bx bx-plus"></i></a>
                  <a href="appConexBBDD-eng.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Detalles"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="col-lg-4 col-md-6 portfolio-item filter-games">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/jilaj.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Project Rampage</h4>
                <p>C#, Unity</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/jilaj.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Project Rampage"><i className="bx bx-plus"></i></a>
                  <a href="project-R-eng.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Detalles"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 portfolio-item filter-games">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/smokefield.png" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Smokefield</h4>
                <p>C#, Unity</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/smokefield.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Smokefield"><i className="bx bx-plus"></i></a>
                  <a href="smokefield-eng.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Detalles"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
  
        </div>
  
      </div>
    </section>
    {/* <!-- End Portfolio Section --> */}
  
    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
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
    </section>
  
  
    <div className="credits">
      Designed by <a href="https://luisriojacaceres.com/">Luis Rioja</a>
    </div>
  
  
  </div>
  


);

export default App;
