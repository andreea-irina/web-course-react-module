import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import { ThemeContext } from "../store/Theme/context";
import { changeTheme } from "../store/Theme/actions";
import { DashboardContext } from "../store/Dashboard/context";
import styles from "./Header.module.css";

export default function Header() {
  const location = useLocation();
  const { state, dispatch } = useContext(ThemeContext);
  const { state: dashboardState } = useContext(DashboardContext);

  const handleThemeChange = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
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

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="gap-2">
            <Nav.Link
              as={Link}
              to="/bitcoin"
              className={
                location.pathname.includes("bitcoin") ? "text-primary" : ""
              }
            >
              BTC
            </Nav.Link>

            <Nav.Link as={Link} to="/dashboard">
              My Dashboard {`(${dashboardState.coins.length})`}
            </Nav.Link>

            <Button
              size="sm"
              variant={state.theme}
              onClick={handleThemeChange}
              className={styles.themeButton}
            >
              <span className="material-symbols-outlined">
                {state.theme === "light" ? "light_mode" : "dark_mode"}
              </span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
