// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OfferSlider from "./components/OfferSlider";
import Header from "./components/Header";
import Products from "./pages/Products";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";

const AppRoutes = () => {
  return (
    <>
      <OfferSlider />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
