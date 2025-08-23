// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-info">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">E.N.R's Portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
          aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarID">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;