import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "./session39/finishedCode/store/Theme/context";
import HomePage from "./session39/finishedCode/pages/Home";
import Layout from "./session39/finishedCode/components/Layout";
// import Header from "./session39/liveCode/components/Header";
// import HomePage from "./session39/liveCode/pages/HomePage";
// import { ThemeProvider } from "./session39/liveCode/store/Theme/context";

function App() {
  return (
    // Session Code
    // <ThemeProvider>
    //   <Header />

    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //   </Routes>
    // </ThemeProvider>

    // Finished Code
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
