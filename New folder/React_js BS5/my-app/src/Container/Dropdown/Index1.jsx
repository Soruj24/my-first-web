import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Index1() {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle>
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href='#'>Bangla</Dropdown.Item>
                    <Dropdown.Item href='#'>English</Dropdown.Item>
                    <Dropdown.Item href='#'>Math</Dropdown.Item>
                    <Dropdown.Item href='#'>Ict</Dropdown.Item>
                    <Dropdown.Item href='#'>Bangla</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
