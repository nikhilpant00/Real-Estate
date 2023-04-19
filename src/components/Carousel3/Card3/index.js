import React from 'react';
import './index.scss';
import Lottie from "react-lottie";


function Card3({props}) {
      const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: props.lottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
       const smallScreen = window.matchMedia("(max-width: 400px)").matches;
  return (
    <div className="card3">
      <div className="card-container">
        <div className="" style={{ height: "2.5rem" }}></div>
        <Lottie
          options={defaultOptions1}
          height={smallScreen ? 100 : 300}
          width={smallScreen ? 100 : 300}
        />

        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card3