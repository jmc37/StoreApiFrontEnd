import React, { useState, useEffect } from "react";
import ItemDisplayPurchase from "../Cart/StoreItemPurchase"
import axios from "axios";

function OrderReview({onNext}) {
  // localStorage.clear()
  const source = "https://store-api-flask-python-project.onrender.com/item/";
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Populate cart on page load
    getItems();
  }, []);

  async function getItems() {
    let cartItems = [];
    let items = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Items",items);
    for (let i = 0; i < items.length; i++) {
      console.log(source + items[i]["id"]);
      try {
        const response = await axios.get(source + items[i]["id"]);

        if (response.status === 200) {
          cartItems[i] = response.data;
          console.log("API Response:", response.data);
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    }

    // Update cart state after loop completes
    setCart(cartItems);
  }
  function getTotal(){
    let total = 0
    console.log(cart)
    for(let j = 0; j < cart.length; j++){
        total += cart[j]['price']
    }
    console.log(total)
    return total
  }
  return (
    <>
      <h1>Cart page</h1>
      <div>
        {cart.map(item => (
          <ItemDisplayPurchase id={item.id} image={item.image} name={item.name} price={item.price}/>
        ))}
        <div>Total: ${getTotal()}</div>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
}

export default OrderReview;
