import React from "react";
import Header from "../components/Navigation/Header";
import ProductDisplay from "../components/MainPage/ProductDisplay";
import Footer from "../components/Navigation/Footer"
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
