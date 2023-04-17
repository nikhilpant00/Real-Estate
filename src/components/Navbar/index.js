// import React from "react";
// import "./index.scss";
// import { ParallaxLayer } from "@react-spring/parallax";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className="Navbar">
//       <ParallaxLayer offset={0} speed={0}>
//         <div
//           className="navbar-content"
//           style={{ backgroundColor: "#00000045" }}
//         >
//           <nav className="navbar navbar-expand-lg navbar-light" id="neubar">
//             <div className="container">
//               <Link to="/" className="navbar-brand md:fs-3 fs-4">
//                 OCPL REAL ESTATE
//               </Link>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNavDropdown"
//                 aria-controls="navbarNavDropdown"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className=" collapse navbar-collapse" id="navbarNavDropdown">
//                 <ul className="navbar-nav ms-auto ">
//                   <li className="nav-item">
//                     <Link to="/" className="nav-link mx-2 active md:fs-4 fs-5">
//                       Home
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link mx-2 md:fs-4 fs-5"
//                       href="#feature"
//                     >
//                       Features
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       to="/subscription"
//                       className="nav-link mx-2 md:fs-4 fs-5"
//                     >
//                       Pricing
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link to="/signUp">
//                       <button
//                         type="button"
//                         className="btn btn-outline-info  mx-2 md:fs-4 fs-5"
//                       >
//                         Sign Up
//                       </button>
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link to="/login">
//                       <button
//                         type="button"
//                         className="btn btn-outline-info  mx-2 md:fs-4 fs-5"
//                       >
//                         Login
//                       </button>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </ParallaxLayer>
//     </div>
//   );
// }
// export default Navbar;

import React from "react";
import "./index.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const scrollToFeature = () => {
    scroll.scrollTo("#feature", {
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  const handleClick = () => {
    console.log('first')
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

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
                <ul className="navbar-nav mx-5" >
                  <li className="nav-item">
                    <Link to="/" className="nav-link mx-2 active md:fs-4 fs-5">
                      Home
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <p
                      className="nav-link mx-2 md:fs-4 fs-5"
                      onClick={handleClick}
                      
                    >
                      Features
                    </p>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      to="/subscription"
                      className="nav-link mx-2 md:fs-4 fs-5"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto ">
                  <li className="nav-item">
                    <Link to="/signUp">
                      <button
                        type="button"
                        className="btn btn-outline-info  mx-2 md:fs-4 fs-5"
                      >
                        Sign Up
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login">
                      <button
                        type="button"
                        className="btn btn-outline-info  mx-2 md:fs-4 fs-5"
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

