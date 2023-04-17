import React from 'react';
import './index.scss';
import { Parallax } from "@react-spring/parallax";


import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Testimonial from '../../components/Testimonial';
import Working from '../../components/Working';
import Footer from '../../components/Footer';


function Landing() {
  return (
    <div className='landing' id='landing'>
      <Parallax
        pages={3}
        style={{ top: "0", left: "0", backgroundColor: "white" }}
        className="animation"
        config={{ pointerEvents: true }}
      >
        {/* Navbar Starts */}
        <Navbar />
        {/* Navbar Ends */}

        {/* Hero Section Starts */}
        <Hero />
        {/* Hero Section Ends */}

        {/* Features Section Starts */}
        <Features />
        {/* Features Section Ends */}

        {/* Testimonial Section Starts */}
        <Testimonial />
        {/* Testimonial Section Ends */}

        {/* Working Section Starts */}
        <Working />
        {/* Working Section Ends */}
        
        {/* Footer Section Starts */}
        <Footer />
        {/* Footer Section Ends */}

      </Parallax>
    </div>
  );
}

export default Landing