import React, { useState } from "react";
import "./index.scss";
import Navbar from "../../components/Navbar";
import { Parallax } from "@react-spring/parallax";
import { BsSearchHeart } from "react-icons/bs";
import ClientID from "../../assets/constant/client";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LoggedIn = ({ isLogin, setIsLogin }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isPremium, setIsPremium] = useState(false);

  const handleSubscription = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blockchain1");
      if (response.ok) {
        const subscriptionData = await response.json();
        const clientSubscription = subscriptionData.find(
          (item) => item.data.clientId === ClientID[0].client
        );
        console.log(clientSubscription);
        if (
          clientSubscription &&
          clientSubscription.data.isSubscribed === "true"
        ) {
          setIsPremium(true);
        } else {
          setIsPremium(false);
        }
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blockchain1");

      if (response.ok) {
        const jsonData = await response.json();
        const result = jsonData.find(
          (item) => item.data.property === searchQuery
        );

        if (result) {
          setSearchResult(result);
          console.log("Search result:", result);
        } else {
          setSearchResult("not_found");
          console.log("No matching property found");
        }
      } else {
        console.error("Error fetching data:", response.statusText);
      }

      let timerInterval;
      Swal.fire({
        title: "The Details of the Property is Below",
        html: "Please Scroll Down <br> Time left: <b></b> ",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer ");
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Parallax>
      {/* <Navbar
        leftLinks={[
          { title: "Home", direct: "/" },
          { title: "Subscription", direct: "/subscription" },
          { title: "Details", direct: "/loggedIn" },
        ]}
        rightLinks={[{ title: "Log Out", direct: "/" }]}
      /> */}
      {isLogin ? (
        <Navbar
          leftLinks={[
            { title: "Home", direct: "/" },
            { title: "Subscription", direct: "/subscription" },
            { title: "Dashboard", direct: "/loggedIn" },
          ]}
          rightLinks={[{ title: "Log Out", direct: "/" }]}
          setIsLogin={setIsLogin}
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
              {/* <p className="text-white">
                this is where you can find a Perfect property in a simple way.
                <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor
              </p> */}
            </div>
            <div>
              <div className="search-container">
                <div className="search-bar content">
                  <input
                    type="text"
                    name="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="search for a property..."
                    className="search-input"
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="btn btn-search"
                    onClick={async () => {
                      await handleSubscription();
                      handleSearch();
                    }}
                  >
                    Search <BsSearchHeart />
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex align-item-center flex-wrap mt-5">
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
        {searchResult === "not_found" ? (
          <section className="details-section p-sm-5 p-4 m-sm-5 m-3">
            <h2 className="mb-4">No property found.</h2>
          </section>
        ) : searchResult !== null ? (
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
                {searchResult.data.property}
              </span>
            </h2>
            <div className="d-flex flex-lg-row flex-column align-item-center justify-content-between">
              <div className="image-container">
                <img
                  src="https://images.pexels.com/photos/783745/pexels-photo-783745.jpeg?auto=compress&cs=tinysrgb&w=180&h=210&dpr=2"
                  className="property-image"
                  alt="property-pic"
                ></img>
              </div>
              <div className="basic-details">
                <ul className="details-list">
                  <li>
                    <div>
                      <h5>Address</h5>
                    </div>
                    <div>
                      <p>{searchResult.data.address}</p>
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
                      <p>{searchResult.data.area}</p>
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
                      <p>{searchResult.data.type}</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>Dimensions</h5>
                    </div>
                    <div>
                      <p>{searchResult.data.dimension}</p>
                    </div>
                  </li>
                  {isPremium ? (
                    <li>
                      <div>
                        <h5>Current Owner</h5>
                      </div>
                      <div>
                        <p>{searchResult.data.currentowner}</p>
                      </div>
                    </li>
                  ) : (
                    <li style={{ filter: "blur(4px)" }}>
                      <div>
                        <h5>Current Owner</h5>
                      </div>
                      <div>
                        <p>{searchResult.data.currentowner}</p>
                      </div>
                    </li>
                  )}
                  {isPremium ? (
                    <li>
                      <div>
                        <h5>Transaction ID</h5>
                      </div>
                      <div>
                        <p>{searchResult.data.transaction}</p>
                      </div>
                    </li>
                  ) : (
                    <li style={{ filter: "blur(4px)" }}>
                      <div>
                        <h5>Transaction ID</h5>
                      </div>
                      <div>
                        <p>{searchResult.data.transaction}</p>
                      </div>
                    </li>
                  )}
                  {isPremium ? (
                    <li>
                      <div>
                        <h5>No of Open Sides</h5>
                      </div>
                      <div>
                        <p>2</p>
                      </div>
                    </li>
                  ) : (
                    <li style={{ filter: "blur(4px)" }}>
                      <div>
                        <h5>No of Open Sides</h5>
                      </div>
                      <div>
                        <p>2</p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {!isPremium ? (
              <div className="text-center">
                <h5>Want to see the full details?</h5>
                <Link to="/subscription" className="btn-subscribe">
                  Subscribe Now
                </Link>
              </div>
            ) : null}
          </section>
        ) : null}
      </div>
    </Parallax>
  );
};

export default LoggedIn;
