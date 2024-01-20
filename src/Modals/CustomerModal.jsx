import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form } from "react-bootstrap";

const CustomerModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Customer Master</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ModalBox">
            <div className="ModalBox_title">Customer Info</div>

            <Row>
              <Col className="md-4 xs-12">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Address</Form.Label>
                <Form.Select> </Form.Select>
              </Col>
            </Row>
          </div>
          <div className="ModalBox">
            <div className="ModalBox_title">Customer Details</div>

            <Row>
              <Col className="md-4 xs-12">
                <Form.Label>GSTIN</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>PAN</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Adhar No.</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>status</Form.Label>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="radio"
                    label="Active"
                    name="status"
                    id="activeRadio"
                  />
                  <Form.Check
                    type="radio"
                    label="Inactive"
                    name="status"
                    id="inactiveRadio"
                  />
                </Form.Group>
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

export default CustomerModal;
