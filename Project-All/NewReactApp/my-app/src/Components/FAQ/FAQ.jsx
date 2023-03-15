import React, { useState } from "react";

import style from "./faq.module.css";
const FAQ = ({ id, title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <article className={style.faq}>
      <div>
        <h4>{title}</h4>
      </div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "-" : "+"}
      </button>
      {toggle && <p>{desc}</p>}
    </article>
  );
};

export default FAQ;
