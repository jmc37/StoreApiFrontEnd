import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
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
  //Get subtotal of items
  function getTotal() {
    let total = 0;
    for (let j = 0; j < cart.length; j++) {
      total += cart[j]["price"] * cart[j]["quantity"];
    }
    total = (Math.round(total * 100) / 100).toFixed(2);

    return total;
  }

  function subtractQuantity(id) {
    let items = JSON.parse(localStorage.getItem("cart"));
    items[id] -= 1;
    if (items[id] === 0) {
      removeItem(id);
      return;
    }
    localStorage.setItem("cart", JSON.stringify(items));
    getItems();
  }

  function addQuantity(id) {
    let items = JSON.parse(localStorage.getItem("cart"));
    items[id] += 1;
    localStorage.setItem("cart", JSON.stringify(items));
    getItems();
  }

  //Remove an item from the cart
  function removeItem(id) {
    let items = JSON.parse(localStorage.getItem("cart"));
    delete items[id]; // Remove the item with the specified ID
    localStorage.setItem("cart", JSON.stringify(items));
    getItems();
  }
  return (
    <>
      <div>
        <div className="item-review-container">
          <h1>Cart page</h1>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              removeItem={removeItem}
              subtractQuantity={subtractQuantity}
              addQuantity={addQuantity}
            />
          ))}
          <div className="total">Total: ${getTotal()}</div>
          <button className="checkout-button-next" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderReview;
