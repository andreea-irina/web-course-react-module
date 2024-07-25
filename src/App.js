import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "./session40/finishedCode/store/Theme/context";
import HomePage from "./session40/finishedCode/pages/Home";
import Layout from "./session40/finishedCode/components/Layout";
import BitcoinPage from "./session40/finishedCode/pages/Bitcoin";
import { DashboardProvider } from "./session40/finishedCode/store/Dashboard/context";

function App() {
  return (
    // Session Code

    // Finished Code
    <ThemeProvider>
      <DashboardProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bitcoin" element={<BitcoinPage />} />
          </Routes>
        </Layout>
      </DashboardProvider>
    </ThemeProvider>
  );
}

export default App;
