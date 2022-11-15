import React from "react";
import Card from "../components/UI/Card";
import { places } from "../data/cardData";
import "./PlaceToStay.scss";

const PlaceToStay = () => {
  return (
    <div className="places-page container">
      <section className="places-page-filter container">
        <div className="places-page-filter-inner ">
          <div className="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Location
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">Resturant</li>
              <li className="dropdown-item">Cottage</li>
              <li className="dropdown-item">Castle</li>
              <li className="dropdown-item">fantast city</li>
              <li className="dropdown-item">beach</li>
              <li className="dropdown-item">Carbins</li>
              <li className="dropdown-item">Off-grid</li>
              <li className="dropdown-item">Farm</li>
            </ul>
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
