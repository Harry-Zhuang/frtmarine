import React from "react";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import images from "../assets";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="logoIcoDiv">
        <NavLink to="/">
          <img className="logoIco" src={images.logo} alt="frtmarine" />
        </NavLink>
      </div>

      <div className="navBarItem">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/Product">
          Products
        </NavLink>
        <NavLink className="link" to="/AboutUs">
          About Us
        </NavLink>
        <img className="flagIco" src={images.flag} alt="flag" />
      </div>
    </nav>
  );
};

export default NavBar;
