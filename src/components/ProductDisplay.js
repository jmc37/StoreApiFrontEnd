import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import StoreItem from "./StoreItem";
import "../css/ProductDisplay.css"
function ProductDisplay() {
  const [items, setItems] = useState([]);

  async function getItems(e) {
    console.log("called");

    e.preventDefault();
    try {
      const response = await axios.get(
        "https://store-api-flask-python-project.onrender.com/item"
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
          <StoreItem key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
      </div>
    </div>
  );
}
export default ProductDisplay;
