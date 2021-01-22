import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import ViewListIcon from "@material-ui/icons/ViewList";
function Sidebar() {
  return (
    <div className="sideBar">
      <SidebarOption Icon={ViewListIcon} title="Jobs List" link="/" />
    </div>
  );
}

export default Sidebar;
