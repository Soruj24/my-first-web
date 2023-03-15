import React, { useState } from 'react'
import Component2 from './Component2'

export default function Component1() {
    const [user,setUser]=useState("Soruj Mahmud")
  return (
      <div>
          <Component2 user={user} />
    </div>
  )
}
