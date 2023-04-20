import React from 'react'
import "./index.scss"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";


function Card2(props) {
  return (
    <div className="card2">
      <div className="card-block">
        <div className="image-div">
          <img src={props.image} alt="coustomer picture" />
        </div>
        <div className="content-div">
          <div className="text-div">
            <div className="icons-div">
              <span>
                <AiFillStar size={20} style={{ marginRight: ".1rem" }} />
                <AiFillStar size={20} style={{ marginRight: ".1rem" }} />
                <AiFillStar size={20} style={{ marginRight: ".1rem" }} />
                <AiFillStar size={20} style={{ marginRight: ".1rem" }} />
                <AiOutlineStar size={20} style={{ marginRight: ".1rem" }} />
              </span>
              <span>
                <GrFacebookOption
                  color="grey"
                  size={20}
                  style={{ marginRight: ".6rem" }}
                />
                <GrTwitter color="grey" size={20} />
              </span>
            </div>
            <h4>{props.name}</h4>
            <p style={{ color: "rgb(180, 180, 180)" }}>
              Post date: {props.postDate}
            </p>
            <p>
              {props.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2