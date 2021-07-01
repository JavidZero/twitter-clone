import React from "react";
import "./Lists.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreHoriz from "@material-ui/icons/MoreHoriz";

function Lists() {
  return (
    <div className="lists">
      <div className="lists__header">
        <ArrowBackIcon />
        <div className="lists__name">
          <h3>lists</h3>
          <p>@Dragneel303123</p>
        </div>
        <PlaylistAddIcon />
        <MoreHoriz />
      </div>
      <div className="lists__pinned">
        <h3>pinned lists</h3>
      </div>
    </div>
  );
}

export default Lists;
