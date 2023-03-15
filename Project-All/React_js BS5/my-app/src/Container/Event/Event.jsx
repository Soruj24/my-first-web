import React, { useState } from 'react'

export default function Event() {
    const [name,setName]=useState('')
    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
  return (
      <div>
          <label>Name : </label>
          <input type="text" onChange={handleChange} />
          <h1>Any Name : {name }</h1>
    </div>
  )
}
