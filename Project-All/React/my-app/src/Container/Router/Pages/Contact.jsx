import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eum
        nisi, earum delectus quia soluta eius nesciunt assumenda quo iste ea
        aperiam aspernatur, rerum laborum illo totam iure cupiditate quae
        maiores ratione aliquid voluptatum laudantium. Ducimus alias nostrum,
        culpa nulla accusamus deserunt quam id ratione ea itaque dolores nemo
        quidem!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, eos
        cupiditate dolorem necessitatibus laudantium sed nisi iure, doloribus
        consequuntur beatae inventore. Quaerat ad dicta quasi dolorem! Suscipit
        voluptatibus cumque corrupti.
      </p>
     
      <button
        onClick={() => {
          navigate("/home");
        }}>
        Go To Home
      </button>
    </div>
  );
}

export default Contact;
