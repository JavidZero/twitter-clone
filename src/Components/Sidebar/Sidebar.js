import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import { useGlobalContext } from "../../mainContext";

function Sidebar() {
  const { activeLink, handleLink } = useGlobalContext();
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1290) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    });
  }, []);

  return (
    <div className="sidebar">
      {/* Twitter Logo*/}
      <span>
        <TwitterIcon className="sidebar__twitterLogo" />
      </span>

      {/* Sidebar Natigation*/}
      <div className="sidebar__navigation">
        <Link onClick={() => handleLink("home")} to="/">
          <SidebarOption
            active={activeLink === "home"}
            text={"home"}
            Icon={HomeIcon}
          />
        </Link>
        <Link onClick={() => handleLink("explore")} to="/explore">
          <SidebarOption
            active={activeLink === "explore"}
            text={"explore"}
            Icon={SearchIcon}
          />
        </Link>
        <Link onClick={() => handleLink("notifications")} to="/notifications">
          <SidebarOption
            active={activeLink === "notifications"}
            text={"notifications"}
            Icon={NotificationsNoneIcon}
          />
        </Link>
        <Link onClick={() => handleLink("message")} to="/message">
          <SidebarOption
            active={activeLink === "message"}
            text={"message"}
            Icon={MailOutlineIcon}
          />
        </Link>
        <Link onClick={() => handleLink("bookmarks")} to="/bookmarks">
          <SidebarOption
            active={activeLink === "bookmarks"}
            text={"bookmarks"}
            Icon={BookmarkBorderIcon}
          />
        </Link>
        <Link onClick={() => handleLink("lists")} to="/lists">
          <SidebarOption
            active={activeLink === "lists"}
            text={"lists"}
            Icon={ListAltIcon}
          />
        </Link>
        <Link onClick={() => handleLink("profile")} to="profile">
          <SidebarOption
            active={activeLink === "profile"}
            text={"profile"}
            Icon={PermIdentityIcon}
          />
        </Link>
        <Link onClick={() => handleLink("more")} to="more">
          <SidebarOption
            active={activeLink === "more"}
            text={"more"}
            Icon={MoreHorizIcon}
          />
        </Link>
      </div>

      <Button className="sidebar__tweetButton" onClick={() => {}}>
        {smallScreen ? "T" : "Tweet"}
      </Button>
    </div>
  );
}

export default Sidebar;
