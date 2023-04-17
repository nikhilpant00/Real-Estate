import React, { useState, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";


import Card from "../Card";
import cardsData from "../Card/cardData";



function Carousel() {
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState([]);
   
  const HandleCarouselClick= (action)=>{
    if(action=='dec')
    setIndex(index-1);
    else if(action=='inc')
    setIndex(index+1);
  }

  useEffect(()=>{
    // console.log(index)
      const newCards = cardsData.map((item, ind) => {
        if (ind == index) return <Card showStatus={"active"} props={item}  />;
        else return <Card props={item} />;
      });
      setCards(newCards);
  }, [index]);

  return (
    <>
      <div
        className="d-flex mb-2 justify-content-end"
        style={{ margin: "0 8%" }}
      >
        <div
          style={{
            marginRight: "1.5rem",
            cursor: "pointer",
            pointerEvents: "inherit",
          }}
          onClick={()=>index>0 ? HandleCarouselClick('dec'):null}
        >
          <BsArrowLeftShort color="white" size={30} />
        </div>
        <div
          style={{ marginRight: "5%", cursor: "pointer" }}
          onClick={() =>index<2 ? HandleCarouselClick('inc'):null}
        >
          <BsArrowRightShort color="white" size={30} />
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-end"
        style={{ margin: "0 8%", height: "25rem" }}
      >
        {cards}
      </div>
    </>
  );
}

export default Carousel;
