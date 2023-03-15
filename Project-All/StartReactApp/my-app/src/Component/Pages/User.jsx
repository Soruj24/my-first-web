import React from "react";
import { userParams } from "react-router-dom";

const User = () => {
  const { userid } = userParams();
  return (
    <div>
      <h1>User : {userid}</h1>
    </div>
  );
};

export default User;
