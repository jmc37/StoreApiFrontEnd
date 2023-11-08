import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Adjust this to change the rotation speed (in milliseconds)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} className="full-width-slider">
        <div>
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/Carousel+/748.jpg"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/Carousel+/787.jpg"
            alt="Image 2"
          />
        </div>
        <div>
          <img
            src="https://shop-now-jmc.s3.us-west-2.amazonaws.com/Carousel+/m4.jpg"
            alt="Image 3"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
