import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="global-card">
      <div className="img-container">
        <img src={props.image} alt="" />
      </div>
      <div className="text-container">
        <div className="text-left">
          <p className="fw-400">Desert king</p>
          <p className="fw-400">2345km away</p>
        </div>
        <div className="text-right">
          <p className="fw-700">1MBT per night</p>
          <p className="fw-400">available for 2weeks stay</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
