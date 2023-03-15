import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Index() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>Launch Demo Modal</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Header </Modal.Title>
          <Modal.Body>
            Hi you are reading text a Modal
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Close</Button>
            <Button variant="secondary" onClick={handleClose}>Save Change</Button>
          </Modal.Footer>
        </Modal.Header>

      </Modal>
    </>
  );
}
