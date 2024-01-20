import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form } from "react-bootstrap";

const SupplierModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Supplier Master</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ModalBox">
            <div className="ModalBox_title">Supplier Info</div>

            <Row>
              <Col className="md-4 xs-12">
                <Form.Label>Supplier Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
            </Row>
          </div>
          <div className="ModalBox">
            <div className="ModalBox_title">Supplier Details</div>

            <Row>
              <Col className="md-4 xs-12">
                <Form.Label>GSTIN</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>PAN</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Adhar No.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>status</Form.Label>
                <Form.Check
                  type="radio"
                  label="Active"
                  value="Active"
                  name="radios"
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Inactive"
                  value="Inactive"
                  name="radios"
                ></Form.Check>
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

export default SupplierModal;
