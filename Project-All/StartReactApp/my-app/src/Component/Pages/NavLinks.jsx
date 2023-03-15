import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav>
      <NavLink to="/home" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/blogs" className="nav-link">
        Blogs
      </NavLink>
    </nav>
  );
};

export default NavLinks;
