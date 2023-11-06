import React from "react";

function OrderConfirmation({ onPrev }) {
  return (
    <div className="checkout-step">
      <h2>Step 4: Order Confirmation</h2>
      {/* Display order summary */}
      <button className="checkout-button" onClick={onPrev}>
        Previous
      </button>
      <button className="checkout-button">Confirm Order</button>
    </div>
  );
}

export default OrderConfirmation;
