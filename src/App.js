import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
// import { ThemeProvider } from "./session40/finishedCode/store/Theme/context";
// import { DashboardProvider } from "./session40/finishedCode/store/Dashboard/context";
// import { AlertProvider } from "./session40/finishedCode/store/Alert/context";
// import HomePage from "./session40/finishedCode/pages/Home";
// import Layout from "./session40/finishedCode/components/Layout";
// import CoinPage from "./session40/finishedCode/pages/Coin";

import { ThemeProvider } from "./session40/liveCode/store/Theme/context";
import { DashboardProvider } from "./session40/liveCode/store/Dashboard/context";
import HomePage from "./session40/liveCode/pages/Home";
import Layout from "./session40/liveCode/components/Layout";
import CoinPage from "./session40/liveCode/pages/Coin";

function App() {
  return (
    // Session Code
    <ThemeProvider>
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
    </ThemeProvider>

    // Finished Code
    // <ThemeProvider>
    //   <AlertProvider>
    //     <DashboardProvider>
    //       <Layout>
    //         <Routes>
    //           <Route path="/" element={<HomePage />} />
    //           <Route path="/bitcoin" element={<CoinPage coin="BTC" />} />
    //           <Route path="/ethereum" element={<CoinPage coin="ETH" />} />
    //         </Routes>
    //       </Layout>
    //     </DashboardProvider>
    //   </AlertProvider>
    // </ThemeProvider>
  );
}

export default App;
