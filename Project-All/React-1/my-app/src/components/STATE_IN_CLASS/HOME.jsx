import React from 'react'
import { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'

const dummyTodos = ["todo1", "todo2"]


const HOME = () => {
    const [todos, setTodos] = useState(dummyTodos)

    const handleNewTodo = (newTodo) => {
        setTodos( [...todos, newTodo] )
    }

    return (
        <div>
            <NewTodo onTodo={handleNewTodo} />
            <Todos todos={todos} />
        </div>
    )
}

export default HOME