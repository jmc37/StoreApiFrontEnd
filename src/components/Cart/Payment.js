import React, { useState } from "react";
import "../../css/checkout.css";

function Payment({ formData, setFormData, onNext, onPrev }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate payment details (e.g., check if all fields are filled)
    // This step is important for security.

    // You can now access payment details in formData and send it to your backend for processing.
  };

  return (
    <div className="checkout-step">
      <h2>Step 3: Payment</h2>
      <form>
        <div>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Expiry Date:
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Name on Card:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="checkout-button" onClick={onPrev}>
            Previous
          </button>
          <button className="checkout-button-next" onClick={onNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
