import React from "react";
import "./index.scss";
import Navbar from "../../components/Navbar";
import { Parallax } from "@react-spring/parallax";
import { BsSearchHeart } from "react-icons/bs";
const LoggedIn = () => {
  return (
    <Parallax>
      <Navbar />
      <div className="login-hero">
        <section className="hero-container">
          <div className="hero-content">
            <div className="hero-content--lines">
              <h2 className="hero-heading">
                Easiest way to find a <br></br>
                <span
                  style={{
                    color: "var(--first-color)",
                    fontWeight: 900,
                    marginTop: 100,
                  }}
                >
                  Perfect Property
                </span>
              </h2>
              <p>
                this is where you can find a Perfect property in a simple way.
                <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor
              </p>
            </div>
            <div>
              <div className="search-container">
                <div className="search-bar content">
                  <input
                    type="text"
                    name="search"
                    placeholder="search for a property..."
                    className="search-input"
                  />
                  <button type="submit" className="btn btn-search">
                    Search <BsSearchHeart />
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex align-item-center mt-5">
              <div className="p-3 me-3">
                <h2 className="hero-numbers">500+</h2>
                <p>Customers</p>
              </div>
              <div className="p-3 me-3">
                <h2 className="hero-numbers">50+</h2>
                <p>Awards</p>
              </div>
              <div className="p-3 me-3">
                <h2 className="hero-numbers">1000+</h2>
                <p>Properties</p>
              </div>
            </div>
          </div>
        </section>
        <section className="details-section p-sm-5 p-4 m-sm-5 m-3">
          <h2 className="mb-4">
            Property Id:{" "}
            <span
              style={{
                color: "var(--first-color)",
                fontWeight: 900,
                fontSize: "20px",
              }}
            >
              {" "}
              214587
            </span>
          </h2>
          <div className="d-flex flex-lg-row flex-column align-item-center justify-content-between">
            <div className="image-container">
              <img
                src="https://images.pexels.com/photos/783745/pexels-photo-783745.jpeg?auto=compress&cs=tinysrgb&w=180&h=210&dpr=2"
                className="property-image"
              ></img>
            </div>
            <div className="basic-details">
              <ul className="details-list">
                <li>
                  <div>
                    <h5>Address</h5>
                  </div>
                  <div>
                    <p>Karol Bagh</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Approved By:</h5>
                  </div>
                  <div>
                    <p>DDA</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Area</h5>
                  </div>
                  <div>
                    <p>800sqft</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Facing</h5>
                  </div>
                  <div>
                    <p>North</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Type</h5>
                  </div>
                  <div>
                    <p>Residential</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h5>Dimensions</h5>
                  </div>
                  <div>
                    <p>30*40</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Parallax>
  );
};

export default LoggedIn;