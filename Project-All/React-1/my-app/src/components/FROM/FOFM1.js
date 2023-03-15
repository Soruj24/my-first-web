import React, { useState } from 'react'

export default function FOFM1() {
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name :</label>
                    <input type="text" name='name' onChange={handleChange} required />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" name='email' onChange={handleChange} required />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" name='password' onChange={handleChange} required />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
