import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Home/home-product-display.css";

const BrandCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className="brand-carousel-container">
      <h1 className="prouducts-title">Shop By Brand</h1>
      <Slider {...settings}>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/144.jpg"
            alt="Brand 1"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/145.jpg"
            alt="Brand 2"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/147.jpg"
            alt="Brand 3"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/152.jpg"
            alt="Brand 4"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/154.jpg"
            alt="Brand 5"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/159.jpg"
            alt="Brand 6"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/160.jpg"
            alt="Brand 7"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/162.jpg"
            alt="Brand 8"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/165.jpg"
            alt="Brand 9"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/178.jpg"
            alt="Brand 10"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/180.jpg"
            alt="Brand 11"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/205.jpg"
            alt="Brand 12"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/301.jpg"
            alt="Brand 13"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/419.jpg"
            alt="Brand 14"
          />
        </div>
        <div className="brand-slide">
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/BrandCarousel/1323.jpg"
            alt="Brand 15"
          />
        </div>
      </Slider>
    </div>
  );
};

export default BrandCarousel;
