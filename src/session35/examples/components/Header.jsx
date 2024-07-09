import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.color + " " + "mt-2"}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
