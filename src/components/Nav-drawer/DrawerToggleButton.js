import React from "react";

import './DrawerToggleButton.css';

export default function DrawerToggleButton(props){
    return(
    <button className="dropbtn" onClick={props.click}>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </button>
  )
}