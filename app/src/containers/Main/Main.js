import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DefaultView from "../DefaultView/DefaultView";
import PostView from "../PostView/PostView";
import EditPostView from "../EditPostView/EditPostView";

class Main extends Component {
  render() {
    return (
      <div className="app-main-content">
        <Switch>
          <Route exact path="/" component={DefaultView} />
          <Route path="/post/:id?" component={PostView} />
          <Route path="/edit/:id?" component={EditPostView} />
        </Switch>
      </div>
    );
  }
}

export default Main;
