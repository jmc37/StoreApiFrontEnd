import React, { useState } from 'react';
import OrderReview from './OrderReview';
import AddressConfirmation from './AddressConfirmation';
import Payment from './Payment';
import OrderConfirmation from './OrderConfirmation.js';

function CheckoutForm() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  }

  const handlePrev = () => {
    setStep(step - 1);
  }

  return (
    <div className="checkout-form">
      {step === 1 && <OrderReview onNext={handleNext} />}
      {step === 2 && <AddressConfirmation onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && <Payment onNext={handleNext} onPrev={handlePrev} />}
      {step === 4 && <OrderConfirmation onPrev={handlePrev} />}
    </div>
  );
}

export default CheckoutForm;
