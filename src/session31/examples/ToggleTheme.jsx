import React, { useState } from "react";
import "./ToggleTheme.css";

function ToggleTheme() {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "5px",
        padding: "10px",
        minHeight: "200px",
      }}
      className={theme === "light" ? "light-theme" : "dark-theme"}
    >
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      <p
        style={{
          marginTop: "auto",
        }}
      >
        The current theme is {theme}.
      </p>
    </div>
  );
}

export default ToggleTheme;
