import React from "react";
import "../../css/Navigation/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h4>Get to Know Us</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
        </ul>
      </div>
      <div className="footer-contact">
        <h4>Connect with Us</h4>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-sales">
        <h4>Make Money with Us</h4>
        <ul>
          <li>Sell on Shop Now</li>
          <li>Become a Partner</li>
          <li>Invest in the company</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
