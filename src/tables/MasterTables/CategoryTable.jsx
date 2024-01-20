
import { Form } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { IoMdAdd } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import CategoryModal from "../../Modals/CategoryModal";
import getCategoryTable from "../../apis/api";

const CategoryTable = ({ show, handleClose, handleShow }) => {
  // const [query, setQuery] = useState("");

  const data = getCategoryTable();
  // const search=(data)=>{
  //   return data.filter((item)=>)
  // }

  return (
    <>
      <CategoryModal show={show} handleClose={handleClose} />
      <div className="Content_header">
        <div className="Content_header_flex">
          <h2>Category</h2>
          <div className="Content_header_btns ">
            <button className="customized_btn btn" onClick={handleShow}>
              <IoMdAdd /> Add Category
            </button>
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
            <Form.Control
              placeholder="Search here"
            ></Form.Control>
          </div>
        </div>
        <div className="Content_box_content">
          <table responsive className="">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td
                    className={`badge ${
                      item.status === "Active"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td>
                    <FiEdit/> <RiDeleteBin6Line />{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="Content_box_footer d-flex align-items-center justify-content-between gap-3 flex-wrap my-4">
          <div className="Content_box_footer_left ">showing 1 to 3 of total entries</div>
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

export default CategoryTable;
