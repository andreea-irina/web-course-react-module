import React, { useEffect, useReducer } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { CartContext } from "../store/Cart/context";
import { cartReducer, initialState } from "../store/Cart/reducer";
import { addToCart } from "../store/Cart/actions";
import styles from "./Home.module.css";

function Home() {
  const [products, setProducts] = React.useState([]);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    fetch("https://stephen-king-api.onrender.com/api/books")
      .then((response) => response.json())
      .then((data) => setProducts(data.data.slice(0, 4)));
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <Container>
        <h1>
          <b>Home</b>
        </h1>

        <br />

        <Row className={styles.row}>
          {products.map((product) => (
            <Col className={styles.column} key={product.id}>
              <h4>{product.Title}</h4>
              <h6>
                <i>{product.Year}</i>
              </h6>
              <Button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </CartContext.Provider>
  );
}

export default Home;
