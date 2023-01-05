import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-list">
          Home
        </NavLink>
        <NavLink to="/Blogs" className="nav-list">
          Blogs
        </NavLink>
        <NavLink to="/Contact" className="nav-list">
          Contact
        </NavLink>
        <NavLink to="/Layout" className="nav-list">
          Layout
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
