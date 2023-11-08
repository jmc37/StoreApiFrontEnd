import React from "react";
import Header from "../components/Navigation/Header";
import Banner from "../components/Home/Banner";
import HomeProductDisplay from "../components/Home/HomeProductDisplay";
import BrandCarousel from "../components/Home/BrandCarousel";
import Footer from "../components/Navigation/Footer";
function HomePage({ userAuthenticated, user }) {
  return (
    <div>
      <Header userAuthenticated={userAuthenticated} user={user} />
      <Banner />
      <HomeProductDisplay />
      <BrandCarousel />
      <Footer />
    </div>
  );
}
export default HomePage;
