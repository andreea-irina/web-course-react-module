import React, { useReducer, createContext } from "react";
import { initialDashboardState, dashboardReducer } from "./reducer";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialDashboardState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};
