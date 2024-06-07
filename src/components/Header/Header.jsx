import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-contents">
        <h2>Order your favorites and eat delicious food here.</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div className="button-container">
          <a href="#explore-menu">
            <button className="left-button">View Menu</button>
          </a>
          <a href="https://wa.me/c/917505637134">
            <button className="right-button">Order Here</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
