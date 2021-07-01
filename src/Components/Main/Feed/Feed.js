import React, { useState, useEffect } from "react";
import "./Feed.css";
import StarIcon from "@material-ui/icons/Star";
import TweetPostForm from "./TweetPostForm";
import Post from "./Post";

import db from "../../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("MyPosts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      {/* Feed heading */}
      <div className="feed__header">
        <h3>home</h3>
        <StarIcon />
      </div>

      {/* Form For Tweeting */}
      <TweetPostForm />

      {/* All Posts */}
      <div className="feed__posts">
        {posts.map((post) => {
          return <Post {...post} key={post.id} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
