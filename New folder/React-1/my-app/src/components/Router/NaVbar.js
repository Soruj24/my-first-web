import React from "react";
import { Link, NavLink } from "react-router-dom";
const NaVbar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/Blogs" className="nav-link">
        Blogs
      </NavLink>
      <NavLink to="/Contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/Layout" className="nav-link">
        Layout
      </NavLink>
    </nav>
  );
};

export default NaVbar;
