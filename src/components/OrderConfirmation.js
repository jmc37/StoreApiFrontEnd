import React from 'react';

function OrderConfirmation({ onPrev }) {
  return (
    <div className="checkout-step">
      <h2>Step 4: Order Confirmation</h2>
      {/* Display order summary */}
      <button onClick={onPrev}>Previous</button>
      <button>Confirm Order</button>
    </div>
  );
}

export default OrderConfirmation;
