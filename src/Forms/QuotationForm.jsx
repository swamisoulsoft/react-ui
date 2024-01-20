import React from "react";
import {  Row, Col, Form } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "../styles/Forms.css";

const QuotationForm = () => {
  return (
    <div className="form_box d-flex ">
      <div className="form_box_left ">
        <div className="form_box_content">
          <Row className="form_box_content_first_row ">
            <Col md={4} xs={12}>
              <Form.Label>Customer Name:</Form.Label>
              <Form.Select>
                <option value="">Please choose</option>
                <option value="">Create new customer</option>
                <option value="">Ashutosh</option>
              </Form.Select>
            </Col>
            <Col md={4} xs={12}>
              <Form.Label>Payment Mode</Form.Label>
              <Form.Select></Form.Select>
            </Col>
            <Col md={4} xs={12}>
              <Form.Label>Sub-payment Mode</Form.Label>
              <Form.Select></Form.Select>
            </Col>
          </Row>
          <Row className="form_box_content_second_row">
            <Col md={3}>
              <Form.Label>Item Name:</Form.Label>
              <Form.Select>
                <option value="">Please choose</option>
                <option value="">Create new item</option>
                <option value="">Masur</option>
              </Form.Select>
            </Col>
            <Col md={2} xs={12}>
              {" "}
              <Form.Label>Rate</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={2} xs={12}>
              {" "}
              <Form.Label>Qty</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={2} xs={12}>
              <Form.Label>Sub total</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>

            <Col md={2} xs={12}>
              {" "}
              <Form.Label>Disc (%)</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>

            <Col md={2} xs={12}>
              {" "}
              <Form.Label>Disc (Rs.)</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={2} xs={12}>
              {" "}
              <Form.Label>Description</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>

            <Col md={2} xs={12}>
              {" "}
              <Form.Label>Taxable Amount:</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col md={2} xs={12}>
              {" "}
              <Form.Label>Tax in %</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col md={2} xs={12}>
              {" "}
              <Form.Label>Tax in Rs.</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col md={2} xs={12}>
              {" "}
              <Form.Label>Total Amount</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <button className="btn btn-dark">
                <MdAdd /> Add Item
              </button>
            </Col>
          </Row>
        </div>
        <div className="form_box_content">
          <Row>
            <table responsive>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Item Name</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Sub Total</th>
                  <th>Disc(Rs)</th>
                  <th>Disc(%)</th>
                  <th>Taxable Amt</th>
                  <th>CGST %</th>
                  <th>CGST ₹</th>
                  <th>SGST %</th>
                  <th>SGST ₹</th>
                  <th>Total Tax</th>
                  <th>Net Amt</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sample Item</td>
                  <td>10</td>
                  <td>20.00</td>
                  <td>200.00</td>
                  <td>10.00</td>
                  <td>5%</td>
                  <td>190.00</td>
                  <td>9%</td>
                  <td>17.10</td>
                  <td>9%</td>
                  <td>17.10</td>
                  <td>34.20</td>
                  <td>224.20</td>
                  <td>
                    <FaRegEdit />
                    <MdDeleteOutline />
                  </td>
                </tr>
              </tbody>
            </table>
          </Row>
        </div>
      </div>
      <div className="form_box_right">
        <div className="form_box_content">
          <Row>
            <Col md={6}>
              <Form.Label>Bill No:</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Col>
            <Col md={6}>
              <Form.Label>Bill Type:</Form.Label>
              <Form.Select>
                <option value="">Exclusive</option>
                <option value="">Inclusive</option>
                <option value="">Without Tax</option>
              </Form.Select>
            </Col>
            <Col md={5}>
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col md={4} xs={12}>
              {" "}
              <Form.Label>Subtotal</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <Form.Label>Discount</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <Form.Label>Taxable</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <Form.Label>Tax amount</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <Form.Label>Bill Total</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
          </Row>
          <Row>
            <Col md={4} xs={12}>
              {" "}
              <Form.Label>Round Off:</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <Form.Label>Net Bill Total:</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <Form.Label>Bill Charges:</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <Form.Label>Bill Disc:</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <Form.Label>Final Bill Total:</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
          </Row>

          <Row>
            {" "}
            <Col md={6}>
              {" "}
              <Form.Label>Paid Amount</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
            <Col md={6}>
              {" "}
              <Form.Label>Bal Amount</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col className="d-flex align-items-center gap-3 my-3">
              <button className="btn  btn-success ">Save Bill</button>
              <button className="btn btn-warning">Exit</button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default QuotationForm;
