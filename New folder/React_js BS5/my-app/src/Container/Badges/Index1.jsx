import React from 'react'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

export default function Index1() {
    return (
        <div>
            <Button>
                Profile <Badge bg='secondary' >9</Badge>
                <span className='visually-hidden'>Unread Massage </span>
            </Button>{' '}
            <Badge pill bg='primary'>Primary</Badge>{' '}
            <Badge pill bg='secondary'>Primary</Badge>{' '}
            <Badge pill bg='danger'>danger</Badge>{' '}
            <Badge pill bg='info'>info</Badge>{' '}
        </div>
    )
}
