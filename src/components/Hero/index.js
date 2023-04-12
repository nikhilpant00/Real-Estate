import React from "react";
import "./index.scss";
import { ParallaxLayer } from "@react-spring/parallax";

import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <>
      <div className="layer-1a">
        <ParallaxLayer offset={0} horizontal speed={3}>
          <div className="animation_layer parallax " id="skyL"></div>
        </ParallaxLayer>
      </div>
      <div className="layer-1b">
        <ParallaxLayer offset={0} horizontal speed={3}>
          <div className="animation_layer parallax " id="skyL"></div>
        </ParallaxLayer>
      </div>
      <div className="layer-2a">
        <ParallaxLayer offset={0} horizontal speed={-3}>
          <div className="animation_layer parallax " id="skyR"></div>
        </ParallaxLayer>
      </div>
      <div className="layer-2b">
        <ParallaxLayer offset={0} horizontal speed={-3}>
          <div className="animation_layer parallax " id="skyR"></div>
        </ParallaxLayer>
      </div>
      <div className="hero-text-container">
        <ParallaxLayer offset={0} speed={1.3}>
          <div className="hero-text">
            <h1>Explore The World</h1>
            <div className="description">
              <p style={{width:'60%', textAlign:'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <p>Start the adventure <BsArrowRight /></p>
            </div>
          </div>
        </ParallaxLayer>
      </div>
      <div className="layer-3">
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="forest"></div>
        </ParallaxLayer>
      </div>
      <div className="layer-4">
        <ParallaxLayer offset={0} speed={0.9}>
          <div className="animation_layer parallax" id="house"></div>
        </ParallaxLayer>
      </div>
      <div className="layer-5a">
        <ParallaxLayer offset={0} speed={1.1}>
          <div className="animation_layer parallax" id="sea"></div>
        </ParallaxLayer>
      </div>
      <div className="layer-5b">
        <ParallaxLayer offset={0} speed={1.1}>
          <div className="animation_layer parallax" id="sea"></div>
        </ParallaxLayer>
      </div>
    </>
  );
}

export default Hero;
