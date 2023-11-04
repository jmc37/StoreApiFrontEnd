import React from "react";
import Header from "../components/Header";
import ProductDisplay from "../components/ProductDisplay";
import Footer from "../components/Footer"
function HomePage({ userAuthenticated, user }) {
  return (
    <div>
      <Header userAuthenticated={userAuthenticated} user={user} />
      <ProductDisplay />
      <Footer />
    </div>
  );
}
export default HomePage;
