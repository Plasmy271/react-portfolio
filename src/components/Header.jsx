import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-info">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">E.N.R's Portfolio</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarID"
          aria-controls="navbarID" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarID">
          {/* You can add navbar items here if needed */}
        </div>
      </div>
    </nav>
  );
}

export default Header;