import React from 'react';
import './index.scss';
import { ParallaxLayer } from '@react-spring/parallax';

import Carousel from '../Carousel';

function Features() {
  return (
    <div className='features' id='feature'>
      {/* Backgorund For Features Section */}
      <div className="background">
        <ParallaxLayer offset={0.999} speed={0.7}>
          <div style={{ backgroundColor: "black", height: "100%"}}></div>
        </ParallaxLayer>
      </div>

      {/* Text Area Starts */}
      <div className="text-area-layer">
        <ParallaxLayer offset={1} speed={.8}>
            <div className="textblock">
              <div className="textblock-container">
                <p className="textblock-title">Features</p>
                <div className="d-flex justify-content-between textblock-content">
                  <h1>We make Things Secure</h1>
                  <p>
                    Welcome to the world of blockchain, a revolutionary
                    technology that is changing the way we conduct transactions
                    and store data. So, join us in this exciting world of
                    blockchain and discover the endless possibilities it holds.
                  </p>
                </div>
              </div>
          </div>
        </ParallaxLayer>
      </div>
      {/* Text Area Ends */}

      {/* Carousel Starts */}
      <div className="carousel-layer">
        <ParallaxLayer offset={1} speed={.7}>
          <div className="">
            <Carousel />
          </div>
        </ParallaxLayer>
      </div>
      {/* Carousel Ends */}
    </div>
  );
}

export default Features