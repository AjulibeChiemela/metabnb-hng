import React, { useState } from "react";
import "./Card.scss";

const Card = (props) => {
  const [showColHeart, setShowColHeart] = useState(false);

  const toggleHeart = () => {
    setShowColHeart((prevShowColHeart) => !prevShowColHeart);
  };

  return (
    <div className="global-card">
      <div className="img-container">
        <img src={props.image} alt="" className="place-img" />
        {!showColHeart && (
          <img
            src="/images/heart-grey.svg"
            alt=""
            className="heart"
            onClick={toggleHeart}
          />
        )}
        {showColHeart && (
          <img
            src="/images/heart-col.svg"
            alt=""
            className="heart"
            onClick={toggleHeart}
          />
        )}
      </div>
      <div className="text-container">
        <div className="text-left">
          <p className="fw-400">Desert king</p>
          <p className="fw-400">2345km away</p>
          <img src="/images/stars.png" alt="" />
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
