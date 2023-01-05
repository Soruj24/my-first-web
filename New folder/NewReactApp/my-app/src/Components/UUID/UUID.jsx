import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const UUID = () => {
    const todos = [
        {
            id: uuidv4(),
            title: "todo 1",
            desc: "todo 1 description 1"
        },
        {
            id: uuidv4(),
            title: "todo 2",
            desc: "todo 2 description 2"
        },
        {
            id: uuidv4(),
            title: "todo 3",
            desc: "todo 3 description 3"
        },
    ]
    return (
        <div>
            {todos.map((todo) => {
                const { title, desc, id } = todo
                return <div key={id}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            })}
        </div>
    )
}

export default UUID