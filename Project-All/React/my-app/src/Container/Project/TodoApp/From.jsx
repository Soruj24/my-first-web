import React, { useState } from "react";

import style from "./from.module.css";

const From = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });

    const handleChange=(e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTodo((oldTodo) => {
            return {...oldTodo,[name]:value}
        })
    }

  const handleSubmit = e => {
      e.preventDefault();
      props.onAddTodo(todo);
      setTodo({title:'',desc:''})
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label>Title :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label>Desc :</label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={todo.desc}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default From;
