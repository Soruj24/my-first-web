import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";

function UserForm({ handleSubmitData, selectedUser, btnText }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
    const { username, email } = user;
    
    useEffect(() => {
        setUser({
            username: selectedUser.username,
           email: selectedUser.email,
        })
    },[selectedUser])

  const handleChange = e => {
    const sectionField = e.target.name;
    const sectionValue = e.target.value;

    setUser(preState => {
      return { ...preState, [sectionField]: sectionValue };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
      handleSubmitData(user);
      setUser({
          username: "",
          email: "",
      })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="username">UserName : </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={handleChange}
        />
      </div>
      <div className="field-group">
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn">
        {btnText}
      </button>
    </form>
  );
}

UserForm.defaultProps = {
    selectedUser: {
        username: "",
        email:"",
    },
};

export default UserForm;
