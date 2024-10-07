// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Buy1Get1 from "./pages/Buy1Get1";
import BuildABox from "./pages/BuildABox";
import ShopAllProducts from "./pages/ShopAllProducts";
import Bestsellers from "./pages/Bestsellers";
import LuxuryPerfumes from "./pages/LuxuryPerfumes";
import AllNaturalBodyCareProducts from "./pages/AllNaturalBodyCareProducts";
import Cosmetics from "./pages/Cosmetics";
import NewArrivals from "./pages/NewArrivals";
import NaturalSkinCareProducts from "./pages/NaturalSkinCareProducts";
import GiftSets from "./pages/GiftSets";
import OfferSlider from "./components/OfferSlider";
import Header from "./components/Header";

const AppRoutes = () => {
  return (
    <>
      <OfferSlider />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy1get1" element={<Buy1Get1 />} />
        <Route path="/build-a-box" element={<BuildABox />} />
        <Route path="/shop-all-products" element={<ShopAllProducts />} />
        <Route path="/bestsellers" element={<Bestsellers />} />
        <Route path="/luxury-perfumes" element={<LuxuryPerfumes />} />
        <Route
          path="/all-natural-body-care-products"
          element={<AllNaturalBodyCareProducts />}
        />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route
          path="/natural-skin-care-products"
          element={<NaturalSkinCareProducts />}
        />
        <Route path="/gift-sets" element={<GiftSets />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
