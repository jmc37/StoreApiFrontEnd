import React, { useState } from "react";
import OrderReview from "./OrderReview.jsx";
import AddressConfirmation from "./AddressConfirmation.jsx";
import Payment from "./Payment.jsx";
import OrderConfirmation from "./OrderConfirmation.jsx";
import OrderComplete from "./OrderComplete.jsx";
import "../../css/Cart/checkout.css";

function CheckoutForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize with default values or empty strings
    country: "",
    fullName: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    cardNumber: "",
    expiryDatae: "",
    cvv: "",
    name: "",
  });
  const handleNext = () => {
    console.log(formData);
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="checkout-form">
      {step === 1 && <OrderReview onNext={handleNext} />}
      {step === 2 && (
        <AddressConfirmation
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 3 && (
        <Payment
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 4 && (
        <OrderConfirmation onPrev={handlePrev} onNext={handleNext} />
      )}
      {step === 5 && <OrderComplete />}
    </div>
  );
}

export default CheckoutForm;
