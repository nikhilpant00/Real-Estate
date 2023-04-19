import React from "react";
import "./index.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";

function Navbar({leftLinks, rightLinks, setIsLogin}) {

 console.log(leftLinks)
  return (
    <div className="Navbar">
      <ParallaxLayer offset={0} speed={0}>
        <div
          className="navbar-content"
          style={{ backgroundColor: "#00000045" }}
        >
          <nav className="navbar navbar-expand-lg navbar-light" id="neubar">
            <div className="container">
              <Link to="/" className="navbar-brand md:fs-3 fs-4">
                OCPL REAL ESTATE
              </Link>
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
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-5">
                  {leftLinks &&
                    leftLinks.map((link ,index) => (
                      <li className="nav-item" key={index}>
                        <Link
                          to={`${link.direct}`}
                          className="nav-link mx-2 active md:fs-4 fs-5"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                <ul className="navbar-nav ms-auto ">
                  {rightLinks &&
                    rightLinks.map((link, index) => {
                      if(rightLinks.length===1){
                        return(<li className="nav-item" key={index}>
                          <Link to={`${link.direct}`}>
                            <button
                              type="button"
                              className="btn btn-outline-info  mx-2 md:fs-4 fs-5"
                              onClick={() => setIsLogin(false)}
                            >
                              {link.title}
                            </button>
                          </Link>
                        </li>)
                      }
                      return (
                      <li className="nav-item" key={index}>
                        <Link to={`${link.direct}`}>
                          <button
                            type="button"
                            className="btn btn-outline-info  mx-2 md:fs-4 fs-5"
                          >
                            {link.title}
                          </button>
                        </Link>
                      </li>
                    )})}
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

