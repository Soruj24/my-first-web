import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log('Count')
  };
  useEffect(()=>{
    console.log('useEffect');
  },[]) 
  return (
    <div>
      <h1>You have a Click {count}</h1>
      <button onClick={handleClick}>Count</button>
    </div>
  );
}
