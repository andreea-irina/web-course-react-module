import { Button, Container } from "react-bootstrap";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect } from "react";

export default function LocalStorageExample() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

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
