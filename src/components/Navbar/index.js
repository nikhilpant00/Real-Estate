import React from "react";
import "./index.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="Navbar">
      <ParallaxLayer offset={0} speed={0}>
        <div
          className="navbar-content"
          style={{ backgroundColor: "#00000045" }}
        >
          <nav className="navbar navbar-expand-sm navbar-light" id="neubar">
            <div className="container">
              <a className="navbar-brand md:fs-3 fs-4" href="#">
                OCPL REAL ESTATE
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item">
                    <a className="nav-link mx-2 active md:fs-4 fs-5" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2 md:fs-4 fs-5" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mx-2 md:fs-4 fs-5" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="">
                      <button
                        type="button"
                        className="btn btn-outline-info md:fs-4 fs-5"
                      >
                        Subscribe
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login">
                      <button
                        type="button"
                        className="btn btn-outline-info md:fs-4 fs-5"
                      >
                        Login
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </ParallaxLayer>
    </div>
  );
}
export default Navbar;
