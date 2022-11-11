import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="homepage-hero container">
        <div className="homepage-hero-text">
          <h1 className="fs-56 fw-700">
            Rent a <span className="text-primary">Place</span> away from{" "}
            <span className="text-primary">Home</span> in the{" "}
            <span className="text-primary">Metaverse</span>
          </h1>
          <p className="fw-400 fs-24 hero-desc">
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
    </div>
  );
};

export default HomePage;
