import React from "react";
import "./Navbar.css";
import { navLinks } from "../constants/index";
import logo from "../../assets/img/logo.svg";

const Navbar = () => {
  return (
      <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light mt-4 Nav-items">
            <a className="navbar-brand text-white mx-5" href="#">
              GO-FUEL
              <img src={logo} alt="" height={20} width={20} />
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

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.id}>
                    <a className="nav-link text-white" href="#">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="btn btn-link Order-btn d-none d-lg-block position-relative"
            >
              Download
              <img className="" src={logo} height={20} width={20} alt="" />
            </button>
          </nav>
      </div>
  );
};

export default Navbar;
