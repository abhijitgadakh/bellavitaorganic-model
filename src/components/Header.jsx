import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = ({ userName, setUserName }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleCartClick = () => {
    if (!userName) {
      // Redirect to login page if the user is not logged in
      alert("Login first to check cart");
      navigate("/login");
    } else {
      navigate("/cart"); // Navigate to the Cart page if logged in
    }
  };

  const handleLogoClick = () => {
    navigate("/"); // Redirect to home page
  };

  const handleUserClick = () => {
    if (!userName) {
      navigate("/login"); // Redirect to login page if not logged in
    } else {
      setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail"); // Clear user data from local storage
    setUserName(null); // Clear userName state
    setDropdownVisible(false); // Hide the dropdown after logging out
    navigate("/"); // Redirect to home page after logout
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
              <>
                <span onClick={handleUserClick}>{userName}</span>
                {dropdownVisible && (
                  <div className="dropdown">
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </>
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
                <Link to="/products?filter=build-a-box">BuildABox</Link>
              </li>
              <li>
                <Link to="/products?filter=shop-all-products">
                  ShopAllProducts
                </Link>
              </li>
              <li>
                <Link to="/products?filter=bestsellers">Bestsellers</Link>
              </li>
              <li>
                <Link to="/products?filter=luxury-perfumes">
                  LuxuryPerfumes
                </Link>
              </li>
              <li>
                <Link to="/products?filter=all-natural-body-care-products">
                  AllNaturalBodyCareProducts
                </Link>
              </li>
              <li>
                <Link to="/products?filter=cosmetics">Cosmetics</Link>
              </li>
              <li>
                <Link to="/products?filter=new-arrivals">NewArrivals</Link>
              </li>
              <li>
                <Link to="/products?filter=nature-skin-care-products">
                  NaturalSkinCareProducts
                </Link>
              </li>
              <li>
                <Link to="/products?filter=gift-sets">GiftSets</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
