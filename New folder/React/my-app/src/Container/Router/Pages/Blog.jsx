import React, { useState, useEffect } from "react";
import { blogsData } from "./Data";
import { useParams, useLocation } from "react-router-dom";

function Blog() {
    const { title } = useParams();
    const Location = useLocation();
//     console.log(Location);
//   const [bodyData, setBodyData] = useState("");

//   useEffect(() => {
//     const blogData = blogsData.filter(blog => blog.title === title);
//     setBodyData(blogData[0].body);
//   }, []);

  return (
    <div>
      <h1>{title} Page</h1>
      <p>{Location.state.body.slice(0, 500)}</p>
    <p>{Location.state.body.slice(501, 900)}</p>
    </div>
  );
}

export default Blog;
