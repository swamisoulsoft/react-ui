import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="Dashboard ">
        <div className="Dashboard_header text-left">
          <h3>Dashboard</h3>
        </div>
        <div className="Dashboard_content_box" id="Content_box">
          <div className="Dashboard_content_box_left">
            <div className="Dashboard_Badge_grp">
              <div className="innerFlex red ">
                <div className="Badge_header">To collect</div>{" "}
                <div className="Badge_price">Rs. 0</div>
              </div>
              <div className="innerFlex green ">
                <div className="Badge_header">To pay</div>{" "}
                <div className="Badge_price">Rs. 0</div>
              </div>
              <div className="innerFlex blue ">
                <div className="Badge_header">Total Income</div>{" "}
                <div className="Badge_price">Rs. 0</div>
              </div>
            </div>
          </div>
          <div className="Dashboard_content_box_right">
            <h4 className="Dashboard_content_box_right_header">
              Latest transactions
            </h4>
            <table responsive className="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Transaction Number</th>
                  <th>Type</th>
                  <th>Party Name</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td colspan="6" className="text-center">
                    <Link to="">see all transactions</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
