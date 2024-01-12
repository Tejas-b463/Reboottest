import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { LiaSearchSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <nav className="nav-container">
      {/* left */}
      <div className="nav-header">
        <div className="nav-profile">
          <CgProfile />
        </div>
        <div className="nav-search">
          <LiaSearchSolid />
        </div>
        <input type="text" placeholder="search" />
      </div>

      {/* right */}
      <div className="nav-list">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Athletes</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
