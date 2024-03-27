import { Navbar, About, Contact, Portfolio, Resume, ServicesOffer } from "./components";

const App = () => (
  
  <div>
    <header id="header">
    <Navbar />
    </header> 
  
    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
  
    <About />
  
    </section>
    {/* <!-- End About Section --> */}
  
    {/* <!-- ======= Resume Section ======= --> */}
    <section id="resume" className="resume">
      < Resume />
    </section>
    {/* <!-- End Resume Section --> */}
  
    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">
      <ServicesOffer/>
    </section>
    {/* <!-- End Services Section --> */}
  
    {/* <!-- ======= Portfolio Section ======= --> */}
    <section id="portfolio" className="portfolio">
      <Portfolio/>
    </section>
    {/* <!-- End Portfolio Section --> */}
  
    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <Contact/>
    </section>
  
  
    <div className="credits">
      Designed by <a href="https://luisriojacaceres.com/">Luis Rioja</a>
    </div>
  
  
  </div>
  


);

export default App;
