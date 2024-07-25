import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import { ThemeContext } from "../store/Theme/context";
import { DashboardContext } from "../store/Dashboard/context";
import { changeTheme } from "../store/Theme/actions";
import styles from "./Header.module.css";

export default function Header() {
  const { state, dispatch } = useContext(ThemeContext);
  const { state: dashboardState } = useContext(DashboardContext);

  const handleThemeChange = () => {
    let newTheme = "";
    if (state.theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "light";
    }

    dispatch(changeTheme(newTheme));
  };

  return (
    <header className="mb-4">
      <Navbar
        expand="md"
        className={styles.navbar}
        bg="transparent"
        variant={state.theme}
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

            <Nav.Link as={Link} to="/ethereum">
              ETH
            </Nav.Link>

            <Nav.Link as={Link} to="/litecoin">
              LTC
            </Nav.Link>

            <Nav.Link as={Link} to="/dashboard">
              My Dashboard {`(${dashboardState.coins.length})`}
            </Nav.Link>

            <Button
              size="sm"
              variant={state.theme === "light" ? "dark" : "light"}
              onClick={handleThemeChange}
              className={styles.themeButton}
            >
              {state.theme === "light" && (
                <span className="material-symbols-outlined">light_mode</span>
              )}
              {state.theme === "dark" && (
                <span className="material-symbols-outlined">dark_mode</span>
              )}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
