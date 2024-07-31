import { useContext, useState } from "react";
import { Alert } from "react-bootstrap";

import { ThemeContext } from "../store/Theme/context";
import { AlertContext } from "../store/Alert/context";

import Header from "./Header";
import DashboardDrawer from "./DashboardDrawer";

export default function Layout({ children }) {
  const { state } = useContext(ThemeContext);
  const { alert } = useContext(AlertContext);

  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className={`bg-${state.theme} d-flex flex-column min-vh-100`}>
      <Header onOpenDashboard={() => setShowDrawer(true)} />

      {children}

      <DashboardDrawer show={showDrawer} onClose={() => setShowDrawer(false)} />

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
