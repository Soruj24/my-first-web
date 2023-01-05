import React, { useContext } from 'react'

import { UserContext } from './UserContext'

const Component4 = () => {
  const user = useContext(UserContext)
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{ user.id}</h3>
    </div>
  )
}

export default Component4