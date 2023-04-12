import React from "react";
import "./index.scss";
import { ParallaxLayer } from "@react-spring/parallax";

function Navbar() {
  return (
    <div className="Navbar">
      <ParallaxLayer offset={0} speed={0}>
        <div className="" style={{ backgroundColor: "#00000045" }}>
          <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
            <div class="container">
              <a class="navbar-brand" href="#">
                OCPL REAL ESTATE
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ">
                  <li class="nav-item">
                    <a class="nav-link mx-2 active" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mx-2" href="#">
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mx-2" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mx-2" href="#">
                      Subscribe
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mx-2" href="#">
                      Login
                    </a>
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
