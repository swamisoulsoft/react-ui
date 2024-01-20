import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form } from "react-bootstrap";

const BankModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Bank Master</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ModalBox">
            <div className="ModalBox_title">Bank Details</div>

            <Row>
              <Col className="md-4 xs-12">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Account Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Account No.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col className="md-4 xs-12">
                <Form.Label>IFSC</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Branch Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Branch Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
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
    </>
  );
};

export default BankModal;
