import React, { useState } from "react";
import OrderReview from "./OrderReview";
import AddressConfirmation from "./AddressConfirmation";
import Payment from "./Payment";
import OrderConfirmation from "./OrderConfirmation.js";
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
      {step === 4 && <OrderConfirmation onPrev={handlePrev} />}
    </div>
  );
}

export default CheckoutForm;
