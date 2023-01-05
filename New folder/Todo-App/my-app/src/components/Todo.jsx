import React from 'react'
import style from './todo.module.css'

const Todo = (props) => {
    const { title, dec, id } = props.todo
    return (
        <article className={style.todo}>
            <div>
                <h3>{title}</h3>
                <p>{dec}</p>
            </div>
            <div>
                <button className={style.btn}>Trash</button>
            </div>
        </article>
    )
}

export default Todo
