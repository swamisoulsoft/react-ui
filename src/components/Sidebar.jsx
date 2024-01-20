import React from "react";
import SidebarRow from "./SidebarRow";
import { MdAccountBalance, MdCategory } from "react-icons/md";
import { MdDragHandle } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";
import { BsListUl } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";

import "../styles/Sidebar.css";

const Sidebar = ({ open }) => {
  return (
    <div className={`Sidebar ${!open ? "Sidebar_collapse" : ""}`}>
      <SidebarRow title="Dashboard" Icon={MdOutlineSpaceDashboard} />
      <SidebarRow
        Icon={MdDragHandle}
        title="Master"
        subItemArr={[
          { title: "Category", icon: MdCategory, link: "category" },
          { title: "Item", icon: BsListUl, link: "item" },
          { title: "Customer", icon: MdAccountCircle, link: "customer" },
          { title: "Unit", icon: BsListUl, link: "unit" },
          { title: "Bank", icon: MdAccountBalance, link: "bank" },
          { title: "Supplier", icon: MdBusinessCenter, link: "supplier" },
          { title: "Ledger", icon: MdAccountBalance, link: "ledger" },
        ]}
      />
      <SidebarRow
        Icon={MdOutlineAccountBalance}
        title="Transaction"
        subItemArr={[
          { title: "Sales", icon: MdAccountBalance, link: "sales" },
          { title: "Quotation", icon: MdAccountBalance, link: "quotation" },
        ]}
      />
      <SidebarRow
        Icon={MdAccountBalance}
        title="Reports"
        subItemArr={[
          {
            title: "Quotation No-wise",
            icon: MdAccountBalance,
            link: "quotation_noReports",
          },
          {
            title: "Quotation Item-wise",
            icon: MdAccountBalance,
            link: "quotation_itemwise_reports",
          },
          {
            title: "Sales BillNo-wise",
            icon: MdAccountBalance,
            link: "sales_billnowise_reports",
          },
          {
            title: "Sales Item-wise",
            icon: MdAccountBalance,
            link: "sales_itemwise_reports",
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
