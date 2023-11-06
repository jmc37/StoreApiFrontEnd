import React, { useState } from "react";
import countries from "./countries.json"; // Import the list of countries

function AddressConfirmation({ onNext, onPrev, formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here
    console.log(formData);
  };
  return (
    <div className="checkout-step">
      <h2>Step 2: Delivery Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select a country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        <br />
        <br />

        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="province">Province/Territory:</label>
        <input
          type="text"
          id="province"
          name="province"
          value={formData.province}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="postalCode">Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
        <br />
        <br />
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

export default AddressConfirmation;
