import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect");
    }, [])



    return (
        <div>
            {console.log("rendering")}
            <h1>Count :{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Click</button>

        </div>
    )
}

export default UseEffect