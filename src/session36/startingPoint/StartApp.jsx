import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./store/Cart/context";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function StartApp() {
  return (
    <CartProvider>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default StartApp;
