import React from 'react'
const Child = (props) => {
    const data = "I am Child (app)!"
    props.onDate(data);
    return (
        <div>Child</div>
    )
}

export default Child 