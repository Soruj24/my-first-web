import React, { memo } from 'react'

const Message = ({ numberOfMessage, onHandleInCrement }) => {
    console.log("Message App");
  return (
      <div>
          <p>Send {numberOfMessage} Message !</p>
          <button onClick={onHandleInCrement}>InCrement Message Number</button>
    </div>
  )
}

export default memo(Message)