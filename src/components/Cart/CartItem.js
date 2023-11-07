import React from "react";
function CartItem({ name, id, price, image, removeItem, quantity, subtractQuantity, addQuantity }) {

  return (
    <div className="cart-item" id={id}>
      <img className="item-image" src={image} alt={name} />
      <h3 className="item-name">{name}</h3>
      <h3 className="item-price">${price}</h3>
      <div className="item-quantity">
      {subtractQuantity && (<button className="quantity-button" onClick={() => subtractQuantity(id)}>-</button>)}
        <h3>{quantity}</h3>  
        {subtractQuantity && (<button className="quantity-button" onClick={() => addQuantity(id)}>+</button>)}
      </div>
      {removeItem && ( // Check if removeItem function exists
        <button className="remove-button" onClick={() => removeItem(id)}>
          X
        </button>
      )}
      {/* Add more elements for additional item details if needed */}
    </div>
  );
}

export default CartItem;
