import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function Index() {
  return (
      <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Time</Breadcrumb.Item>
          <Breadcrumb.Item active>Date</Breadcrumb.Item>
    </Breadcrumb>
  )
}
