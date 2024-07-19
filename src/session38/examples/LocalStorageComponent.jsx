import { Button, Container } from "react-bootstrap";

import useLocalStorage from "./useLocalStorage";

function LocalStorageComponent() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Container
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>{theme} Theme</h1>
      <Button variant="warning" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </Container>
  );
}

export default LocalStorageComponent;
