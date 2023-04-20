import React, { useEffect, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import "./index.scss";
import Carousel3 from "../Carousel3";

function Working() {
  const [stopCarousel, SetStopCarousel] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let intervalId;
    if (stopCarousel) {
      clearInterval(intervalId);
    } else {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => {
          return prevIndex === 2 ? 0 : prevIndex + 1;
        });
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [stopCarousel]);

  const [nums, setNums] = useState([]);
  useEffect(() => {
    let newNums = [];
    for (let i = 0; i <= 2; i++)
      newNums.push(
        <div
          className={i === index ? "num active" : "num"}
          onMouseEnter={() => {
            SetStopCarousel(true);
            setIndex(i);
          }}
          onMouseLeave={() => {
            SetStopCarousel(false);
          }}
        >
          <p>{i + 1}</p>
        </div>
      );
    setNums(newNums);
  }, [index]);

  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    setSmallScreen(mediaQuery.matches);

    const listener = () => {
      setSmallScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return (
    <div className="working">
      <div className="background-layer">
        <ParallaxLayer offset={2} speed={0.7}>
          <div
            style={{ height: "100%" }}
            id="working-background"
            className="background"
          ></div>
        </ParallaxLayer>
      </div>
      <div className="carousel-layer">
        <ParallaxLayer offset={2} speed={0.9}>
          <div className="carousel-div">
            {!smallScreen ? null : (
              <h2 className="small-size-h1">It works simply like </h2>
            )}
            <div className="toggle-nums">
              {smallScreen ? null : <h2>It works simply like </h2>}
              <div className="nums">{nums}</div>
            </div>
            <div className="card-component">
              <Carousel3 index={index} />
            </div>
          </div>
        </ParallaxLayer>
      </div>
    </div>
  );
}

export default Working;
