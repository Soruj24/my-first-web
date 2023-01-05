import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewTodo(todo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>New Todo :</label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={todo}
        required
        onChange={handleInputChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
