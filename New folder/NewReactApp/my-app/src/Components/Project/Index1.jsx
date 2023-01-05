import React, { useState } from "react";

const Index1 = () => {
    const [inputs, setInputs] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
         
        console.log(inputs);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({ ...value, [name]:value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name :</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    
                    required
                />
            </div>
            <div>
                <label>Email :</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                     
                    required
                />
            </div>
            <div>
                <label>Password :</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                     
                    required
                />
            </div>
            <button type="Submit">Submit</button>
        </form>
    );
};

export default Index1;
