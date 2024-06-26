import React, { useState } from "react";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    if (isVisible) {
      // isVisible = true, schimba-l in false
      setIsVisible(false);
    } else {
      // isVisible = false, schimba-l in true
      setIsVisible(true);
    }
  }

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && <p>Now you see me!</p>}
    </div>
  );
}

export default ToggleVisibility;
