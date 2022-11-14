import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ModalComp from "../UI/Modal";
import "./Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };

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
        <img
          src="/images/close.png"
          alt=""
          className="close-arr"
          onClick={closeMenu}
        />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink
              to="/places"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Place to stay
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <Link to="/">NFTs</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/">Community</Link>
          </li>
        </ul>
        <button
          className="btn btn-primary header-btn fw-400 fs-16"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Connect wallet
        </button>
        <ModalComp headerTitle="Connect Wallet">
          <p className="cta">Choose your preferred wallet:</p>
          <div className="cta-option">
            <div>
              <img src="/images/metmask-img.png" alt="" />
              <p className="fw-600 fs-18">Metamask</p>
            </div>
            <img src="/images/arr-right.svg" alt="" />
          </div>
          <div className="cta-option">
            <div>
              <img src="/images/walletconnect.png" alt="" />
              <p className="fw-600 fs-18">WalletConnect</p>
            </div>
            <img src="/images/arr-right.svg" alt="" />
          </div>
        </ModalComp>
      </div>
    </header>
  );
};

export default Header;
