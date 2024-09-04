import React from "react";
import locationImage from "./assets/location.png";
import calendarImage from "./assets/calendar.png";
import "./styles/destination.css";

const images = {
  "location.png": locationImage,
  "calendar.png": calendarImage,
};

const Dest = (props) => {
  return (
    <div className="container">
      <div className="icon">
        <img src={images[props.icon]} alt="" />
      </div>
      <div className="details">
        <p className="activity">{props.activity}</p>
        <p className="main">{props.main}</p>
      </div>
    </div>
  );
};

export default Dest;