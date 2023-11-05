import React from "react";
import "../../css/ItemDisplayPurchase.css";
function StoreItemPurchase({ name, id, price, description, image, addToCart }) {
  function handleClick() {
    console.log("Passing id to add to cart", id)
    addToCart({ id });
  }
  return (
    <div className="store-purchase-item" id={id} onClick={() => handleClick(id)}>
      <img className="product-image-purchase" src={image} alt={name} />
      <h3 className="product-name">{name}</h3>
      <h3 className="product-price">${price}</h3>
      {/* Add more elements for additional item details if needed */}
    </div>
  );
}

export default StoreItemPurchase;
