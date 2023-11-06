import React from "react";
import "../../css/ItemDisplayPurchase.css";
function StoreItemPurchase({
  name,
  id,
  price,
  description,
  image,
  removeItem,
}) {
  function handleClick() {
    console.log("Passing id to add to cart", id);
    removeItem(id);
  }
  return (
    <div className="store-purchase-item" id={id}>
      <img className="product-image-purchase" src={image} alt={name} />
      <h3 className="product-name">{name}</h3>
      <h3 className="product-price">${price}</h3>
      <button className="red-x" onClick={() => handleClick(id)}>
        X
      </button>
      {/* Add more elements for additional item details if needed */}
    </div>
  );
}

export default StoreItemPurchase;
