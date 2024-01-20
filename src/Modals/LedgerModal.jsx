import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form } from "react-bootstrap";

const LedgerModal = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Create New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ModalBox">
            <Row>
              <Col className="md-6 ">
                <Form.Label>Expense Head Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col className="md-6 ">
                <Form.Label>Supplier Name</Form.Label>
                <Form.Select placeholder="BANK ACCOUNT"></Form.Select>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LedgerModal;
