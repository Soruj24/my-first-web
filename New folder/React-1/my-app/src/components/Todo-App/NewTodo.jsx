import React from 'react'
import style from './NewTodo.module.css'

const NewTodo = () => {
    return (
        <form className={style.form}>
            <div className={style["form-field"]}>
                <label>Title : </label>
                <input type="text" id='title' name="title" />
            </div>
            <div className={style["form-field"]}>
                <label>Title : </label>
                <textarea type="text" id='desc' name="desc" />
            </div>
            <button type='submit'>Add Todo</button>

        </form>
    )
}

export default NewTodo