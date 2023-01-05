import React from 'react'
import { useState } from 'react'

const NewTodo = (proos) => {

    const [todo, setTodo] = useState('')

    const handleInputChange = (event) => {
        setTodo(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        proos.onTodo(todo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>New Todo : </label>
            <input type='text' id='todo' name='todo' value={todo} onChange={handleInputChange} />
            <button type='submit'>Add Todo</button>

        </form>
    )
}

export default NewTodo