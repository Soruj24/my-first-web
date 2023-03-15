import React from 'react'
import { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'

const dummyTodos = ['Todo 1', 'Todo 2']


const Home = () => {
    const [todos, setTodos] = useState(dummyTodos)
    const handleNewTodo = (newTodo) => {
       setTodos([...todos,newTodo])
    }

    return (
        <div>
            <NewTodo onTodo={handleNewTodo} />
            <Todos todos={todos} />
        </div>
    )
}

export default Home