import React, { useEffect, useState } from "react";

const loadingMessage = <p>Todo is Loading...</p>;

function Data1() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        if (!res.ok) {
          throw Error("fetching is not successful");
        }
        return res.json();
      })
      .then(data => {
        setTodos(data);
        setError(null);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
      });
  });
  const todosElement =
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
      <h1>Todo</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
}

export default Data1;
