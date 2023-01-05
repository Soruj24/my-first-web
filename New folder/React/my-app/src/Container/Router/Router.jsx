import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import NavBar from "./Pages/NavBar";
import User from "./Pages/User";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:title" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/user/:userid" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
