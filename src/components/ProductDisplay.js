import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StoreItem from "./StoreItem";
import "../css/ProductDisplay.css"
function ProductDisplay() {
  const source = "https://store-api-flask-python-project.onrender.com/item"
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(() => {
    // Get the count from local storage or default to 0 if it doesn't exist
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const addToCart = (item) => {
    console.log(cart)
    setCart(cart => [...cart, item]);
  };

  useEffect(() => {
    // Update local storage whenever cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  async function getItems(e) {
    console.log("called");

    e.preventDefault();
    try {
      const response = await axios.get(
        source
      );

      // Check if the response indicates success (you might need to adjust this condition based on your API's response structure)
      if (response.status === 200) {
        console.log("API Response:", response.data);
        setItems(response.data); // Store the items in the component's state
      }
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error("API Error:", error);
    }
  }
  return (
    <div>
      <h1>Items</h1>
      <button onClick={getItems}>Get Items</button>
      {/* Render the items */}
      <div className="page-container">
      <div className="store-grid">
        {items.map((item) => (
          <StoreItem id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} addToCart={addToCart}/>
        ))}
      </div>
      </div>
    </div>
  );
}
export default ProductDisplay;
