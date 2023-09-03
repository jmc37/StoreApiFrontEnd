import React from "react";
import Header from "../components/Header";
import "../css/SignUpForm.css";
function SignUp() {
  return (
    <>
      <Header />;
      <SignUpForm />
    </>
  );
}

export default SignUp;

function SignUpForm() {
  return (
    <form className="signup-form">
      <h1>Signup today in a few steps</h1>
      <label>Name</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="text"></input>
      <label>Password</label>
      <input type=""></input>
      <button>Sign Up</button>
    </form>
  );
}
