import React, { useState, useEffect } from "react";
import productsData from "../data/product-data.json"; // Import product data
import { useCart } from "../contexts/CartContext"; // Import Cart Context
import { useLocation } from "react-router-dom"; // Import useLocation for query params
import "./Products.css"; // Import styles

const Products = () => {
  const { addToCart } = useCart(); // Get addToCart function from context
  const [filteredProducts, setFilteredProducts] = useState(productsData); // State to hold filtered products
  const [displayCount, setDisplayCount] = useState(10); // State to control the number of displayed products
  const [typeOfProducts, setTypeOfProducts] = useState("All Products"); // State to control the type of products heading
  const location = useLocation(); // Get location to access query params
  const searchParams = new URLSearchParams(location.search);
  const filter = searchParams.get("filter"); // Get filter from URL query params

  useEffect(() => {
    let filtered = productsData;

    switch (filter) {
      case "bojo":
        filtered = productsData.filter((product) =>
          product.offerCategories.includes("bojo")
        );
        setTypeOfProducts("Buy 1 Get 1 Free");
        break;
      case "giftKit":
        filtered = productsData.filter((product) =>
          product.productName.toLowerCase().includes("gift set")
        );
        setTypeOfProducts("Gift Set or Build a box Products");
        break;
      case "bestseller":
        filtered = productsData.filter((product) =>
          product.offerCategories.includes("bestseller")
        );
        setTypeOfProducts("Bestseller Products");
        break;
      case "perfumes":
        filtered = productsData.filter((product) =>
          product.productCategories.includes("perfumes")
        );
        setTypeOfProducts("All Perfumes");
        break;
      case "bodyCare":
        filtered = productsData.filter(
          (product) =>
            product.productName.toLowerCase().includes("body") ||
            product.productName.toLowerCase().includes("natural") ||
            product.productName.toLowerCase().includes("skin") ||
            product.productName.toLowerCase().includes("care")
        );
        setTypeOfProducts("Body or Skin Care Products");
        break;
      case "new":
        filtered = productsData.filter((product) =>
          product.offerCategories.includes("new")
        );
        setTypeOfProducts("New Arrivals");
        break;
      case "all":
        filtered = productsData; // Show all products
        setTypeOfProducts("All Products");
        break;
      default:
        filtered = productsData;
        setTypeOfProducts("All Products");
        break;
    }

    setFilteredProducts(filtered); // Update filtered products based on filter
  }, [filter]);

  const loadMoreProducts = () => {
    setDisplayCount((prevCount) => prevCount + 10); // Increase the number of displayed products by 10
  };

  return (
    <>
      <div className="offer product-page">
        <img
          className="offer-img"
          src="public/HomePage/04_hero5.png"
          alt="offer"
        />
      </div>
      <div className="products">
        <div className="category-display">
          <p>{typeOfProducts}</p>
        </div>
        <div className="product-list">
          {filteredProducts.slice(0, displayCount).map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-img">
                <img
                  src={`/products/${product.id}.png`} // Correct the image path
                  alt={product.productName}
                />
              </div>
              <div className="product-details mb-10">
                <p className="product-brandName mb-10">{product.brandName}</p>
                <p className="product-productName mb-10">
                  {product.productName}
                </p>
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
        {displayCount < filteredProducts.length && (
          <button className="load-more" onClick={loadMoreProducts}>
            LOAD MORE
          </button>
        )}
      </div>
    </>
  );
};

export default Products;
