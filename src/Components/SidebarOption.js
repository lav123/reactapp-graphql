import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
function SidebarOption({ Icon, title, link }) {
  const history = useHistory();
  return (
    <div className="sidebarOption" onClick={() => history.push(link)}>
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}

export default SidebarOption;
