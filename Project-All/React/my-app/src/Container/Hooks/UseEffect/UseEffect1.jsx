import React, { useState, useEffect } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, [count]);
  return (
    <div>
      {console.log("Ren")}
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setIsLoading(!isLoading)}>-</button>
    </div>
  );
}

export default UseEffect1;
