import React from "react";
import "../css/store-item.css";
function StoreItem({ name, id, price }) {
  return (
    <div className="store-item" id={id}>
      <h3>{name}</h3>
      <h3>{price}</h3>
      {/* Add more elements for additional item details if needed */}
    </div>
  );
}

export default StoreItem;
