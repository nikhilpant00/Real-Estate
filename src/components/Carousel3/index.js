import React, { useEffect, useState } from 'react'
import Card3 from './Card3'
import cardsData from './card3Data';

function Carousel3({index}) {
    const [card, setCard]= useState(null);
    useEffect(()=>{
        const newCard= <Card3 props={cardsData[index]} />;
        setCard(newCard);
    },[index])

  return (
    <div className="carousel3">
      {card}
    </div>
  );
}

export default Carousel3