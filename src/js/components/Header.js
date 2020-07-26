import React from "react";
import logo from "../../assets/Books.png";

import "../../css/Header.css";

const Header = (props) => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark">
      <a href="#" className="navbar-brand">
        <img
          src={logo}
          alt="One Library Logo"
          className="img-fluid"
          width={100}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="" className="nav-link active">
              Explorar
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Mi Colección
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
