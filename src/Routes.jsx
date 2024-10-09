import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OfferSlider from "./components/OfferSlider";
import Header from "./components/Header";
import Products from "./pages/Products";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

const AppRoutes = ({ setUserName, userName }) => {
  return (
    <>
      <OfferSlider />
      <Header userName={userName} /> {/* Pass userName to Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUserName={setUserName} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart userName={userName} />} />{" "}
        {/* Pass userName to Cart */}
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
