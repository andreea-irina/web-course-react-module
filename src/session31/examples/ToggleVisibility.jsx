import React, { useState } from "react";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

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
