import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ProductDisplay() {
  async function getItems(e) {
    // e.preventDefault();
    // try {
    //   const response = await axios.get(
    //     "https://store-api-flask-python-project.onrender.com/login",
    //     data
    //   );

    //   // Handle the response (e.g., show success message, redirect, etc.)
    //   console.log("API Response:", response.data);

    //   // Check if the response indicates success (you might need to adjust this condition based on your API's response structure)
    //   if (response.status === 200) {
        

    //     // // Redirect to the home page
    //     // navigate("/");
    //   }
    // } catch (error) {
    //   // Handle errors (e.g., show error message)
    //   console.error("API Error:", error);
    // }
  }
  return (
    <div>
    <h1>Items</h1>
    <button onClick={getItems}>Get Items</button>
    </div>
  );
}
export default ProductDisplay;
