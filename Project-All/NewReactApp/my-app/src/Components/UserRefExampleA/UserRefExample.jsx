import React, { useRef } from 'react'

const UserRefExample = () => {

    const userNameRef = useRef();
    const passwordRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault()
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;
        console.log({ userName, password });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User Name :</label>
                <input type="text" id='username' ref={userNameRef} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" id='username' ref={passwordRef} />
            </div>
            <button type='submit'>Save</button>
        </form>
    )
}

export default UserRefExample
