import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

import { CartContext } from "../store/Cart/context";
import { addToCart } from "../store/Cart/actions";
import styles from "./Home.module.css";

function Products() {
  const [products, setProducts] = React.useState([]);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    fetch("https://stephen-king-api.onrender.com/api/books")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <Container>
      <h1>
        <b>Products</b>
      </h1>

      <br />

      <Row className={styles.row}>
        {products.map((product) => (
          <Col className={styles.column} key={product.id}>
            <h4>
              <Link to={`/products/${product.id}`}>{product.Title}</Link>
            </h4>
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
  );
}
export default Products;
