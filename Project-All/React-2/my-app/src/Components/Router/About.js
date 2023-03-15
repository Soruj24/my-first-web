import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../../data";
const About = () => {
  const [blogs, setBlogs] = useState(blogData);

  const truncateString = (str, num) => {
    if(str.length>num){
      return str.slice(0,num) + "..."
    }else{
      return str
    }
  };

  return (
    <div>
      <h1>About Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h2>{title}</h2>
              <h3>{truncateString(body,100)}</h3>
              <Link to={title}>Learn More</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default About;
