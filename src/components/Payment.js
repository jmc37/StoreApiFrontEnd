import React from 'react';

function Payment({ onNext, onPrev }) {
  return (
    <div className="checkout-step">
      <h2>Step 3: Payment</h2>
      {/* Display payment fields */}
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default Payment;
