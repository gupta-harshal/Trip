import React from "react";
import "./styles/navItem.css";
import {Link} from 'react-router-dom'
const Navitem= (props) => {
  return (
    <a className="label" to={props.link}>
      <div className="nav-item">{props.item}</div>
    </a>
  );
};

export default Navitem;