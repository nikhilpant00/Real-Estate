import React, { useState } from "react";
import "./index.scss";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import Navbar from "../../components/Navbar";
import { Parallax } from "@react-spring/parallax";

function Subscription() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ballPosition, setBallPosition] = useState("left");
  const handleClick = (e) => {
    e.preventDefault();
    setBallPosition(ballPosition === "right" ? "left" : "right");
    setIsFlipped(!isFlipped);
  };
  const [isLoggedIn, SetIsLoggedIn] = useState(true);
  return (
    <Parallax>
      {isLoggedIn ? (
        <Navbar
          leftLinks={[
            { title: "Home", direct: "/" },
            { title: "Subscription", direct: "/subscription" },
            { title: "Details", direct: "/loggedIn" },
          ]}
          rightLinks={[{ title: "Log Out", direct: "/" }]}
        />
      ) : (
        <Navbar
          leftLinks={[
            { title: "Home", direct: "/" },
            { title: "Subscription", direct: "/subscription" },
          ]}
          rightLinks={[
            { title: "Sign Up", direct: "/SignUp" },
            { title: "Login", direct: "/login" },
          ]}
        />
      )}
      <section className=" p-sm-5 p-3  price-container">
        <div className="price-margin">
          <div className="text-center px-md-5 px-2 mx-md-5 mx-2">
            <h2 className="mb-4 font-weight-bold">Our Pricing Plan</h2>
            <p className="mb-5">
              We are industry leading company that values lorem12 Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <p className="me-2">Monthly</p>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onClick={handleClick}
            />
            <label htmlFor="checkbox" className="checkbox-label">
              <span className={`ball ${ballPosition}`}></span>
            </label>
            <p className="mx-2">
              Yearly<span className="yearly-off">15% off</span>
            </p>
          </div>
          <div className="d-flex flex-wrap justify-content-around">
            <div className={`card m-sm-4 m-2 ${isFlipped ? " flipped" : ""}`}>
              <div className="card-side card-front">
                <div className="d-flex justify-content-between">
                  <div className="me-sm-5 me-3">
                    <h2 className="plan-name">Basic</h2>
                    <p className="plan-type">Most Popular</p>
                  </div>
                  <div className="text-center price">
                    <h4 className="plan-price">₹10,000</h4>
                    <p className="plan-type">per month</p>
                  </div>
                </div>
                <hr></hr>
                <div className="card-content">
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p className="text-muted">
                    <AiFillCloseCircle /> lorem lorem lorem lorem
                  </p>
                  <p className="text-muted">
                    <AiFillCloseCircle /> lorem lorem lorem lorem
                  </p>
                  <p className="text-muted">
                    <AiFillCloseCircle /> lorem lorem lorem lorem
                  </p>
                  <div className="text-center">
                    <div className="sign-up">
                      <a href="#" className="btn bordered">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-side card-back">
                <div className="d-flex justify-content-between">
                  <div className="me-sm-5 me-3">
                    <h2 className="plan-name">Basic</h2>
                    <p className="plan-type">Most Popular</p>
                  </div>
                  <div className="text-center price">
                    <h4 className="plan-price">₹1,00,000</h4>
                    <p className="plan-type">per year</p>
                  </div>
                </div>
                <hr></hr>
                <div className="card-content">
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p className="text-muted">
                    <AiFillCloseCircle /> lorem lorem lorem lorem
                  </p>
                  <p className="text-muted">
                    <AiFillCloseCircle /> lorem lorem lorem lorem
                  </p>
                  <p className="text-muted">
                    <AiFillCloseCircle /> lorem lorem lorem lorem
                  </p>
                  <div className="text-center">
                    <div className="sign-up">
                      <a href="#" className="btn bordered">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`card professional  m-sm-4 m-2 ${
                isFlipped ? " flipped" : ""
              }`}
            >
              <div className="card-side card-front">
                <div className="d-flex justify-content-between">
                  <div className="me-sm-5 me-3">
                    <h2 className="plan-name">Exclusive</h2>
                    <p className="plan-type">Recommended</p>
                  </div>
                  <div className="text-center price">
                    <h4 className="plan-price">₹15,000</h4>
                    <p className="plan-type">per month</p>
                  </div>
                </div>
                <hr></hr>
                <div className="card-content">
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p className="text-muted">
                    <AiFillCloseCircle /> lorem lorem lorem lorem
                  </p>
                  <p className="text-muted">
                    <AiFillCloseCircle /> lorem lorem lorem lorem
                  </p>
                  <div className="text-center">
                    <div className="sign-up">
                      <a href="#" className="btn bordered">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-side card-back">
                <div className="d-flex justify-content-between">
                  <div className="me-sm-5 me-3">
                    <h2 className="plan-name">Exclusive</h2>
                    <p className="plan-type">Recommended</p>
                  </div>
                  <div className="text-center price">
                    <h4 className="plan-price">₹1,50,000</h4>
                    <p className="plan-type">per year</p>
                  </div>
                </div>
                <hr></hr>
                <div className="card-content">
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p className="text-muted">
                    <AiFillCloseCircle /> lorem lorem lorem lorem
                  </p>
                  <p className="text-muted">
                    <AiFillCloseCircle /> lorem lorem lorem lorem
                  </p>
                  <div className="text-center">
                    <div className="sign-up">
                      <a href="#" className="btn bordered">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`card  m-sm-4 m-2 ${isFlipped ? " flipped" : ""}`}>
              <div className="card-side card-front">
                <div className="d-flex justify-content-between">
                  <div className="me-sm-5 me-3">
                    <h2 className="plan-name">Ultimate</h2>
                    <p className="plan-type">Best Value</p>
                  </div>
                  <div className="text-center price">
                    <h4 className="plan-price">₹20,000</h4>
                    <p className="plan-type">per month</p>
                  </div>
                </div>
                <hr></hr>
                <div className="card-content">
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <div className="text-center">
                    <div className="sign-up">
                      <a href="#" className="btn bordered">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-side card-back">
                <div className="d-flex justify-content-between">
                  <div className="me-sm-5 me-3">
                    <h2 className="plan-name">Ultimate</h2>
                    <p className="plan-type">Best Value</p>
                  </div>
                  <div className="text-center price">
                    <h4 className="plan-price">₹2,00,000</h4>
                    <p className="plan-type">per year</p>
                  </div>
                </div>
                <hr></hr>
                <div className="card-content">
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <p>
                    <AiFillCheckCircle /> lorem lorem lorem lorem
                  </p>
                  <div className="text-center">
                    <div className="sign-up">
                      <a href="#" className="btn bordered">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
}

export default Subscription;
