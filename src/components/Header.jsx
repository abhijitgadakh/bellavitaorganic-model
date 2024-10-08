import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = ({ userName }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleCartClick = () => {
    if (!userName) {
      // alert("Login first to check cart");
      navigate("/cart"); // Redirect to login page
    } else {
      navigate("/cart"); // Navigate to the Cart page
    }
  };
  const handleLogoClick = () => {
    navigate("/"); // Redirect to home page
  };
  const handleUserClick = () => {
    if (!userName) {
      navigate("/login"); // Redirect to login page
    } else {
      alert("already Logged In");
    }
  };

  return (
    <div className={`header-div ${isHome ? "" : "not-home"}`}>
      <header className={`header ${isHome ? "" : "not-home"}`}>
        <div className="header-top">
          <div className={`search-box ${isHome ? "" : "not-home"}`}>
            <input type="text" placeholder="Search" />
            <FaSearch
              className={`search-icon icons ${isHome ? "" : "not-home"}`}
            />
          </div>

          <div className="logo" onClick={handleLogoClick}>
            <img
              src="/common/bellavita_logo.png" // Adjusted to remove 'public/' for path
              height="50px"
              alt="Logo"
              className={isHome ? "" : "not-home"}
            />
          </div>

          <div className="icons">
            {userName ? (
              <span>{userName}</span>
            ) : (
              <FaUser
                onClick={handleUserClick}
                className={`icon ${isHome ? "" : "not-home"}`}
              />
            )}
            <FaShoppingCart
              className={`icon ${isHome ? "" : "not-home"}`}
              onClick={handleCartClick}
            />
          </div>
        </div>

        <div className="header-bottom">
          <nav>
            <ul>
              <li>
                <Link to="/products?filter=bojo">Buy1Get1</Link>
              </li>
              <li>
                <Link to="/products?filter=giftKit">BuildABox</Link>
              </li>
              <li>
                <Link to="/products?filter=all">ShopAllProducts</Link>
              </li>
              <li>
                <Link to="/products?filter=bestseller">Bestsellers</Link>
              </li>
              <li>
                <Link to="/products?filter=perfumes">LuxuryPerfumes</Link>
              </li>
              <li>
                <Link to="/products?filter=bodyCare">
                  AllNaturalBodyCareProducts
                </Link>
              </li>
              <li>
                <Link to="/products?filter=bodyCare">Cosmetics</Link>
              </li>
              <li>
                <Link to="/products?filter=new">NewArrivals</Link>
              </li>
              <li>
                <Link to="/products?filter=bodyCare">
                  NaturalSkinCareProducts
                </Link>
              </li>
              <li>
                <Link to="/products?filter=giftKit">GiftSets</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
