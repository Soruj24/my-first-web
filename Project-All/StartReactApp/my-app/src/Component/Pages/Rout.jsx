import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./Blogs";
import Blog from "./Blog";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";
import NavLinks from "./NavLinks";

const Rout = () => {
  return (
    <BrowserRouter>
      <NavLinks />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="/*" element={<Error/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
