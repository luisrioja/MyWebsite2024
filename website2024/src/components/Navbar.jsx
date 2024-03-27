import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="container">
      <div className="ml-6"> {/* Agregar un margen izquierdo */}
        <h1 className="text-sm font-bold">
          <Link to="header" smooth={true} duration={500}>Luis Rioja</Link>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link cursor-pointer" activeClass="active" to="header" spy={true} smooth={true} offset={-70} duration={500}> Home </Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}> About me </Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" activeClass="active" to="resume" spy={true} smooth={true} offset={-70} duration={500}> Resume </Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500}> Services </Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}> Portfolio </Link>
            </li>
            <li>
              <Link className="nav-link cursor-pointer" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}> Contact </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>


         {/* Social links */}
        <div className="social-links">
          <a href="https://twitter.com/LuisRioja11" className="twitter fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://es.linkedin.com/in/luis-rioja-c%C3%A1ceres-aa72941b3" className="linkedin fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.instagram.com/luisrioja11/" className="instagram fa fa-instagram" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://github.com/luisrioja" className="github fa fa-github" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div> {/* Fin del contenedor con margen izquierdo */}


    </div>
  );
}

export default Navbar;
