import React from "react";
import "./styles/navItem.css";
const Navitem= (props) => {
  return (
    <a className="label">
      <div className="nav-item">{props.item}</div>
    </a>
  );
};

export default Navitem;