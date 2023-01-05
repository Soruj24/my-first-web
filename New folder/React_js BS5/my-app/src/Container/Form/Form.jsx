import React, { useState } from 'react'

export default function Form() {
    const [user, setUser] = useState('')
    const handleChange = (e) => {
        const name= e.target.name;
        const value = e.target.value;
        setUser(...{value},[name] )
    }
    const handleSubmit = (e) => {
        e.preventDefault(e)
        console.log(user);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name : </label>
                    <input type="text" onChange={handleChange} value={name} required />
                </div>
                <div>
                    <label>Email : </label>
                    <input type="email" onChange={handleChange} value={email} required />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" onChange={handleChange} value={password} required />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
