import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDisplay = () => {
  //   localStorage.clear();
  let { itemId } = useParams();
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });
  const addToCart = (item) => {
    const updatedCart = {
      ...cart,
      [item]: (cart[item] || 0) + 1,
    };
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h2>Product Details</h2>
      <p>Item ID: {itemId}</p>
      <button onClick={() => addToCart(itemId)}>Add To Cart</button>
    </div>
  );
};
export default ProductDisplay;
