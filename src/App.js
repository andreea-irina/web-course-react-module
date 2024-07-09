import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./session35/examples/components/Header";
import Users from "./session35/examples/pages/Users";
import User from "./session35/examples/pages/User";
import Home from "./session35/examples/pages/Home";
import About from "./session35/examples/pages/About";
import Page404 from "./session35/examples/pages/Page404";

function App() {
  return (
    <div className="app-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
