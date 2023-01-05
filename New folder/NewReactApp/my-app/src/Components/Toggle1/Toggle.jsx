import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          similique quia cum ut nemo natus. Mollitia distinctio facere provident
          nam eius, atque similique voluptatibus cupiditate cumque placeat,
          magnam blanditiis excepturi.
        </p>
      )}
      <div>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show" }
        </button>
         
      </div>
    </div>
  );
}
