import React, { useReducer } from "react";
import { cartReducer, initialState } from "./reducer";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
