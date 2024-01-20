import React from "react";
// import { Table } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SecondaryNavbar from "./SecondaryNavbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../styles/MainApp.css";

const MainApp = ({ open, toggleSidebar }) => {
  return (
    <div>
      <Navbar />
      <Sidebar open={open} />
      <SecondaryNavbar toggleSidebar={toggleSidebar} open={open} />

      <div className="Content_container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
