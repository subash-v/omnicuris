import React, { Component } from "react";

export default class Lesson extends Component {
  componentDidMount() {
    const lesson =
      this.props &&
      this.props.history &&
      this.props.history.location &&
      this.props.history.location.state &&
      this.props.history.location.state.lesson;
  }
  routeUser = val => {
    this.props.history.push({
      pathname: `/chapter`,
      state: {
        chapter: val
      }
    });
  };
  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <h1>LESSON</h1>
        {this.props &&
          this.props.location &&
          this.props.location.state &&
          this.props.location.state.lesson.map((val, i) => {
            return (
              <div onClick={() => this.routeUser(val.userChapterDetails)}>
                {i + 1}--->{val.title}
              </div>
            );
          })}
      </div>
    );
  }
}
