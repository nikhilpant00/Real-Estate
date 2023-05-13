import React from "react";
import "./index.scss";
import { ParallaxLayer } from "@react-spring/parallax";

import image5 from "../../assets/images/footer-removebg-preview.png";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="background-layer">
        <ParallaxLayer offset={2} speed={0.7}>
          <div
            style={{ height: "100%" }}
            id="footer-background"
            className="background"
          >
            <img src={image5} className="footer-image" alt="background"/>
            <div className="footer-content">
              <div className="icons-div d-flex align-items-center justify-content-center">
                <span className="icon d-flex align-items-center justify-content-center">
                  <AiFillInstagram size={22} color="black" />
                </span>

                <span className="icon d-flex align-items-center justify-content-center">
                  <FaFacebookF
                    size={22}
                    color="black"
                  />
                </span>

                <span className="icon d-flex align-items-center justify-content-center">
                  <FaLinkedinIn
                    size={22}
                    color="black"
                    style={{ marginLeft: "2px" }}
                  />
                </span>

                <span className="icon d-flex align-items-center justify-content-center">
                  <AiOutlineTwitter
                    size={22}
                    color="black"
                    style={{ marginLeft: "2px" }}
                  />
                </span>
              </div>
              <div className="info">
                <p>nikhilpant00@gmail.com</p>
                <p>+919582146057</p>
                <p>ONLINE FORMS</p>
              </div>
              <div className="terms-privacy">
                <span
                  style={{
                    borderRight: "1px solid white",
                    paddingRight: "5px",
                  }}
                >
                  TERMS & CONDITIONS
                </span>
                <span>PRIVACY POLICY </span>
              </div>
              <div className="ocpl-tech">
                <p>© 2023 - All Right Reserved</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </div>
      {/* <div className="background-layer1">
        <ParallaxLayer offset={2} speed={0.7}>
          <div
            style={{ height: "100%" }}
            id="footer-background"
            className="background"
          ></div>
        </ParallaxLayer>
      </div> */}
    </div>
  );
}

export default Footer;
