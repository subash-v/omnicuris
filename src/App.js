import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import VideoContainer from "./container/VideoContainer";
import Lesson from "./components/Lesson";
import Chapter from "./components/Chapter";
import VideoPlayer from "./components/VideoComponent";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={VideoContainer} exact />
        <Route path="/lesson" component={Lesson} exact />
        <Route path="/chapter" component={Chapter} exact />
        <Route path="/video" component={VideoPlayer} exact />
      </Switch>
    </div>
  );
}

export default App;
