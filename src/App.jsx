import React, { useState, useEffect } from "react";
import AppRoutes from "./Routes";
import { CartProvider } from "./contexts/CartContext"; // Import CartProvider

function App() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Load user data from local storage on initial render
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      setUserName(storedUser);
    }
  }, []);

  return (
    <div className="App">
      <CartProvider>
        <AppRoutes setUserName={setUserName} userName={userName} />{" "}
        {/* Pass userName as prop */}
      </CartProvider>
    </div>
  );
}

export default App;
