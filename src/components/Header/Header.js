import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="container">
      <div className="header-logo">
        <img src="/images/logo-col.svg" alt="" />
      </div>
      <img
        src="/images/bar.png"
        alt=""
        className="bar"
        onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)}
      />
      <div className={`header-menu ${showMenu ? "open" : "closed"}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/places"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Place to stay
            </NavLink>
          </li>
          <li>
            <Link to="/">NFTs</Link>
          </li>
          <li>
            <Link to="/">Community</Link>
          </li>
        </ul>
        <button className="btn btn-primary header-btn fw-400 fs-16">
          Connect wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
