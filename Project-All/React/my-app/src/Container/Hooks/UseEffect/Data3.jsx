import React, { useEffect, useState } from "react";
import UseFetch from "./UseFetch";

function Data3() {
    const { data, isLoading, error } = UseFetch(
        "https://jsonplaceholder.typicode.com/todos"
    );

    const todoMessage = " Todo is loading...";

    const todoElement =
        data &&
        data.map(todo => {
            return (
                <div>
                    <h2 key={todo.id}>{todo.title}</h2>
                </div>
            );
        });
    return (
        <div>
            <h1>Todo App</h1>
            {error && <p>{error}</p>}
            {isLoading && todoMessage}
            {todoElement}
        </div>
    );
}

export default Data3;
