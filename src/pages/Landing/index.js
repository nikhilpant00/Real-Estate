import React from 'react';
import './index.scss';
import { Parallax } from "@react-spring/parallax";


import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Features from '../../components/Features';


function Landing() {
  return (
    <div>
      <Parallax
        pages={3}
        style={{ top: "0", left: "0", backgroundColor: "#e7f3ff" }}
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

      </Parallax>
    </div>
  );
}

export default Landing