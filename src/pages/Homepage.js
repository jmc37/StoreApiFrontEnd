import React from "react";
import Header from "../components/Navigation/Header";
import HomeProductDisplay from "../components/Home/HomeProductDisplay";
import Footer from "../components/Navigation/Footer";
function HomePage({ userAuthenticated, user }) {
  return (
    <div>
      <Header userAuthenticated={userAuthenticated} user={user} />
      <HomeProductDisplay />
      <Footer />
    </div>
  );
}
export default HomePage;
