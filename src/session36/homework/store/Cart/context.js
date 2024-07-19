import { createContext, useReducer } from "react";
import { cartReducer, initialCartState } from "./reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider
      value={{
        cartState: state,
        cartDispatch: dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
