import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
function Header() {
  return (
    <div className="header">
      <div className="headerRight">
        <img
          src="https://www.businessinsider.in/photo/72954472/Get-your-dream-job-with-this-simple-Question.jpg?imgsize=27423"
          alt="Job icon"
        />
      </div>
      <div className="headerMiddle">
        <SearchIcon />
        <input type="text" placeholder="Search Job" />
        <ArrowDropDownIcon />
      </div>
      <div className="headerLeft">
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <Avatar
          src="https://pbs.twimg.com/profile_images/1081518974645354496/YSNpyOlU_400x400.jpg"
          className="headerAvatar"
        />
      </div>
    </div>
  );
}

export default Header;
