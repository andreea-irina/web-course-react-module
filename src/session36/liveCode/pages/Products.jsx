import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import styles from "./Home.module.css";

function Products() {
  const [products, setProducts] = React.useState([]);

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
            <h4>{product.Title}</h4>
            <h6>
              <i>{product.Year}</i>
            </h6>
            <Button>Add to Cart</Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
