// src/pages/subpages/ProductSwitcher.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import productsData from "../../data/product-data.json"; // Import product data
import { useCart } from "../../contexts/CartContext"; // Import Cart Context
import "./ProductSwitcher.css"; // Import styles

const ProductSwitcher = () => {
  const [activeTab, setActiveTab] = useState("bestsellers");
  const { addToCart } = useCart(); // Get addToCart function from context
  const navigate = useNavigate(); // Initialize navigate

  // Filter Bestsellers
  const bestsellers = productsData
    .filter((product) => product.offerCategories.includes("bestseller"))
    .slice(0, 4);

  // Filter New Arrivals
  const newArrivals = productsData
    .filter((product) => product.offerCategories.includes("new"))
    .slice(0, 4);

  const displayedProducts =
    activeTab === "bestsellers" ? bestsellers : newArrivals;

  return (
    <div className="product-switcher">
      <div className="tab-buttons">
        <button
          className={activeTab === "bestsellers" ? "active" : ""}
          onClick={() => setActiveTab("bestsellers")}
        >
          BESTSELLERS
        </button>
        <span className="bes-line">|</span>
        <button
          className={activeTab === "newarrivals" ? "active" : ""}
          onClick={() => setActiveTab("newarrivals")}
        >
          NEW ARRIVALS
        </button>
      </div>

      <div className="product-list">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-img">
              <img
                src={`/products/${product.id}.png`} // Correct the image path
                alt={product.productName}
              />
            </div>
            <div className="product-details mb-10">
              <p className="product-brandName mb-10">{product.brandName}</p>
              <p className="product-productName mb-10">{product.productName}</p>
              <p className="product-rating mb-20">
                ⭐ {product.rating} | ({product.reviews} reviews)
              </p>
              <button
                className="add-to-cart"
                onClick={() => addToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shop All Button */}
      <button
        className="shop-all-button"
        onClick={() => navigate("/products")} // Navigate to products page
      >
        VIEW ALL
      </button>
    </div>
  );
};

export default ProductSwitcher;
