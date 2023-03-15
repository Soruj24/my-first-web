import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-Link">Home</NavLink>
        <NavLink to="/Contact" className="nav-Link">Contact</NavLink>
        <NavLink to="/Layout" className="nav-Link">Layout</NavLink>
        <NavLink to="/Blogs" className="nav-Link">Blogs</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
