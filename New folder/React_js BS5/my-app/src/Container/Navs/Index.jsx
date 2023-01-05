import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Index() {
    return (
        <>
            <Nav
                as="ul"
                activeKey="#"
                onSelect={selectedKey => alert(`Selected ${selectedKey}`)}>
                <Nav.Item as="li">
                    <Nav.Link href="#">Bangla</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#">Math</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#">English</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#">ICT</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}
