import React from "react";
function CartItem({ name, id, price, description, image, removeItem }) {
  function handleClick() {
    console.log("Passing id to add to cart", id);
    removeItem(id);
  }
  return (
    <div className="cart-item" id={id}>
      <img className="item-image" src={image} alt={name} />
      <h3 className="item-name">{name}</h3>
      <h3 className="item-price">${price}</h3>
      {removeItem && ( // Check if removeItem function exists
        <button className="remove-button" onClick={() => handleClick(id)}>
          X
        </button>
      )}
      {/* Add more elements for additional item details if needed */}
    </div>
  );
}

export default CartItem;
