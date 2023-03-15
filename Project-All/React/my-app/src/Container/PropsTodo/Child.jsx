import React from 'react'

const Child = (props) => {
    const data = "I am Child !!"
    props.onData(data)
  return (
    <div>Child</div>
  )
}

export default Child