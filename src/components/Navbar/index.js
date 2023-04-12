import React from "react";
import "./index.scss";
import { ParallaxLayer } from "@react-spring/parallax";

function Navbar() {
  return (
    <div className="Navbar">
      <ParallaxLayer offset={0} speed={0}>
        <div
          className=""
          style={{ height: "3rem", backgroundColor: "#00000045" }}
        >
          <nav className="navbar navbar-expand-lg navbar-light px-4 py-0">
            <a className="navbar-brand text-light" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active text-light" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link text-light" href="#">
                  Features
                </a>
                <a className="nav-item nav-link text-light" href="#">
                  Pricing
                </a>
                <a className="nav-item nav-link text-light disabled" href="#">
                  Disabled
                </a>
              </div>
            </div>
          </nav>
        </div>
      </ParallaxLayer>
    </div>
  );
}

export default Navbar;
