import React, { useContext, useEffect, useReducer } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { CartContext } from "../store/Cart/context";
import { cartReducer, initialState } from "../store/Cart/reducer";
import { addToCart } from "../store/Cart/actions";
import styles from "./Home.module.css";
import { ThemeContext } from "../store/Theme/context";
import { changeTheme } from "../store/Theme/actions";

function Home() {
  const [products, setProducts] = React.useState([]);
  const { state: themeState, dispatch: themeDispatch } =
    useContext(ThemeContext);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    fetch("https://stephen-king-api.onrender.com/api/books")
      .then((response) => response.json())
      .then((data) => setProducts(data.data.slice(0, 4)));
  }, []);

  const handleThemeChange = () => {
    let newTheme = "";
    if (themeState.theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "light";
    }

    themeDispatch(changeTheme(newTheme));
  };

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <Container>
        <div className={styles.pageTitle}>
          <h1>
            <b>Home</b>
          </h1>

          <Button
            onClick={handleThemeChange}
            variant={themeState.theme === "light" ? "dark" : "light"}
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
