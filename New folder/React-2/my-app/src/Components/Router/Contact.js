import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Non culpa anim nostrud mollit veniam nisi nostrud occaecat et elit
        occaecat fugiat ad. Eu consequat deserunt eiusmod fugiat aliqua nulla
        incididunt voluptate laborum. Velit sint velit voluptate irure Lorem
        est.
      </p>
      <p>
        Non culpa anim nostrud mollit veniam nisi nostrud occaecat et elit
        occaecat fugiat ad. Eu consequat deserunt eiusmod fugiat aliqua nulla
        incididunt voluptate laborum. Velit sint velit voluptate irure Lorem
        est.
      </p>
      <p>
        Non culpa anim nostrud mollit veniam nisi nostrud occaecat et elit
        occaecat fugiat ad. Eu consequat deserunt eiusmod fugiat aliqua nulla
        incididunt voluptate laborum. Velit sint velit voluptate irure Lorem
        est.
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
