// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../contexts/CartContext"; // Ensure this path is correct
import productsData from "../data/product-data.json"; // Import product data
import "./Cart.css"; // Import CSS

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice, addToCart } = useCart(); // Get cart data

  // Filter 3 bestseller products
  const bestSellers = productsData
    .filter((product) => product.offerCategories.includes("bestseller"))
    .slice(0, 3);

  return (
    <div className="cart-page">
      <div className="cart-items">
        <h2>Your Cart</h2>
        <br />
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-details">
                  <p className="product-name">{item.productName}</p>
                  <p>Price: ₹{item.offerPrice || item.price}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-total">
              <h2>Total Price: ₹{getTotalPrice()}</h2>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        )}
      </div>

      <div className="bestsellers-section">
        <h2>Best Sellers</h2>
        <br />
        {bestSellers.map((product) => (
          <div key={product.id} className="bestseller-item">
            <div className="bestseller-img">
              <img
                src={`/products/${product.id}.png`}
                alt={product.productName}
              />
            </div>
            <div className="bestseller-details">
              <p className="bestseller-name">{product.productName}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
