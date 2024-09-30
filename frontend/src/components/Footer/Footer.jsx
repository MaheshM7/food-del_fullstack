import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            lorem Ipsum is simply dummy test of the printing and typesetting
            induxtry.Lorem Ipsum has been the industry's standart dummy text
            evenr since the 12500s, when an unknown printer took agalley of type
            and scrambed it to make a type specimen book.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Deliverey</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-98905-70545</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">Copyright 2024 c Tomato.com - All RIght Reserved</p>
    </div>
  );
};

export default Footer;
