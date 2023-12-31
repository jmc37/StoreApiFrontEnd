import React from "react";
import "../../css/Home/store-item.css";
function StoreItem({ name, id, price, description, image, productDetail }) {
  function handleClick() {
    console.log("Passing id to add to cart", id);
    productDetail({ id });
  }
  return (
    <div className="store-item" id={id} onClick={() => handleClick(id)}>
      <img className="product-image" src={image} alt={name} />
      <h3 className="product-name">{name}</h3>
      <h3 className="product-price">${price}</h3>
      {/* Add more elements for additional item details if needed */}
    </div>
  );
}

export default StoreItem;
