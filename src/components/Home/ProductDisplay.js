import React, { useState, useEffect } from "react";
import axios from "axios";
import StoreItem from "./StoreItem";
import "../../css/Home/HomeProductDisplay.css";

function ProductDisplay() {
  const source = "https://store-api-flask-python-project.onrender.com/item";
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const addToCart = (item) => {
    setCart((cart) => [...cart, item]);
  };

  useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get(source);

        if (response.status === 200) {
          setItems(response.data);
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    }

    getItems(); // Call getItems when the component mounts

    // Update local storage whenever cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <div className="page-container">
        <div className="store-grid">
          {items.map((item) => (
            <StoreItem
              key={item.id} // Add a unique key to the StoreItem component
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
