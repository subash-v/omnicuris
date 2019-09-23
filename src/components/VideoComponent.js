import React, { Component } from "react";
import ReactPlayer from "react-player";
import styles from "./VideoComponent.module.css";

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScreen: false
    };
    this.myRef = React.createRef();
  }

  onProgress = props => {
    const playedSeconds = Math.floor(props.playedSeconds);
    const played = Math.ceil(props.played);

    if (this.props.onProgress) {
      this.props.onProgress(playedSeconds, played);
    }
  };

  onPause = props => {
    const pausedSeconds = Math.floor(props.seconds);
    if (this.props.onPause) {
      this.props.onPause(pausedSeconds);
    }
  };

  onBuffer = props => {
    const bufferedSeconds = Math.floor(props.seconds);
    if (this.props.onBuffer) {
      this.props.onBuffer(bufferedSeconds);
    }
  };

  onSeek = props => {
    const seekedSeconds = Math.floor(props);
    if (this.props.onSeek) {
      this.props.onSeek(seekedSeconds);
    }
  };

  onEnded = () => {
    if (this.props.onEnd) {
      this.props.onEnd();
    }
  };

  onError = props => {
    const onErrorSeconds = Math.floor(props.seconds);
    if (this.props.onError) {
      this.props.onError(onErrorSeconds);
    }
  };

  onPlay = () => {
    if (this.props.onPlay) {
      this.props.onPlay();
    }
  };

  render() {
    console.log("HERE", this.props.location.state);
    return (
      <React.Fragment>
        <div className={styles.playerwrapper}>
          <ReactPlayer
            url={
              this.props &&
              this.props.location &&
              this.props.location.state &&
              this.props.location.state.video
            }
            playing
          />
        </div>
      </React.Fragment>
    );
  }
}
