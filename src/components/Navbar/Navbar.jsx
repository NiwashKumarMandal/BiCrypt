import React from "react";
import "./Navbar.css";
import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow_icon.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="nav-ul">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
        <button>
          Sign up <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
