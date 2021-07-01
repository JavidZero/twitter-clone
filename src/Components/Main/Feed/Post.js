import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/Share";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

function Post({ displayName, verified, name, time, text }) {
  const [isFaverite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFaverite);
  };

  return (
    <div className="post">
      <Avatar className="post__picture" />
      <div className="post__info">
        <div className="post__personalInfo">
          <h4 className="post__personalInfo_displayName">
            {displayName} <span className="verified"></span>
          </h4>
          <p className="post__personalInfo_name">{name}</p>
          <span className="time"></span>
          <p className="post_personalInfo_time">{time}</p>
        </div>
        <p>{text}</p>
        <div className="post__buttonContainer">
          {isFaverite ? (
            <FavoriteIcon className="liked" onClick={() => handleFavorite()} />
          ) : (
            <FavoriteBorderOutlinedIcon onClick={() => handleFavorite()} />
          )}

          <ShareIcon />
          <ChatBubbleIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
