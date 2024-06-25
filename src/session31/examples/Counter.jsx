import React, { useState } from "react";

function GoodCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <p>Current Count: {count}</p>
    </div>
  );
}

function BadCounter() {
  let count = 0;

  const increase = () => {
    count++;
    console.log(count);
  };

  const decrease = () => {
    count--;
    console.log(count);
  };

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <p>Current Count: {count}</p> {/* Mereu va afisa 0 */}
    </div>
  );
}

function DoubleUpCounter() {
  const [count, setCount] = useState(1);

  const handleDouble = () => {
    setCount((prevCount) => prevCount * 2); // Folosim o functie callback pentru a accesa valoarea precedenta a starii
  };

  return (
    <div>
      <button onClick={handleDouble}>Double It!</button>
      <p>Current Count: {count}</p>
    </div>
  );
}

export { GoodCounter, BadCounter, DoubleUpCounter };
