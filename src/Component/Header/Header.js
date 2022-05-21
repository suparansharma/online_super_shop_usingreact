import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import "./Header.css"
import { UserContext } from './../../App';

const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  return <div className="header">
      <img src={logo} alt="" srcset="" />
      <nav>
          <Link to="/shop">Shop</Link>
          <Link to="/review">Order Review</Link>
          <Link to="/inventor">Manage Inventory</Link>
          <button onClick={()=>setLoggedInUser({})}>Sign out</button>
          </nav>
  </div>;
};

export default Header;
