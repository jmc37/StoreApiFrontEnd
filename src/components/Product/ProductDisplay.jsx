import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/Product/productDisplay.css";
import axios from "axios";

function ProductDisplay() {
  let { itemId } = useParams();
  const source = "https://store-api-flask-python-project.onrender.com/item/";
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });
  const [item, setItem] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false); // New state for confirmation message
  const navigate = useNavigate(); // Initialize useNavigate

  const getItem = useCallback(async () => {
    try {
      const response = await axios.get(source + itemId);
      setItem(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  }, [itemId]);

  useEffect(() => {
    getItem();
  }, [getItem]);

  const addToCart = (item) => {
    const updatedCart = {
      ...cart,
      [item]: (cart[item] || 0) + 1,
    };
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setAddedToCart(true); // Set the addedToCart state to true
  };

  const goToCart = () => {
    navigate("/cart"); // Use navigate to go to the cart page
  };

  if (item === null) {
    return null; // Render nothing if item is still null
  }

  return (
    <>
      {!addedToCart && (
        <div className="product-container">
          <div className="grid-container">
            <h2 className="title">Product Details</h2>
            <img className="item-image" src={item.image} alt={item.name} />
            <h1 className="item-name">{item.name}</h1>
            <h1 className="item-price">${item.price}</h1>
            <p className="item-description">{item.description}</p>
            <button className="add-button" onClick={() => addToCart(itemId)}>
              Add To Cart
            </button>
          </div>
        </div>
      )}
      {addedToCart && (
        <div className="purchase-confirmed">
          <h1>Added {item.name} to cart</h1>
          <img className="item-image" src={item.image} alt={item.name} />
          <button className="goToCart-button" onClick={goToCart}>
            Go to cart
          </button>
        </div>
      )}
    </>
  );
}

export default ProductDisplay;
