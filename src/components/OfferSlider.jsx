// src/components/OfferSlider.js
import React, { useState, useEffect } from "react";
import "./OfferSlider.css";

const offers = [
  "Buy 1 Get 1 Free on all products!",
  "Free shipping on orders over $50!",
  "Flat 30% off on new arrivals!",
  "Exclusive deals on perfumes, check them out now!",
];

const OfferSlider = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 6000); // Total cycle time: 6 seconds (3s for sliding + 3s pause)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="offer-slider">
      <p className="offer-text">{offers[currentOfferIndex]}</p>
    </div>
  );
};

export default OfferSlider;
