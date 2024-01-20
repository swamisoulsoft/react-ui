import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs"; // Importing the info circle icon
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form } from "react-bootstrap";

const CategoryModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <BsFillInfoCircleFill className="Icon" /> Category Master
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ModalBox">
            <div className="ModalBox_title">Category Details</div>
            <Row>
              <Col className="md-4 xs-12">
                <Form.Label className="FormLabel">Category Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                  className="FormControl"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label className="FormLabel">
                  Category Description
                </Form.Label>
                <Form.Control
                  type="text"
                  className="FormControl"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label className="FormLabel">Status</Form.Label>
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
        <Modal.Footer className="ModalFooter">
          <Button
            variant="secondary"
            onClick={handleClose}
            className="CancelButton"
          >
            {/* Replace the placeholder icon with your actual icon */}
            <span className="Icon">❌</span>Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            className="SaveButton"
          >
            {/* Replace the placeholder icon with your actual icon */}
            <span className="Icon">✔️</span>Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CategoryModal;
