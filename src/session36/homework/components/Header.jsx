import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import styles from "./Header.module.css";
import { ThemeContext } from "../store/Theme/context";
import { AuthenticationContext } from "../store/Authentication/context";

function Header() {
  const { state } = useContext(ThemeContext);
  const { user, setUser } = useContext(AuthenticationContext);

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <Navbar className={styles.navbar} bg={state.theme} variant={state.theme}>
      <Navbar.Brand as={Link} to="/">
        Stephen King Books
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/login" onClick={logoutUser}>
            {user ? "Logout" : "Login"}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
