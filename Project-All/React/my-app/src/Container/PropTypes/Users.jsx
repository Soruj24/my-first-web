import React, { useState } from 'react'
import User from './User'

const Users = () => {
    const [userName,setUserName]= useState("Soruj Mahmud")
    const [userId,setUserId]= useState(111)
  return (
      <>
          <User userName={userName} userId={userId} />
    </>
  )
}

export default Users