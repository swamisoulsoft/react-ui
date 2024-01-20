import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form } from "react-bootstrap";

const UnitModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Unit Master</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ModalBox">
            <div className="ModalBox_title">Unit Details</div>

            <Row>
              <Col className="md-4 xs-12">
                <Form.Label>Unit</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Unit"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Status</Form.Label>
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

export default UnitModal;
