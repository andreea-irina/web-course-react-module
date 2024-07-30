import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "./session41/finishedCode/store/Theme/context";
import { DashboardProvider } from "./session41/finishedCode/store/Dashboard/context";
import { AlertProvider } from "./session41/finishedCode/store/Alert/context";
import HomePage from "./session41/finishedCode/pages/Home";
import Layout from "./session41/finishedCode/components/Layout";
import CoinPage from "./session41/finishedCode/pages/Coin";

function App() {
  return (
    // Session Code

    // Finished Code
    <ThemeProvider>
      <AlertProvider>
        <DashboardProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bitcoin" element={<CoinPage coin="BTC" />} />
              <Route path="/ethereum" element={<CoinPage coin="ETH" />} />
              <Route path="/litecoin" element={<CoinPage coin="LTC" />} />
            </Routes>
          </Layout>
        </DashboardProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
