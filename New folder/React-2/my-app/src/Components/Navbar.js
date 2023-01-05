import React from "react";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-list">
        Home
      </NavLink>
      <NavLink to="/Contact" className="nav-list">
        Contact
      </NavLink>
      <NavLink to="/About" className="nav-list">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
