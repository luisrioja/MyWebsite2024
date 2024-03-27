import React from 'react'

const Portfolio = () => {
  return (
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
  )
}

export default Portfolio