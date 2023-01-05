import React, { useState } from "react";

export default function COUNT1() {
  const [count, setCount] = useState(0);
  const handle = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={handle}>Count</button>
    </div>
  );
}
