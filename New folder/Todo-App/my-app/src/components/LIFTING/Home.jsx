import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'



export default function Home() {
    // const todos = ["todo 1", "todo 2"]
    const [todos, setTodos] = useState([""])
    const handleNewTodo = (NewTodo) => {
        setTodos([...todos,NewTodo])
    }

    return (
        <div>
            <NewTodo onNewTodo={handleNewTodo} />
            <Todos todos={todos} />
        </div>
    )
}
