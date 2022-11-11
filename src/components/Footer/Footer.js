import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner container">
        <div className="comp-info">
          <img src="/images/logo-white.svg" alt="" />
          <div className="socials">
            <div className="icons">
              <img src="/images/facebook.svg" alt="" />
              <img src="/images/instagram.svg" alt="" />
              <img src="/images/twitter.svg" alt="" />
            </div>
            <p>&copy; 2022 Metabnb</p>
          </div>
        </div>
        <section className="lists">
          <div>
            <p className="list-heading">Community</p>
            <ul>
              <li>
                <Link to="/">NFT</Link>
              </li>
              <li>
                <Link to="/">Tokens</Link>
              </li>
              <li>
                <Link to="/">Landlord</Link>
              </li>
              <li>
                <Link to="/">Discord</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="list-heading">Places</p>
            <ul>
              <li>
                <Link to="/">Castle</Link>
              </li>
              <li>
                <Link to="/">Farms</Link>
              </li>
              <li>
                <Link to="/">Beach</Link>
              </li>
              <li>
                <Link to="/">Learn more</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="list-heading">About us</p>
            <ul>
              <li>
                <Link to="/">Road map</Link>
              </li>
              <li>
                <Link to="/">Creators</Link>
              </li>
              <li>
                <Link to="/">Career</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
