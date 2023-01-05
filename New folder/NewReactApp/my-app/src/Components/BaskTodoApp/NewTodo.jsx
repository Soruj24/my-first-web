import React from 'react'
import { useState } from 'react'

const NewTodo = (props) => {

    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(todo)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>New Todo :</label>
                <input type="text" name="todo" value={todo} onChange={handleChange} />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodo