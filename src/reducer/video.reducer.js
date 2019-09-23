import * as videoAction from "../action/video.action";
const repo = (
  state = {
    status: null,
    error: null,
    videoDetails: null,
    user: null,
    repoLoader: false
  },
  action
) => {
  switch (action.type) {
    case videoAction.VIDEO_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        repoLoader: true
      });
    case videoAction.VIDEO_SUCCESS:
      console.log("REDucer", action);
      return Object.assign({}, state, {
        videoDetails: action.videoDetails,
        status: action.status,
        repoLoader: false
      });
    case videoAction.VIDEO_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};
export default repo;
