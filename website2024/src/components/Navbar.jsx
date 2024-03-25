import {useState} from 'react'

//import {bg, favicon, me } from '../assets';
import {navLinks} from '../constants';

const Navbar = () => {
  return (
    <div className="container">
  
    <h1><a href="">Luis Rioja</a></h1>

    <nav id="navbar" className="navbar">
      <ul>
        <li><a className="nav-link active" href="#header">Home</a></li>
        <li><a className="nav-link" href="#about">About me</a></li>
        <li><a className="nav-link" href="#resume">Resume</a></li>
        <li><a className="nav-link" href="#services">Services</a></li>
        <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
        <li><a className="nav-link" href="#contact">Contact</a></li>

        <li><a className="nav-link" href="index.html">ESP</a></li>
        <li><a className="nav-link active" href="index-eng.html">ENG</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
    {/* <!-- .navbar --> */}

    <div className="social-links">
      <a href="https://twitter.com/LuisRioja11" className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
      <a href="https://es.linkedin.com/in/luis-rioja-c%C3%A1ceres-aa72941b3" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
      <a href="https://www.instagram.com/luisrioja11/" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
      <a href="https://github.com/Luiser-ttv" className="github" target="_blank"><i className="bi bi-github"></i></a>
    </div>

  </div>
  )
}

export default Navbar