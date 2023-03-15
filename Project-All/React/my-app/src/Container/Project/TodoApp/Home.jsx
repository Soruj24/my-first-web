import React, { useState } from 'react'

import {v4 as uuidv4} from "uuid"
import Todos from './Todos'
import style from './home.module.css'
import From from './From'




const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos,{id:uuidv4(),todo}]
        })
    }

  return (
    <div className={style.container}>
          <h1 style={{ color: "wheat" }}>Todo App</h1>
          <From onAddTodo={handleTodo} />
          <Todos todos={todos}  />
    </div>
  )
}

export default Home