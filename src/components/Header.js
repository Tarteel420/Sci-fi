import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const linkStyle={
        fontWeight:"bold",
        fontSize:"16px",

    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background:"#36454F"}} >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={linkStyle}>
          HOME
        </Link>
        <button     
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Here was  an  <a></a> tag of Home so we copied the className and pasted that  in link tag and removed the a tag */}
              <Link to="/astronomy" className="nav-link active" style={linkStyle}
    >
               ASTRONOMY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/astrology" className="nav-link active" style={linkStyle}>
                ASTROLOGY
              </Link>
            </li>   
            <li className="nav-item">
              <Link to="/ufology" className="nav-link active" style={linkStyle}>
                UFOLOGY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active" style={linkStyle}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;

