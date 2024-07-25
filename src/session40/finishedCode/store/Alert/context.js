import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const addAlert = (message, variant = "success") => {
    setAlert({ message, variant });
    setTimeout(() => {
      setAlert(null);
    }, 5000); // Sterge alerta dupa 5 secunde
  };

  return (
    <AlertContext.Provider value={{ alert, addAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
