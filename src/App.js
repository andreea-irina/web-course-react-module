import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "./session39/finishedCode/store/Theme/context";
import HomePage from "./session39/finishedCode/pages/Home";
import Layout from "./session39/finishedCode/components/Layout";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
