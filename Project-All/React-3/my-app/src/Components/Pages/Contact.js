import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Ipsum id cillum labore labore anim officia ea nulla occaecat ea fugiat
        ex. Fugiat ipsum excepteur id qui ut incididunt non voluptate amet
        ipsum. Aute in et et reprehenderit nisi.
      </p>
      <p>
        Ipsum id cillum labore labore anim officia ea nulla occaecat ea fugiat
        ex. Fugiat ipsum excepteur id qui ut incididunt non voluptate amet
        ipsum. Aute in et et reprehenderit nisi.
      </p>
      <p>
        Ipsum id cillum labore labore anim officia ea nulla occaecat ea fugiat
        ex. Fugiat ipsum excepteur id qui ut incididunt non voluptate amet
        ipsum. Aute in et et reprehenderit nisi.
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default Contact;
