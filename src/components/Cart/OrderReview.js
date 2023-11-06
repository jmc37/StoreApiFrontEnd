import React, { useState, useEffect } from "react";
import ItemDisplayPurchase from "../Cart/StoreItemPurchase";
import axios from "axios";

function OrderReview({ onNext }) {
  // localStorage.clear();
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
  function removeItem(id) {
    let items = JSON.parse(localStorage.getItem("cart"));
    let indexToRemove = items.findIndex((item) => item.id === id);
    console.log(indexToRemove);

    // Remove the object at the found index
    if (indexToRemove !== -1) {
      items.splice(indexToRemove, 1);
    }
    localStorage.setItem("cart", JSON.stringify(items));
    getItems();
  }
  return (
    <>
      <div>
        <div className="checkout-container">
          <h1>Cart page</h1>
          {cart.map((item) => (
            <ItemDisplayPurchase
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              removeItem={removeItem}
            />
          ))}
          <div className="total">Total: ${getTotal()}</div>
          <button className="next-button" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderReview;
