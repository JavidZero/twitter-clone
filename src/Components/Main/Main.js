import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Main.css";

import Feed from "./Feed/Feed";
import Explore from "./Explore/Explore";
import Notifications from "./Notifications/Notifications";
import Message from "./Message/Message";
import Bookmarks from "./Bookmarks/Bookmarks";
import Lists from "./Lists/Lists";
import Profile from "./Profile/Profile";

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
