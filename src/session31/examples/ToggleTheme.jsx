import React, { useState } from "react";
import "./ToggleTheme.css";

function ToggleTheme() {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      <p>The current theme is {theme}.</p>
    </div>
  );
}

export default ToggleTheme;
