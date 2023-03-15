import React, { useState } from 'react'

export default function FROM() {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const { name, email, password } = user

    // const handleNameChange = (e) => {
    //     setUser({name:e.target.value,email,password});
    // }
    // const handleEmailChange = (e) => {
    //     setUser({name,email:e.target.value,password});
    // }
    // const handlePasswordChange = (e) => {
    //     setUser({name,email,password:e.target.value});
    // }

    const handleChange = (e) => {
        
         setUser({...user,[e.target.name]:e.target.value})

        //  const fileName = e.target.name;
        // if (fileName === 'name') {
        //     setUser({ name: e.target.value, email, password });
        // }
        // if (fileName === 'email') {
        //     setUser({ name, email: e.target.value, password });
        // }
        // if (fileName === 'password') {
        //     setUser({ name, email, password: e.target.value });
        // }

    }

    const handleSubmit = (e) => {

        // const userInfo = {
        //     name,
        //     email,
        //     password

        // }
        e.preventDefault()
        console.log(user)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name :</label>
                    <input type="text" name="name" value={name} required onChange={handleChange} />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" name="email" value={email} required onChange={handleChange} />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" name="password" value={password} required onChange={handleChange} />
                </div>
                <div>
                    <button type='Submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
