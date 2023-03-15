import React, { useState } from 'react'

export default function From() {
    const [text, setText] = useState()
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <input type="text" name='name' required onChange={handleChange} />
            <h1>Text {text}</h1>
        </div>
    )
}
