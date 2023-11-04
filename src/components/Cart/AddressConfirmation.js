import React from 'react';
import "../../css/checkout.css"
function AddressConfirmation({ onNext, onPrev }) {
  return (
    <div className="checkout-step">
    <h2>Step 2: Delivery Information</h2>
    <div className="form-group">
      <label htmlFor="address">Delivery Address</label>
      <input type="text" id="address" name="address" required />
    </div>
    <div className="form-group">
      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" required />
    </div>
    <div className="form-group">
      <label htmlFor="postalCode">Postal Code</label>
      <input type="text" id="postalCode" name="postalCode" required />
    </div>
    <button onClick={onPrev}>Previous</button>
    <button onClick={onNext}>Next</button>
  </div>
  );
}

export default AddressConfirmation;
