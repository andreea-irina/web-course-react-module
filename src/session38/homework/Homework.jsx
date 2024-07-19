import React from "react";
import { Button, Modal, ListGroup } from "react-bootstrap";

import useToggle from "./useToggle";

function Homework() {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [isListVisible, toggleList] = useToggle(false);

  return (
    <div className="container mt-5">
      <h1>Bootstrap Components</h1>
      <Button variant="primary" onClick={toggleModal}>
        Show Modal
      </Button>
      <Button variant="secondary" onClick={toggleList} className="ml-2">
        Toggle List
      </Button>

      <Modal show={isModalOpen} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the modal body.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={toggleModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {isListVisible && (
        <ListGroup className="mt-3">
          <ListGroup.Item>Item 1</ListGroup.Item>
          <ListGroup.Item>Item 2</ListGroup.Item>
          <ListGroup.Item>Item 3</ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
}

export default Homework;
