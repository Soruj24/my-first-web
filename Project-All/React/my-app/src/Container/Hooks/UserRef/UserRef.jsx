import React, { useRef } from "react";

const UsersRef = () => {
    const userNameRef = useRef();
    const userPassword = useRef();

  const handleSubmit = e => {
      e.preventDefault();
      const userName = userNameRef.current.value;
      const  Password = userPassword.current.value;
      userNameRef.current.style.color = "red";
    console.log({userName,Password});
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Name :</label>
        <input type="text" name="userName" id="userName" ref={userNameRef} />
      </div>
      <div>
        <label> Password :</label>
        <input type="password" name="password" id="password" ref={userPassword} />
      </div>
      <button type="Submit">Save</button>
    </form>
  );
};

export default UsersRef;
