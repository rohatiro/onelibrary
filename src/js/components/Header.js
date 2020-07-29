import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Books.png";

import "../../css/Header.css";

const Header = (props) => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark shadow">
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          alt="One Library Logo"
          className="img-fluid"
          width={100}
        />
      </Link>
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
            <Link to="/" className="nav-link active">
              Explorar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mycollection" className="nav-link">
              Mi Colección
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
