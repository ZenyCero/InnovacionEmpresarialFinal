import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/checkout/:productId" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

// Export default App component
export default App;
