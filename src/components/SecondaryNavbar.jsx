import React from "react";
import { NavDropdown } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import "../styles/Navbar.css";

const SecondaryNavbar = ({ toggleSidebar, open }) => {
  return (
    <div className="SecondaryNavbar">
      <div className="SecondaryNavbar_innerbox">
        <div className="SecondaryNavbar_left">
          <div className="SecondaryNavbar_icons" onClick={toggleSidebar}>
            {!open ? <CgMenuGridR /> : <IoMdClose />}
          </div>
        </div>
        <div className="SecondaryNavbar_right">
          <div className="SecondaryNavbar_icons">
            <MdOutlineEmail />
          </div>
          <div className="SecondaryNavbar_icons">
            <NavDropdown
              title={
                // <Avatar
                //   id="custom_navDropdown"
                //   alt="Remy Sharp"
                //   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLRAlpUwgnA01Ksosn99mzvGi1dZEeLS0Mw&usqp=CAU"
                //   sx={{ width: 24, height: 24, objectFit: "contain" }}
                // />
                <MdAccountCircle />
              }
            >
              <NavDropdown.Item>
                {/* <Avatar
                  id="custom_navDropdown"
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLRAlpUwgnA01Ksosn99mzvGi1dZEeLS0Mw&usqp=CAU"
                 fontSize="large"
                />{" "} */}
                Dipali
              </NavDropdown.Item>
              <NavDropdown.Item>SignOut</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
