import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getVideo } from "../action/video.action";
import { updateVideo } from "../action/update.action";
import VideoPlayer from "../components/VideoComponent.js";
import Home from "../components/Home";

const mapDispatchToProps = dispatch => {
  return {
    getVideo: () => {
      dispatch(getVideo());
    },
    updateVideo: () => {
      dispatch(updateVideo());
    }
  };
};
const mapStateToProps = state => {
  console.log("here", state);
  return {
    videoDetails: state.videoReducers
    //loader: state.repoLoader
  };
};

const VideoContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
export default VideoContainer;
