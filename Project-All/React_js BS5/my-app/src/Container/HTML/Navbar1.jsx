import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Navbar1() {
    return (
        <Navbar bg='light' expand='sm' >
            <Nav>
                <Nav.Link href='#'>Home</Nav.Link>
                <Nav.Link href='#'>Link</Nav.Link>
                <NavDropdown title="Dropdown">
                    <NavDropdown.Item href='#'>Bangla</NavDropdown.Item>
                    <NavDropdown.Item href='#'>English</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Math</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}
