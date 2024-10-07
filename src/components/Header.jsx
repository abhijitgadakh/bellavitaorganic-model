// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa"; // Import FaBars
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  return (
    <div className="header-div">
      <header className="header">
        <div className="header-top">
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <FaSearch className="search-icon" />
          </div>

          <div className="logo">
            <img src="/path/to/logo.png" alt="Logo" />
          </div>

          <div className="icons">
            <FaUser className="icon" />
            <FaShoppingCart className="icon" />
          </div>
        </div>

        <div className="header-bottom">
          <nav>
            <ul>
              <li>
                <Link to="/products">Buy1Get1</Link>
              </li>
              <li>
                <Link to="/products">BuildABox</Link>
              </li>
              <li>
                <Link to="/products">ShopAllProducts</Link>
              </li>
              <li>
                <Link to="/products">Bestsellers</Link>
              </li>
              <li>
                <Link to="/products">LuxuryPerfumes</Link>
              </li>
              <li>
                <Link to="/products">AllNaturalBodyCareProducts</Link>
              </li>
              <li>
                <Link to="/products">Cosmetics</Link>
              </li>
              <li>
                <Link to="/products">NewArrivals</Link>
              </li>
              <li>
                <Link to="/products">NaturalSkinCareProducts</Link>
              </li>
              <li>
                <Link to="/products">GiftSets</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
