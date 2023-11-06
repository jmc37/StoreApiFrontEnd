import React, { useState, useEffect } from "react";
import ItemDisplayPurchase from "./CartItem";
import axios from "axios";

function OrderConfirmation({ onPrev }) {
  const source = "https://store-api-flask-python-project.onrender.com/item/";
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Populate cart on page load
    getItems();
  }, []);
  async function getItems() {
    let cartItems = [];
    let items = JSON.parse(localStorage.getItem("cart")) || [];
    for (let i = 0; i < items.length; i++) {
      try {
        const response = await axios.get(source + items[i]["id"]);

        if (response.status === 200) {
          cartItems[i] = response.data;
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    }

    // Update cart state after loop completes
    setCart(cartItems);
  }
  function getTotal() {
    let total = 0;
    for (let j = 0; j < cart.length; j++) {
      total += cart[j]["price"];
    }
    return total;
  }
  return (
    <div className="checkout-step">
      <h2>Step 4: Order Confirmation</h2>
      {cart.map((item) => (
        <ItemDisplayPurchase
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
      <div className="total">Total: ${getTotal()}</div>
      <button className="prev-button" onClick={onPrev}>
        Previous
      </button>
      <button className="checkout-button confirm-button">Confirm Order</button>
    </div>
  );
}

export default OrderConfirmation;
