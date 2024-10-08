// src/App.js
import React from "react";
import AppRoutes from "./Routes";
import { CartProvider } from "./contexts/CartContext"; // Import CartProvider

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
