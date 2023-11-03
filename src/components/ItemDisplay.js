import React from "react";
import "../css/ItemDisplay.css";

function ItemDisplay({ id, name, price }) {
  return (
    <div className="item-display" id={id}>
      <div className="item-name">{name}</div>
      <div className="item-price">${price}</div>
    </div>
  );
}

export default ItemDisplay;
