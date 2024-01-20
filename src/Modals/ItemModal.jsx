import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form } from "react-bootstrap";

const ItemModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Item Master</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ModalBox">
            <div className="ModalBox_title d-flex align-items-center justify-content-between">
              Item Details <span>Item Code# SOUL-013</span>
            </div>

            <Row>
              <Col className="md-4 xs-12">
                <Form.Label>HSN Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Item Name</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Packing</Form.Label>
                <Form.Select> </Form.Select>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Unit Name</Form.Label>
                <Form.Select> </Form.Select>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Category Name</Form.Label>
                <Form.Select> </Form.Select>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Item Description</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
            </Row>
          </div>
          <div className="ModalBox">
            <div className="ModalBox_title">Taxes and Prices</div>

            <Row>
              <Col className="md-6 ">
                <Form.Label>Item Tax Rate</Form.Label>
                <Form.Select placeholder="Enter category name"></Form.Select>
              </Col>
              <Col className="md-6">
                <Form.Label>Purchase Rate</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                ></Form.Control>
              </Col>
              <Col className="md-3 xs-12">
                <Form.Label>MRP</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col className="md-3 xs-12">
                <Form.Label>Cash Rate</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col className="md-3 xs-12">
                <Form.Label>Credit Rate</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col className="md-3 xs-12">
                <Form.Label>Wholesale Rate</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
            </Row>
          </div>
          <div className="ModalBox">
            <div className="ModalBox_title">Location and Reorder</div>

            <Row>
              <Col className="md-4 xs-12">
                <Form.Label>Shelf</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category name"
                ></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Max Level</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Reorder Level</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Col>
              <Col className="md-4 xs-12">
                <Form.Label>Reorder Level</Form.Label>
                <Form.Select> </Form.Select>
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

export default ItemModal;
