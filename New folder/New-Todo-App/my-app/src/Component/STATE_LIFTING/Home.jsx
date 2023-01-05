import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'

const dummyTodos = ['']

const Home = () => {

    const [todos, setTodos] = useState(dummyTodos)

    const handleNewTodo = (data) => {
        setTodos([...todos, data])
    }

    return (
        <div>
            <NewTodo onTodo={handleNewTodo} />
            <Todos todos={todos} />
        </div>
    )
}

export default Home