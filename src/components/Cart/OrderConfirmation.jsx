import React, { useState, useEffect } from "react";
import ItemDisplayPurchase from "./CartItem";
import axios from "axios";

function OrderConfirmation({ onPrev, onNext }) {
  const source = "https://store-api-flask-python-project.onrender.com/item/";
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // Populate cart on page load
    getItems();
  }, []);

  async function getItems() {
    let cartItems = [];
    let items = JSON.parse(localStorage.getItem("cart")) || {};
    for (let key in items) {
      try {
        const response = await axios.get(source + key);

        if (response.status === 200) {
          const quantity = items[key];
          const itemWithQuantity = { ...response.data, quantity };
          cartItems.push(itemWithQuantity);
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
      total += cart[j]["price"] * cart[j]["quantity"];
    }
    total = (Math.round(total * 100) / 100).toFixed(2);

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
          quantity={item.quantity}
        />
      ))}
      <div className="total">Total: ${getTotal()}</div>
      <button className="prev-button" onClick={onPrev}>
        Previous
      </button>
      <button className="checkout-button confirm-button" onClick={onNext}>
        Confirm Order
      </button>
    </div>
  );
}

export default OrderConfirmation;
