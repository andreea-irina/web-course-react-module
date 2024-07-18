import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginForm from "./pages/LoginForm";
import { ThemeProvider } from "./store/Theme/context";
import { CartProvider } from "./store/Cart/context";
import { AuthenticationProvider } from "./store/Authentication/context";

function LiveApp() {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <CartProvider>
          <Header />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </CartProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}

export default LiveApp;
