import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} className="logo" alt="logo" />
          <p>
            Welcome to The Horizon, where culinary excellence meets serene
            ambiance. Indulge in our diverse menu offerings crafted to elevate
            your dining experience amidst a panoramic view.
          </p>
        </div>
      </div>
      <hr />
      <h1> Phone Number-94xxxxxxxxx</h1>
      <p className="footer-copyright">Copyright 2024 © The Horizon.com</p>
    </footer>
  );
};

export default Footer;
