
import React from "react";
import hotel1 from "./assets/hotel1.jpg";
import hotel2 from "./assets/hotel2.jpg";
import hotel3 from "./assets/hotel3.jpg";
import hotel4 from "./assets/hotel4.jpg";
import hotel5 from "./assets/hotel5.jpg";

const images = {
  "hotel1.jpg": hotel1,
  "hotel2.jpg": hotel2,
  "hotel3.jpg": hotel3,
  "hotel4.jpg": hotel4,
  "hotel5.jpg": hotel5,
  
  
};

import "./styles/hotel.css";

export const Hotel = (props) => {
  return (
    <div className="hotel">
      <div className="image">
        <img src={images[props.image]} alt="" />
      </div>
      <div className="content">
        <div className="hotel-details">
          <div className="hotel-name">{props.hotelname}</div>
          <div className="hotel-price">{props.pricing}</div>
        </div>
        <div className="place">
          <div className="hotel-place">{props.place}</div>
          
          <div className="hotel-rating">{props.rating}</div>
          
        </div>
      </div>
    </div>
  );
};

export default Hotel;
