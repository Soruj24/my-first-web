import React, { useState } from "react";

export default function NewTodo(props) {
    const [todo, setTodo] = useState("");
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTodo(todo)
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>New Todo :</label>
            <input
                type="text"
                name="todo"
                id="todo"
                required
                onChange={handleChange}
                value={todo}
            />
            <button>Add Todo</button>
        </form>
    );
}
