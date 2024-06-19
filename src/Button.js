function Button() {
  function handleClick() {
    console.log("Button clicked!");
  }

  // echivalent cu addEventListener("click", handleClick);
  return <button onClick={handleClick}>Click me!</button>;
}

export { Button };
// export default Button;
