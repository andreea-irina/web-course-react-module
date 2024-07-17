import React, { useContext } from "react";
import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";

import { CartContext } from "../store/Cart/context";
import { removeFromCart } from "../store/Cart/actions";

import styles from "./Cart.module.css";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container>
      <h1>Cart {`(${state.cart.length || 0})`}</h1>

      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ListGroup>
            {state.cart.map((item) => (
              <ListGroupItem key={item.id} className={styles.cartItem}>
                <p>{item.Title}</p>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      )}
    </Container>
  );
}

export default Cart;
