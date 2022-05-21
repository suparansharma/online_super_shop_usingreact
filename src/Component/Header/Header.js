import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
  return <div className="header">
      <img src={logo} alt="" srcset="" />
      <nav>
          <Link to="/shop">Shop</Link>
          <Link to="/review">Order Review</Link>
          <Link to="/inventor">Manage Inventory</Link>
          <button>Sign out</button>
          </nav>
  </div>;
};

export default Header;
