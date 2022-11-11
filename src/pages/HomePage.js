import React from "react";
import Card from "../components/UI/Card";
import { inspiration } from "../data/cardData";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="homepage-hero container">
        <div className="homepage-hero-text">
          <h1 className="fs-56 fw-700 text-dark">
            Rent a <span className="text-primary">Place</span> away from{" "}
            <span className="text-primary">Home</span> in the{" "}
            <span className="text-primary">Metaverse</span>
          </h1>
          <p className="fw-400 fs-24 hero-desc text-dark">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form>
            <input
              type="text"
              placeholder="Search for location"
              className="form-control"
            />
            <button className="btn btn-primary fw-400 fs-16">Search</button>
          </form>
        </div>
        <div className="homepage-hero-img">
          <img src="/images/hero-img.png" alt="" />
        </div>
      </section>
      <div className="logo-footer">
        <img src="/images/mbtoken.svg" alt="" />
        <img src="/images/metamask.svg" alt="" />
        <img src="/images/opensea.svg" alt="" />
      </div>
      <section className="homepage-cards-section container">
        <h2 className="fw-700 fs-48">Inspiration for your next adventure</h2>
        <div className="homepage-cards-section-inner">
          {inspiration.map((item) => (
            <Card image={item.image} />
          ))}
        </div>
      </section>
      <section className="homepage-nft-section">
        <div className="nft-section-inner container">
          <div className="nft-section-inner-text ">
            <h2 className="fw-700 fs-48">Metabnb NFTs</h2>
            <p className="fw-400 fs-18 nft-desc">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button className="btn btn-light text-primary fw-400 fs-16">
              Learn more
            </button>
          </div>
          <div className="nft-section-inner-img">
            <img src="/images/nft-imgs.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
