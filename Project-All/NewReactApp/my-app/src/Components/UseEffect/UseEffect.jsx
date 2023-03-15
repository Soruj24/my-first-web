import React, { useState,useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect")
  
     
  }, [count])
  
  return (
    <div>
        {console.log("Rendering")}
      <h1> Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default UseEffect;
