import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color,reference}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={reference}>
      <button className="c-button">LEARN MORE</button>
      </a>
    </div>
  );
};

export default Card;
