
import React, { useState, useEffect } from 'react'


const loadingMessage = <p>Todo is Loading...</p>
 

const DataFetch = () => {
    const [todos, setTodos] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Fetching is not Successful")
                    } else {
                        return res.json()
                    }
                })
                .then((data) => {
                    setTodos(data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((error) => {
                    setError(error.massage)
                    setIsLoading(false)
                })
        }, 2000);

    }, [])

    const todosElement = todos && todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
    })


    return (
        <div>
            <h1>Todo</h1>
            {isLoading && loadingMessage}
            {error && <p>{error}</p>}
            {todosElement}

        </div>
    )
}

export default DataFetch
