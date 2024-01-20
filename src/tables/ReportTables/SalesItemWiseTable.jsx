import { Form } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const SalesItemWiseTable = () => {
  return (
    <>
      <div className="Content_header">
        <div className="Content_header_flex">
          <h2>Sales Details (item-wise)</h2>
          <div className="Content_header_form">
            <div className="Content_header_form_block">
              <Form.Label className="text-white"> From Date</Form.Label>
              <Form.Control type="date"></Form.Control>
            </div>
            <div className="Content_header_form_block">
              <Form.Label className="text-white">To Date</Form.Label>
              <Form.Control type="date"></Form.Control>
            </div>
            <div className="Content_header_form_block">
              <Form.Label className="text-white">Item name</Form.Label>
              <Form.Select>
                <option value="">Masur</option>
                <option value="">Sugar</option>
              </Form.Select>
            </div>
            <div className="Content_header_btns d-flex align-items-center gap-1">
              <button className="customized_btn btn">Show</button>
              <button className="customized_btn btn">Print</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Content_box" id="Content_box">
        <div className="Content_box_header d-flex align-items-center justify-content-between gap-3 flex-wrap">
          <div className="Content_box_boxes d-flex align-items-center gap-2">
            show{" "}
            <Form.Select>
              <option>0</option>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </Form.Select>{" "}
            entries
          </div>
          <div className="Content_box_boxes d-flex align-items-center gap-2">
            Search: <Form.Control></Form.Control>
          </div>
        </div>
        <div className="Content_box_content">
          <table responsive>
            <thead>
              <tr>
                <th>checkbox</th>
                <th>Sr. no.</th>
                <th>Bill no.</th>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Pay type</th>
                <th>Bill Amt</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <FiEdit />
                  <RiDeleteBin6Line />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Content_box_footer d-flex align-items-center justify-content-between gap-3 flex-wrap my-4">
          <div className="Content_box_footer_left ">
            showing 1 to 3 of total entries
          </div>
          <div className="Content_box_footer_right">
            <Pagination>
              <Pagination.First />
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesItemWiseTable;
