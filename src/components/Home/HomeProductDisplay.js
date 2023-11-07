import React, { useState, useEffect } from "react";
import axios from "axios";
import StoreItem from "./StoreItem";
import "../../css/Home/home-product-display.css";
import { useNavigate } from "react-router-dom";


function HomeProductDisplay() {
  const navigate = useNavigate();
  const source = "https://store-api-flask-python-project.onrender.com/item";
  const [items, setItems] = useState([]);

  const productDetail = (itemId) => {
    console.log(itemId.id)
    navigate(`/product/${itemId.id}`);
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
  });

  return (
      <div className="page-container">
        <div className="store-grid">
          {items.map((item) => (
            <StoreItem
              key={item.id} // Add a unique key to the StoreItem component
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              productDetail={productDetail}
            />
          ))}
        </div>
      </div>
  );
}

export default HomeProductDisplay;