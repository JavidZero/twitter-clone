import React, { useState } from "react";
import "./TweetPostForm.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../../firebase";

function TweetPostForm() {
  const [tweetText, setTweetText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetText) {
      db.collection("MyPosts").add({
        id: new Date().getTime().toString(),
        text: tweetText,
        displayName: "Javid Alizada",
        verified: false,
        name: "@Dragneel0212",
        time: "1d",
      });
    }
    setTweetText("");
  };

  return (
    <form className="form">
      <Avatar className="form__avatar" />
      <div className="form__control">
        <div className="form__inputContainer">
          <input
            type="text"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="What's happening?"
          />
        </div>
        <div className="form__buttonContainer">
          <div className="form__inputButtons"></div>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="form__tweetButton"
          >
            tweet
          </Button>
        </div>
      </div>
    </form>
  );
}

export default TweetPostForm;
