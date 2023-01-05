import React from 'react'

export default function Child(props) {
    const data = 'i am (Child) !'
    props.onData(data)
    return (
        <div>
            <h1>I am Child</h1>
        </div>
    )
}
