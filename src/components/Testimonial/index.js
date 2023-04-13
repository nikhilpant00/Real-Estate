import React from 'react';
import "./index.scss";
import { ParallaxLayer } from '@react-spring/parallax';
import Carousel2 from '../Carousel2';

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="">
        <ParallaxLayer offset={1.4} speed={0.7}>
          <div
            style={{ height: "100%" }}
            id="testimonial-background"
            className="background"
          ></div>
        </ParallaxLayer>
      </div>
      <div className="abc">
        <ParallaxLayer offset={1.299} speed={0.7}>
          <div className="gradient-div"></div>
        </ParallaxLayer>
      </div>
      {/* Text Area Starts */}
      <div className="text-area-layer">
        <ParallaxLayer offset={1.5} speed={0.6}>
          <div className="content-block">
            <div className="textblock">
              <p className="textblock-title">Testimonials</p>
              <h1>Customer stories</h1>
            </div>
          </div>
        </ParallaxLayer>
        {/* Text Area Ends */}

      </div>
        {/* Carousel Starts */}
        <div className="carousel-layer">
          <ParallaxLayer offset={1.65} speed={0.7}>
            <div className="carousel-block">
              <Carousel2 />
            </div>
          </ParallaxLayer>
        </div>
        {/* Carousel Ends */}
    </div>
  );
}

export default Testimonial