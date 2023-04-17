import React, { useEffect, useState } from "react";
import "./index.scss";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import Card2 from "./Card2";
import cardData from "./Card2/card2Data";

function Carousel2() {
    const [index, setIndex] = useState(0);
    const [card, setCard] = useState(null);

    useEffect(()=>{
        const newCard = (
          <Card2 {...cardData[index]} />
        );
        setCard(newCard);
    },[index])

 useEffect(() => {
   const intervalId = setInterval(() => {
     setIndex((prevIndex) =>
       prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
     );
   }, 2500);

  //  console.log(index);  Move this inside the interval callback to see the updated index value.

   return () => {
     clearInterval(intervalId);
   };
 }, [cardData]);


    const HandleCarouselClick= (action)=>{
        if(action=='dec') setIndex(prevInd=>prevInd-1);
        else if(action=='inc') setIndex(prevInd=>prevInd+1);
    }

  return (
    <div className="carousel2">
      <div className="carousel-div">
        <div
          className="d-flex  justify-content-end"
          style={{ marginTop:'2rem' }}
        >
          <div
            style={{
              marginRight: "1.5rem",
              cursor: "pointer",
              pointerEvents: "inherit",
            }}
            onClick={() => (index > 0 ? HandleCarouselClick("dec") : null)}
          >
            <BsArrowLeftShort color="white" size={30} />
          </div>
          <div
            style={{ marginRight: "5%", cursor: "pointer" }}
            onClick={() => (index < cardData.length-1 ? HandleCarouselClick("inc") : null)}
          >
            <BsArrowRightShort color="white" size={30} />
          </div>
        </div>

        {card}
      </div>
    </div>
  );
}

export default Carousel2;
