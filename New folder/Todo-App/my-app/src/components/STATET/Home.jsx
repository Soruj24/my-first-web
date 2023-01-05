import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'

export default function Home() {
    const [todos, setTodos] = useState([""])
    const handleNewTodo=(newTodo)=>{
        setTodos([...todos,newTodo])
    }
    return (
        <div>
            <NewTodo onNewTodo={handleNewTodo} />
            <Todos todos={todos} />
        </div>
    )
}
