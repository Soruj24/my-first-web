import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function Card1() {
    return (
        <>
            <Card style={{ width: "20rem" }}>
                <Card.Body>
                    <Card.Header as="h2">Header </Card.Header>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                        suscipit qui quaerat obcaecati laborum maxime voluptatum praesentium
                        tenetur pariatur dolor numquam quisquam vero unde ullam odio nihil,
                        laudantium dolore cum.
                    </Card.Text>
                    <blockquote className="blockquote mb-1">
                        <p>
                            {''}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, error nemo ullam accusantium in tenetur totam minima, ad omnis necessitatibus reprehenderit architecto dolor ipsam quasi deserunt temporibus optio quod vero?
                            {''}
                        </p>
                    </blockquote>
                    <Button>Save</Button>
                    <footer>
                        Some one in <cite title="sourceTitle">Soruj Mahmud</cite>
                    </footer>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle>Subtitle</Card.Subtitle>
                    <ListGroup>
                        <ListGroup.Item>This is Item List Group !</ListGroup.Item>
                        <ListGroup.Item>This is Item List Group !</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    );
}
