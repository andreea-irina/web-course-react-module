import { useContext } from "react";

import { ThemeContext } from "../store/Theme/context";
import { AlertContext } from "../store/Alert/context";

import Header from "./Header";
import { Alert } from "react-bootstrap";

export default function Layout({ children }) {
  const { state } = useContext(ThemeContext);
  const { alert } = useContext(AlertContext);

  return (
    <div className={`bg-${state.theme} d-flex flex-column min-vh-100`}>
      <Header />

      {children}

      <div
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 1050,
        }}
      >
        <Alert show={alert !== null} variant={alert?.variant}>
          {alert?.message}
        </Alert>
      </div>
    </div>
  );
}
