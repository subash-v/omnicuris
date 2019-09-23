import React, { Component } from "react";

export default class Chapter extends Component {
  routeUser = val => {
    this.props.history.push({
      pathname: `/video`,
      state: {
        video: val
      }
    });
  };
  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <h1>CHAPTER</h1>
        <ol>
          {this.props &&
            this.props.location &&
            this.props.location.state &&
            this.props.location.state.chapter.map((val, i) => {
              return (
                <li onClick={() => this.routeUser(val.chapter.content)}>
                  {i + 1}---> {val.chapter.title}
                </li>
              );
            })}
        </ol>
      </div>
    );
  }
}
