import React from "react";
import "./Notifications.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";

function Notifications() {
  return (
    <div className="notifications">
      <div className="notifications__header">
        <div className="notifications__header-head">
          <h3>notifications</h3>
          <SettingsIcon />
        </div>
        <div className="notifications__header-links">
          <Link to="/notifications">all</Link>
          <Link to="/notifications/mentions">mentions</Link>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
