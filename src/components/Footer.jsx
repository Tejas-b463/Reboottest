import React from "react";
import "./Footer.css";
import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import Insta from "../img/insta.png";
import Footer_Logo from "../img/footerlogo.png";

const Footer = () => {
  return (
    <footer>
        {/* first */}
      <div className="footer1">
        <div className="footer1-sub">
          <img src={Facebook} alt="" />
          <span>Redbull.Nh</span>
        </div>
        <div className="footer1-sub">
          <img src={Twitter} alt="" />
          <span>Redbull.Ssw</span>
        </div>
        <div className="footer1-sub">
          <img style={{backgroundColor:"#DF424C"}} src={Insta} alt="" />
          <span>Redbull.Photo</span>
        </div>
      </div>
      {/* second */}
      <div className="footer-image">
         <img src={Footer_Logo} alt="" />
      </div>

      {/* third */}
      <div className="footer-link">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Athlets</a></li>
      </ul>
      </div>

    </footer>
  );
};

export default Footer;
