import React from "react";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        corporis omnis, commodi, dolor alias et amet facere voluptate nobis
        praesentium eius obcaecati dolores ullam iste aliquid ratione delectus
        rem repudiandae est numquam libero unde quia laboriosam? Repellendus
        atque deleniti doloremque omnis similique, provident nisi, facere
        dolorum neque tempore minus asperiores!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem
        soluta amet accusamus voluptatibus eos, vero eaque, adipisci reiciendis
        optio sit cum? Laudantium officia nobis fuga praesentium incidunt
        assumenda! Nisi!
      </p>
      <button
        onClick={() => {
          navigate("/home");
        }}>
        Go To Home Page
      </button>
    </div>
  );
};

export default Contact;
