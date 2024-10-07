// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa"; // Import FaBars
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  return (
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
              <Link to="/buy1get1">Buy1Get1</Link>
            </li>
            <li>
              <Link to="/build-a-box">BuildABox</Link>
            </li>
            <li>
              <Link to="/shop-all-products">ShopAllProducts</Link>
            </li>
            <li>
              <Link to="/bestsellers">Bestsellers</Link>
            </li>
            <li>
              <Link to="/luxury-perfumes">LuxuryPerfumes</Link>
            </li>
            <li>
              <Link to="/all-natural-body-care-products">
                AllNaturalBodyCareProducts
              </Link>
            </li>
            <li>
              <Link to="/cosmetics">Cosmetics</Link>
            </li>
            <li>
              <Link to="/new-arrivals">NewArrivals</Link>
            </li>
            <li>
              <Link to="/natural-skin-care-products">
                NaturalSkinCareProducts
              </Link>
            </li>
            <li>
              <Link to="/gift-sets">GiftSets</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
