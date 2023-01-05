import React, { useCallback, useState } from 'react'
import Message from './Message'

const Memo = () => {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)
    console.log("App return")
    const handleInCrementMessage = useCallback(() => {
        setCount(count + 1);
    },[count])
    return (
        <div>
            {toggle ? "ON" : "OFF"}
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <Message numberOfMessage={count} onHandleInCrement={handleInCrementMessage} />
        </div>
    )
}

export default Memo