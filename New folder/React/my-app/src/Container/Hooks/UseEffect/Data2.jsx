import React, { useEffect, useState } from "react";

const todoMessage = "Todo is Loading...";

function Data2() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        if (!res.ok) {
          throw Error("Todo is Not Data !!!!!");
        }
        return res.json();
      })
      .then(data => {
        setTodos(data);
          setIsLoading(false);
          setError(null)
          
      })
      .catch((error) => {
          setError(error.message);
          setIsLoading(false)
      });
  });
  const todoElement =
    todos &&
    todos.map(todo => {
      return (
        <div>
          <h2 key={todo.id}>{todo.title}</h2>
        </div>
      );
    });
  return (
    <div>
          <h1>Todo Title</h1>
          {error && <p>{error }</p>}
      {isLoading && todoMessage}
      {todoElement}
    </div>
  );
}

export default Data2;
