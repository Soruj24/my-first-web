import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton'

export default function Index() {
  return (
      <div className=' bg-dark p-3'>
          <CloseButton variant='white'  />
          <CloseButton variant='white' disabled  />
          <CloseButton aria-label='Hide' />
    </div>
  )
}
