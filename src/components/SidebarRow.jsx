import React, { useState } from "react";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { FaChevronRight } from "react-icons/fa6";
import "../styles/Sidebar.css";
import { useNavigate } from "react-router-dom";

const SidebarRow = ({ Icon, title, subItemArr }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMainClick = () => {
    !subItemArr && navigate("/dashboard");
  };
  const handleClick = (link) => {
    navigate(`/${link}`);
  };
  const handleMenuOpen = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };
  return (
    <div>
      <div
        className="SidebarRow d-flex align-items-center gap-2"
        onClick={handleMainClick}
      >
        {Icon && <Icon className="SidebarRow_Icon" />}
        <span>{title}</span>
        <div className="arrow_icon">
          {subItemArr && (
            <FaChevronRight
              className={`transition ${menuOpen ? "menu_open" : ""} `}
              onClick={handleMenuOpen}
            />
          )}
        </div>
      </div>
      <ul className={`SubItem ${menuOpen ? "open" : "close"}`}>
        {subItemArr?.map((element) => (
          <li key={element.title} onClick={() => handleClick(element.link)}>
            <element.icon id="Sidebar_subitem_icon" />
            {element.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarRow;
