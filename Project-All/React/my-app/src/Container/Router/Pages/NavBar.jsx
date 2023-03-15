import React from "react";

import { Link, NavLink } from "react-router-dom";

function NavBar() {
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
}

export default NavBar;
