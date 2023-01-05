import React, { useState } from 'react'

import Component2 from './Component2'
import { UserContext } from './UserContext'

const Component1 = (props) => {
    const [user,setUser]=useState({id:101,name:"Soruj Mahmud"})
  return (
      <UserContext.Provider value={user}>
          <Component2   />
    </UserContext.Provider>
  )
}

export default Component1