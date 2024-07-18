import React, { useContext } from "react";
import { CartContext } from "../store/Cart/context";

function Cart() {
  const { cartState } = useContext(CartContext);
  return (
    <div>
      <h1>Cart {`(${cartState.cart.length})`}</h1>

      {cartState.cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <ul>
          {cartState.cart.map((book) => {
            return <li key={book.id}>{book.Title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Cart;
