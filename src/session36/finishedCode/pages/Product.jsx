import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../store/Cart/context";
import { useReducer } from "react";
import { cartReducer, initialState } from "../store/Cart/reducer";
import { addToCart } from "../store/Cart/actions";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    fetch(`https://api.cheapshark.com/api/1.0/deals?id=${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>{product.title}</h1>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </CartContext.Provider>
  );
}

export default Product;
