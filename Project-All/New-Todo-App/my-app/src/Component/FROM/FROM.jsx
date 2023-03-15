import React, { useState } from "react";
import style from './form.module.css'

export default function FROM() {
    const [user, setUser] = useState({ name: '', email: '', password: '' });

    const { name, email, password } = user
    
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(user);

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="style.formGroup">
                    <label> Name : </label>
                    <input type="text" name="name" value={name} required onChange={handleChange} />
                </div>
                <div className="style.formGroup">
                    <label> Email :</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="style.formGroup">
                    <label> Password :</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
