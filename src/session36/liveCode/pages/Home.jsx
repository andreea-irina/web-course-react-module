import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import styles from "./Home.module.css";
import { changeTheme } from "../store/Theme/actions";
import { ThemeContext } from "../store/Theme/context";
import { CartContext } from "../store/Cart/context";
import { addToCartAction } from "../store/Cart/actions";

function Home() {
  const { state, dispatch } = useContext(ThemeContext);
  const { cartDispatch } = useContext(CartContext);
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch("https://stephen-king-api.onrender.com/api/books")
      .then((response) => response.json())
      .then((data) => setProducts(data.data.slice(0, 4)));
  }, []);

  const handleThemeChange = () => {
    let newTheme = "";
    if (state.theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "light";
    }

    dispatch(changeTheme(newTheme));
  };

  const handleAddToCart = (book) => {
    cartDispatch(addToCartAction(book));
  };

  return (
    <Container>
      <div className={styles.pageTitle}>
        <h1>
          <b>Home</b>
        </h1>

        <Button
          onClick={handleThemeChange}
          variant={state.theme === "light" ? "dark" : "light"}
        >
          Change theme
        </Button>
      </div>

      <br />

      <Row className={styles.row}>
        {products.map((product) => (
          <Col className={styles.column} key={product.id}>
            <h4>{product.Title}</h4>
            <h6>
              <i>{product.Year}</i>
            </h6>
            <Button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
