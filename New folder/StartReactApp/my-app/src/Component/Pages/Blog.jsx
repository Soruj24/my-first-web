import React, { useState, useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";
import { blogsData } from "./data";

const Blog = () => {
    const { title } = useParams();
    const location =  useLocation()
    
  // const [bodyData, setBodyData] = useState("");

  // useEffect(() => {
  //   const blogData = blogsData.filter(blog => blog.title === title);
  //   setBodyData(blogData[0].body);
  // }, []);

  return (
    <div>
      <h1>{title} Page </h1>
      <p>{location.state.slice(0, 500)}</p>
      <p>{location.state.slice(501, 800)}</p>
    </div>
  );
};

export default Blog;
