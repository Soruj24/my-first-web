import React from "react";
import { useState } from "react";

export default function INDEX1() {
  const [count, setCount] = useState(0);
  const handleIn = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>You Clicked {count} times</h1>
      <button onClick={handleIn}>Click Me</button>
    </div>
  );
}
