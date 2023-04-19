// import React, { useState, useEffect } from "react";
// import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";


// import Card from "../Card";
// import cardsData from "../Card/cardData";
// import image2 from "../../assets/images/background.png";




// function Carousel() {
//   const [smallScreen, setSmallScreen] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 1100px)");
//     setSmallScreen(mediaQuery.matches);

//     const listener = () => {
//       setSmallScreen(mediaQuery.matches);
//     };

//     mediaQuery.addEventListener("change", listener);

//     return () => {
//       mediaQuery.removeEventListener("change", listener);
//     };
//   }, []);

//   const [index, setIndex] = useState(0);
//   const [cards, setCards] = useState([]);
   
//   const HandleCarouselClick= (action)=>{
//     if(action=='dec')
//     setIndex(index-1);
//     else if(action=='inc')
//     setIndex(index+1);
//   }

//   useEffect(()=>{
//     // console.log(index)
//       const newCards = cardsData.map((item, ind) => {
//         if (ind == index) return <Card showStatus={"active"} props={item}  />;
//         else return <Card props={item} />;
//       });
//       setCards(newCards);
//   }, [index]);

//   return (
//     <>
//       <div
//         className="d-flex mb-2 justify-content-end"
//         style={{ margin: "0 8%" }}
//       >
//         <div
//           style={{
//             marginRight: "1.5rem",
//             cursor: "pointer",
//             pointerEvents: "inherit",
//           }}
//           onClick={() => (index > 0 ? HandleCarouselClick("dec") : null)}
//         >
//           <BsArrowLeftShort color="white" size={30} />
//         </div>
//         <div
//           style={{ marginRight: "5%", cursor: "pointer" }}
//           onClick={() => (index < 2 ? HandleCarouselClick("inc") : null)}
//         >
//           <BsArrowRightShort color="white" size={30} />
//         </div>
//       </div>
//       <div
//         className="d-flex justify-content-center align-items-end"
//         style={{ margin: "0 8%", height: "25rem" }}
//       >
//         {smallScreen ? (
//           <Card
//             props={{
//               number: "02",
//               heading: "Unique experience",
//               description:
//                 "Explore our real estate website for a unique experience that will guide you    through an array of exceptional properties and help you find your dream home with ease.",
//               img: image2,
//             }} showStatus={"active"} smallSize={"smallSize"}
//           />
//         ) : (
//           cards
//         )}
//       </div>
//     </>
//   );
// }

// export default Carousel;


import React, { useState, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import './index.scss';

import Card from "../Card";
import cardsData from "../Card/cardData";
import image2 from "../../assets/images/background.png";

function Carousel() {
  const [smallScreen, setSmallScreen] = useState(false);
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1100px)");
    setSmallScreen(mediaQuery.matches);

    const listener = () => {
      setSmallScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  useEffect(() => {
    if (smallScreen) {
      if (autoPlay) {
        const intervalId = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
        }, 2000);
        return () => clearInterval(intervalId);
      }
    } else {
      setIndex(0);
    }
  }, [smallScreen, autoPlay]);

  useEffect(() => {
    const newCards = cardsData.map((item, ind) => {
      if (ind === index) {
        return <Card showStatus={"active"} props={item} key={ind}/>;
      } else {
        return <Card props={item} key={ind}/>;
      }
    });
    setCards(newCards);
  }, [index]);

  const handleCarouselClick = (action) => {
    if (action === "dec") {
      setIndex(index - 1 < 0 ? cardsData.length - 1 : index - 1);
    } else if (action === "inc") {
      setIndex((index + 1) % cardsData.length);
    }
  };

  const handleCardHover = () => {
    setAutoPlay(false);
  };

  const handleCardLeave = () => {
    setAutoPlay(true);
  };

  return (
    <div className="carousel">
      <div
        className="d-flex mb-2 justify-content-end arrow-btn"
        style={{ margin: "0 8%" }}
      >
        <div
          style={{
            marginRight: "1.5rem",
            cursor: "pointer",
            pointerEvents: "inherit",
          }}
          onClick={() => handleCarouselClick("dec")}
        >
          <BsArrowLeftShort color="white" size={30} />
        </div>
        <div
          style={{ marginRight: "5%", cursor: "pointer" }}
          onClick={() => handleCarouselClick("inc")}
        >
          <BsArrowRightShort color="white" size={30} />
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-end"
        style={{ margin: "0 8%", height: "25rem" }}
      >
        {smallScreen ? (
          <div
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
            style={{ width: "max-content" }}
          >
            <Card
              props={cardsData[index]}
              showStatus={"active"}
              smallSize={"smallSize"}
              smallScreenClassName={"smallScreen"}
            />
          </div>
        ) : (
          cards
        )}
      </div>
    </div>
  );
}

export default Carousel;
