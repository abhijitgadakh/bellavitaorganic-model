import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import ProductSwitcher from "./subpages/ProductSwitcher";
import TopThreeProducts from "./subpages/TopThreeProducts";
import { useNavigate } from "react-router-dom";

const images = [
  "/HomePage/01_hero1.png",
  "/HomePage/03_hero3.png",
  "/HomePage/02_hero2.png",
  "/HomePage/04_hero4.png",
];

const logos = [
  "/HomePage/30_logo_1.png",
  "/HomePage/30_logo_2.png",
  "/HomePage/30_logo_3.png",
  "/HomePage/30_logo_4.png",
  "/HomePage/30_logo_5.png",
  "/HomePage/30_logo_6.png",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logoSliderRef = useRef(null);
  const navigate = useNavigate();

  // Automatically slide every 6 seconds for hero images
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Automatically scroll logos at a constant speed
  useEffect(() => {
    const scrollLogos = () => {
      if (logoSliderRef.current) {
        logoSliderRef.current.scrollLeft += 1; // Adjust scroll speed here
        if (
          logoSliderRef.current.scrollLeft >=
          logoSliderRef.current.scrollWidth / 2
        ) {
          logoSliderRef.current.scrollLeft = 0; // Reset to the start
        }
      }
    };

    const logoScroll = setInterval(scrollLogos, 20); // Adjust time for speed
    return () => clearInterval(logoScroll);
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
        <img className="offer-img" src="/offer.png" alt="offer" />
      </div>
      <ProductSwitcher />

      <div className="offer">
        <img
          className="offer-img"
          src="/HomePage/13_buy_any_for_1298.png"
          alt="offer"
        />
      </div>

      <TopThreeProducts />
      <div className="offer">
        <img
          className="offer-img"
          src="/HomePage/26_app_download.png"
          alt="offer"
        />
      </div>
      <div className="offer">
        <img
          className="offer-img"
          src="/HomePage/27_bella_cash_offer.png"
          alt="offer"
        />
      </div>
      <div className="offer">
        <img className="offer-img" src="/HomePage/29_images.png" alt="offer" />
      </div>
      <div className="logo-slider-container">
        <div className="logo-slider" ref={logoSliderRef}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo"
            />
          ))}
          {/* Duplicate logos for seamless scrolling */}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="logo"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
