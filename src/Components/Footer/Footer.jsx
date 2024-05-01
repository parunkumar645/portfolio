import React from "react";
import "./Footer.css";
import logo from "../../img/logo.svg";

import user_icon from "../../img/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="logo" className="foot-img" />
          <p>
            "Discover my portfolio as a Full Stack Developer to explore my
            latest projects and achievements. Let's collaborate and create
            something extraordinary together!"
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user_icon " />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 AK Tech. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
