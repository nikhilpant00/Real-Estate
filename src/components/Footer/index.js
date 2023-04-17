import React from "react";
import './index.scss';
import { ParallaxLayer } from "@react-spring/parallax";

import image5 from '../../assets/images/footer-removebg-preview.png'
import {
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
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
            <img src={image5} style={{ width: "100vw", marginTop: "-350px" }} />
            <div
              style={{
                color: "white",
                width: "50%",
                margin: "0 auto",
                marginTop: "-55px",
                textAlign: "center",
              }}
            >
              <div className="icons-div">
                <span className="icon">
                  <AiFillInstagram
                    size={22}
                    color="black"
                    style={{ marginLeft: "3px", marginTop: "1px" }}
                  />
                </span>
                <span className="icon">
                  <FaFacebookF
                    size={22}
                    color="black"
                    style={{ marginLeft: "3px", marginTop: "1px" }}
                  />
                </span>
                <span className="icon">
                  <FaLinkedinIn
                    size={22}
                    color="black"
                    style={{ marginLeft: "3px", marginTop: "1px" }}
                  />
                </span>
                <span className="icon">
                  <AiOutlineTwitter
                    size={22}
                    color="black"
                    style={{ marginLeft: "3px", marginTop: "1px" }}
                  />
                </span>
              </div>
              <div className="info">
                <p>OCOL@tech.com</p>
                <p>+919753245671</p>
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
                <p>© 2023 - OCPL TECH All Right Reserved</p>
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
