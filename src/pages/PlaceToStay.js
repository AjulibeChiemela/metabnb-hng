import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Card from "../components/UI/Card";
import { places } from "../data/cardData";
import "./PlaceToStay.scss";

const PlaceToStay = () => {
  const [showList, setShowList] = useState(false);

  const handleToggle = () => {
    setShowList((prevShowList) => !prevShowList);
  };

  const handleHideList = () => {
    setShowList(false);
  };

  return (
    <div className="places-page container">
      <section className="places-page-filter container">
        <div className="places-page-filter-inner ">
          <div className="locations">
            <button
              class="btn btn-primary "
              type="button"
              onClick={handleToggle}
            >
              Select Location
            </button>
            {showList && (
              <ClickAwayListener onClickAway={handleHideList}>
                <ul>
                  <li onClick={handleHideList}>Resturant</li>
                  <li onClick={handleHideList}>Cottage</li>
                  <li onClick={handleHideList}>Castle</li>
                  <li onClick={handleHideList}>fantast city</li>
                  <li onClick={handleHideList}>beach</li>
                  <li onClick={handleHideList}>Carbins</li>
                  <li onClick={handleHideList}>Off-grid</li>
                  <li onClick={handleHideList}>Farm</li>
                </ul>
              </ClickAwayListener>
            )}
          </div>
          <ul className="lg-list">
            <li>Resturant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>fantast city</li>
            <li>beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
          </ul>
          <div className="filter">
            location <img src="/images/filter-icon.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="places-page-cards">
        <div className="places-page-cards-inner">
          {places.map((place) => (
            <Card image={place.image} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlaceToStay;
