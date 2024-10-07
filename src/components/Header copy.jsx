// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css";

const navItems = [
  { name: "BOGO", link: "/buy1get1" },
  { name: "BuildABox", link: "/build-a-box" },
  { name: "ShopAllProducts", link: "/shop-all-products" },
  { name: "Bestsellers", link: "/bestsellers" },
  { name: "LuxuryPerfumes", link: "/luxury-perfumes" },
  {
    name: "AllNaturalBodyCareProducts",
    link: "/all-natural-body-care-products",
  },
  { name: "Cosmetics", link: "/cosmetics" },
  { name: "NewArrivals", link: "/new-arrivals" },
  { name: "NaturalSkinCareProducts", link: "/natural-skin-care-products" },
  { name: "GiftSets", link: "/gift-sets" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      {/* Top Section */}
      <div className="header-top">
        {/* Hamburger Icon for Mobile */}
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Logo */}
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>

        {/* Icons */}
        <div className="icons">
          <FaUser className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </div>

      {/* Full-width Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>

      {/* Desktop Navigation Menu */}
      <div className="header-bottom">
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
