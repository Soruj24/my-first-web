import React from 'react'
import { useState } from 'react'

export default function Index() {
    const [count, setCount] = useState(0)
    const handleChange = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Count :{count}</h1>
            <button onClick={handleChange}>Count</button>

        </div>
    )
}
