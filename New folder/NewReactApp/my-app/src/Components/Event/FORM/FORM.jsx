import React from 'react'
import { useState } from 'react'

export default function FORM() {
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name : </label>
                    <input type="text" name="name" required onChange={handleChange} />
                </div>
                <div>
                    <label>Email : </label>
                    <input type="email" name="email" required onChange={handleChange} />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" name="password" required onChange={handleChange} />
                </div>
                <div>
                    <button type='Submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
