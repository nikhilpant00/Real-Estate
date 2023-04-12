import React from "react";
import "./index.scss";


function Card({ showStatus, props }) {
  return (
    <div className={`card-page-2 ${showStatus}`}>
      <div className="show-image">
        <img src={props.img} />
      </div>
      <h1 className="text-grey">{props.number}</h1>
      <h2>{props.heading}</h2>
      <p className="show-text">{props.description}</p>
    </div>
  );
}

export default Card;
