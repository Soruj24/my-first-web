import React, { useState } from "react";

const Forms = () => {
  const [user, setUser] = useState({
    name: "name",
    email: "email",
    password: "password",
  });
  const handleChange = e => {
    console.log(user);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setUser(e.target.value)
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name :</label>
        <input type="text" id="name" required onChange={handleChange} />
      </div>
      <div>
        <label>Email :</label>
        <input type="email" id="email" required onChange={handleChange} />
      </div>
      <div>
        <label>Password :</label>
        <input type="password" id="password" required onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;
