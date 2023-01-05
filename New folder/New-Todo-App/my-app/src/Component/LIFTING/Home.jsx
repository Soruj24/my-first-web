import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'

const todos = ["todo 1", "todo 2"]

const Home = () => {
    const [newTodo, setNewTodo] = useState(todos)
    const handleNewTodo = (data) => {
        setNewTodo([...newTodo,data])
    }
    return (
        <div>
            <NewTodo onNewTodo={handleNewTodo} />
            <Todos todos={newTodo} />
        </div>
    )
}

export default Home
