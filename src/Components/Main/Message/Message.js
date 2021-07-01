import React from "react";
import "./Message.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SearchIcon from "@material-ui/icons/Search";

function Message() {
  return (
    <div className="message">
      <div className="message__header">
        <h3>messages</h3>
        <MailOutlineIcon />
      </div>
      <div className="message__searchForm">
        <form action="" className="message__searchForm-form">
          <SearchIcon />
          <input type="text" placeholder="Search for people and groups" />
        </form>
      </div>
      <div className="message__container">
        <div className="message__emptyBox">
          <h3>Send a message, get a message</h3>
          <p>
            Direct Messages are private conversations between you and other
            people on Twitter. Share Tweets, media, and more!
          </p>
          <button>Start a conversation</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
