import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ setActiveSection }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="container">
      <div className="ml-6">
        <h1 className="text-sm font-bold">
          <Link to="header" smooth={true} duration={500}>Luis Rioja</Link>
        </h1>

        {/* Navbar para versiones de escritorio */}
        <nav id="navbar" className={`navbar ${showNavbar ? 'desktop-navbar' : 'mobile-navbar'}`}>
          <ul className={showNavbar ? 'show' : ''}>
            <li>
              <Link className="nav-link cursor-pointer" to="header" smooth={true} duration={500} onClick={() => { setActiveSection(null); setShowNavbar(false); }}>Home</Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" to="about" smooth={true} duration={500} onClick={() => { setActiveSection('about'); setShowNavbar(false); }}> About me </Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" to="resume" smooth={true} duration={500} onClick={() => { setActiveSection('resume'); setShowNavbar(false); }}> Resume </Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" to="services" smooth={true} duration={500} onClick={() => { setActiveSection('services'); setShowNavbar(false); }}> Services </Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" to="portfolio" smooth={true} duration={500} onClick={() => { setActiveSection('portfolio'); setShowNavbar(false); }}> Portfolio </Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" to="testimonials" smooth={true} duration={500} onClick={() => { setActiveSection('testimonials'); setShowNavbar(false); }}> Testimonials </Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" to="contact" smooth={true} duration={500} onClick={() => { setActiveSection('contact'); setShowNavbar(false); }}> Contact </Link>
            </li>
          </ul>
        </nav>

        {/* Botón de despliegue para versiones móviles */}
        <div className="mobile-nav-toggle" onClick={toggleNavbar}>
          {showNavbar ? <FaTimes /> : <FaBars />}
        </div>

        {/* Social links */}
        <div className="social-links">
          <a href="https://twitter.com/LuisRioja11" className="twitter fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://es.linkedin.com/in/luis-rioja-c%C3%A1ceres-aa72941b3" className="linkedin fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.instagram.com/luisrioja11/" className="instagram fa fa-instagram" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://github.com/luisrioja" className="github fa fa-github" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
