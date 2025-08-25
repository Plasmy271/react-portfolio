import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element)
      {
        const offsetTop = element.offsetTop - 70;
        window.scrollTo
        (
          {
            top: offsetTop,
            behavior: 'smooth'
          }
        );
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-info fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">E.N.R's Portfolio</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('about')}
              >
                About Me
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;