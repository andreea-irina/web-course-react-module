import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import { ThemeContext } from "../store/Theme/context";

import styles from "./Header.module.css";
import { changeTheme } from "../store/Theme/actions";

export default function Header() {
  const { state, dispatch } = useContext(ThemeContext);

  const handleThemeChange = () => {
    dispatch(changeTheme(state.theme === "dark" ? "light" : "dark"));
  };

  return (
    <header className="mb-4">
      <Navbar
        className={styles.navbar}
        bg="transparent"
        variant={state.theme === "dark" ? "light" : "dark"}
      >
        <Navbar.Brand as={Link} to="/">
          Historical Crypto Market
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="gap-2">
            <Nav.Link as={Link} to="/bitcoin">
              BTC
            </Nav.Link>

            <Nav.Link as={Link} to="/dashboard">
              My Dashboard
            </Nav.Link>

            <Button
              variant={state.theme}
              className={styles.themeButton}
              onClick={handleThemeChange}
            >
              {state.theme === "dark" ? (
                <span class="material-symbols-outlined">light_mode</span>
              ) : (
                <span class="material-symbols-outlined">dark_mode</span>
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
