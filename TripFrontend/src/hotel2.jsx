
import React from "react";
import hotel21 from "./assets/hotel21.jpg";
import hotel22 from "./assets/hotel22.jpg";
import hotel23 from "./assets/hotel23.jpg";
import hotel24 from "./assets/hotel24.jpg";


const images = {
  "hotel21.jpg": hotel21,
  "hotel22.jpg": hotel22,
  "hotel23.jpg": hotel23,
  "hotel24.jpg": hotel24,
  
  
  
};

import "./styles/hotel2.css";

const Hotel2 = (props) => {
  return (
    <div className="hotel2">
      <div className="image">
        <img src={images[props.image]} alt="" />
      </div>
      <div className="content">
        <div className="hotel2-details">
          <div className="hotel2-name">{props.hotelname}</div>
          <div className="hotel2-price">{props.pricing}</div>
        </div>
        <div className="place">
          <div className="hotel2-place">{props.place}</div>
          
          <div className="hotel2-rating">{props.rating}</div>
          
        </div>
      </div>
    </div>
  );
};

export default Hotel2;
