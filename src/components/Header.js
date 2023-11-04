import React from "react";
import "../css/header.css";
function Header() {
  // localStorage.clear()
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <nav className="amazon-navbar">
      {/* Amazon Logo */}
      <a href="/">
        <img
          href="/"
          className="amazon-logo"
          src="https://via.placeholder.com/150x40"
          alt="Amazon Logo"
        />
      </a>
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#">Today's Deals</a>
        <a href="#">Customer Service</a>
        <a href="#">Gift Cards</a>
        <a href="/sell">Sell</a>
      </div>

      {/* Account Options */}

      <div className="account-options">
        <div className="account">
        {user ? (
      <span>Hello, {user}</span>
    ) : (
      <a href="/signup">Sign In</a>
    )}
        </div>
        <div className="orders">
          <a href="#">Orders</a>
        </div>
        <div className="cart">
          <a href="/cart">Cart</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
