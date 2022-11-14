import React from "react";
import Card from "../components/UI/Card";
import { places } from "../data/cardData";
import "./PlaceToStay.scss";

const PlaceToStay = () => {
  return (
    <div className="places-page container">
      <section>filter</section>
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
