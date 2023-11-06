import React from "react";
import "../../css/Navigation/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <h4>Make Money with Us</h4>
        <ul>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Become an Affiliate</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
