import { Form } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const QuotationTable = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/quotation_form");
  };
  return (
    <>
      <div className="Content_header">
        <div className="Content_header_flex">
          <h2>Quotation Details</h2>
          <div className="Content_header_btns ">
            <button className="customized_btn btn" onClick={handleClick}>
              <IoMdAdd /> Add Quotation
            </button>
            <button className="customized_btn btn">Print</button>
            {/* <a href="#Content_box">
                <button className="btn ">View Table</button>
              </a> */}
          </div>
        </div>
      </div>
      <div className="Content_box" id="Content_box">
        <div className="Content_box_header d-flex align-items-center justify-content-between gap-3 flex-wrap">
          <div className="Content_box_boxes d-flex align-items-center gap-2">
            show
            <Form.Select>
              <option>0</option>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </Form.Select>
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
                <th>Quo. no.</th>
                <th>Date</th>
                <th>Customer Name</th>
                <th>Quotation total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>lsdflks</td>
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

export default QuotationTable;
