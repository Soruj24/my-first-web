import React from 'react'
import Child from './Child'

const AppT = () => {
    const handleData = (data) => {
        console.log(data)
    }
    return (
        <div>
            <Child onData={handleData } />
        </div>
    )
}

export default AppT