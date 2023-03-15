import React from "react";

import Todo from "./Todo";

const Todos = props => {
  return (
    <div>
      {props.todos.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </div>
  );
};

export default Todos;
