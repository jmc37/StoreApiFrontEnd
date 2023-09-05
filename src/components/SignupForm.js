import React, { useState } from "react";
import "../css/SignUpForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  async function handleFormSubmission(e) {
    e.preventDefault();
    try {
      // Create a data object with the form values
      const data = {
        username: userName,
        password: userPassword,
      };
      // Send a POST request to the API endpoint with the form data
      const response = await axios.post(
        "https://store-api-flask-python-project.onrender.com/register",
        data
      );

      // Handle the response (e.g., show success message, redirect, etc.)
      console.log("API Response:", response.data);
      console.log(response.status);
      console.log(response);
      // Check if the response indicates success (you might need to adjust this condition based on your API's response structure)
      if (response.status === 201) {
        // Redirect to the home page
        navigate("/");
      }
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error("API Error:", error);
    }
  }

  return (
    <form className="signup-form" onSubmit={handleFormSubmission}>
      <h1>Signup today in a few steps</h1>
      <label>✍Name</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label>✉Email</label>
      <input
        type="text"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <label>🔑Password</label>
      <input
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button>🤘Sign Up</button>
    </form>
  );
}

export default SignUpForm;
