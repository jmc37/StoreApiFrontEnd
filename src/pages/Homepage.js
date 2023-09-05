import React from "react";
import Header from "../components/Header";
import ProductDisplay from "../components/ProductDisplay";
function HomePage({ userAuthenticated, user }) {
  return (
    <div>
      <Header userAuthenticated={userAuthenticated} user={user} />
      <ProductDisplay />
    </div>
  );
}
export default HomePage;
