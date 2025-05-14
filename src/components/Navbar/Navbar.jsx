import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }

      default: {
        setCurrency({ name: "usd", symbol: "$" });
      }
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul className="nav-ul">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
        <button>
          Sign up <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
