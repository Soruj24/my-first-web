import React, { useState } from "react";
import blogsData from "/my-app/src/Components/Pages/data";
const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  return (
    <div>
      <h1>Blogs</h1>
    </div>
  );
};

export default Blogs;
