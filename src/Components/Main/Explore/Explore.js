import React from "react";
import "./Explore.css";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";

function Explore() {
  return (
    <div className="explore">
      <div className="explore__header">
        <form className="explore__searchForm">
          <SearchIcon />
          <input type="text" placeholder="Search Twitter" />
        </form>
        <SettingsIcon className="explore__settings" />
      </div>
    </div>
  );
}

export default Explore;
