import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Index1() {
    return (
        <div>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>secondary</Button>
            <Button variant='success'>success</Button>
            <Button variant='warning'>warning</Button>
            <Button variant='danger'>danger</Button>
            <Button variant='info'>info</Button>
            <Button variant='light'>light</Button>
            <Button variant='link'>Link</Button>
            <hr />
            <Button variant='outline-primary'>Primary</Button>
            <Button variant='outline-secondary'>secondary</Button>
            <Button variant='outline-success'>success</Button>
            <Button variant='outline-warning'>warning</Button>
            <Button variant='outline-danger'>danger</Button>
            <Button variant='outline-info'>info</Button>
            <hr />
            <Button href='#'>Link</Button>{' '}
            <Button as='input' type='button' value="Input" />{' '}
            <Button as='input' type='submit' value="submit" />{' '}
            <Button as='input' type='reset' value="Reset" />{' '}
            <hr />
            <div>
                <Button variant='primary' size='lg'>Large</Button>{' '}
                <Button variant='primary' size='lg'>Large</Button>{' '}
                <Button variant='primary' size='sm'>sm</Button>{' '}
                <Button variant='primary' size='sm'>sm</Button>{' '}
            </div>
            <p></p>

            <div className='d-grid gap-3'>
                <Button size='lg'>Block Level Button</Button>
                <Button>Block Level Button</Button>
            </div>
            <p></p>
            <div>
                <Button size='lg' active>Block Level Button</Button>
                <Button active>Block Level Button</Button>
            </div>
             
        </div>
    )
}
