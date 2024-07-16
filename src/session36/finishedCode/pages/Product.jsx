import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

import { CartContext } from "../store/Cart/context";
import { addToCart } from "../store/Cart/actions";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://stephen-king-api.onrender.com/api/book/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1>{product.Title}</h1>
      <h4>
        <i>{product.Year}</i> - {product.Publisher}
      </h4>
      <h6>{product.Pages} pages</h6>
      <p>{product.ISBN}</p>
      <Button onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
    </Container>
  );
}

export default Product;
