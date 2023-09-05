import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false); // Initialize as false for unauthenticated
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage userAuthenticated={userAuthenticated} user={user} />
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <SignUp
              userAuthenticated={userAuthenticated}
              setUserAuthenticated={setUserAuthenticated}
              handleSetUser={setUser}
              user={user}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={<Cart userAuthenticated={userAuthenticated} user={user} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
