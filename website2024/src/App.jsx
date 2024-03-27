import { useState } from 'react';
import { Element } from "react-scroll";
import { Navbar, About, Contact, Portfolio, Resume, ServicesOffer } from "./components";

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div>
      <header id="header">
        <Element name="header" className="element">
          <Navbar setActiveSection={setActiveSection} />
        </Element>
      </header>

      <Element name="about" className="element">
        {activeSection === 'about' && <About />}
      </Element>

      <Element name="resume" className="element">
        {activeSection === 'resume' && <Resume />}
      </Element>

      <Element name="services" className="element">
        {activeSection === 'services' && <ServicesOffer />}
      </Element>

      <Element name="portfolio" className="element">
        {activeSection === 'portfolio' && <Portfolio />}
      </Element>

      <Element name="contact" className="element">
        {activeSection === 'contact' && <Contact />}
      </Element>

      <div className="credits">
        Designed by <a href="https://luisriojacaceres.com/">Luis Rioja</a>
      </div>
    </div>
  );
}

export default App;
