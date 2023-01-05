import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Forms = () => {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Email Adders</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">This is Text .</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password :</Form.Label>
        <Form.Control type="password" placeholder="Password " />
        <Form.Control as="textarea" size="lg" />
        <Form.Control as="textarea" size="ms" />
      </Form.Group>
      <Form.Check className="mb-3" type="checkbox" />
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  );
};

export default Forms;
