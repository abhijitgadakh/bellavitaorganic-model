import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + (product.offerPrice || product.price),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
