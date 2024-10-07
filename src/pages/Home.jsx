import React, { useState, useEffect } from "react";
import "./Home.css";
import Footer from "../components/Footer";

const images = [
  "public/HomePage/01_hero1.png",
  "public/HomePage/02_hero2.png",
  "public/HomePage/03_hero3.png",
  "public/HomePage/04_hero4.png",
];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer); // Clear the interval on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="slider">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>

        <div className="navigation-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="offer">
        <img className="offer-img" src="public/offer.png" alt="offer" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
