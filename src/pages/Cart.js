import React, { useEffect } from "react";
import Header from "../components/Navigation/Header";

import CheckOutForm from "../components/Cart/CheckOutForm";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  useEffect(() => {
    const isTokenValid = true; // Replace this with your actual token validation logic

    if (!isTokenValid) {
      // Redirect to the login page if the token is invalid
      navigate("/signup");
    }
  });
  return (
    <>
      <Header />
      <CheckOutForm />
    </>
  );
}

export default Cart;
