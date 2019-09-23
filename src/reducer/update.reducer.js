import * as updateAction from "../action/update.action";
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
    case updateAction.UPDATE_VIDEO_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        repoLoader: true
      });
    case updateAction.UPDATE_VIDEO_SUCCESS:
      console.log("REDucer", action);
      return Object.assign({}, state, {
        //videoDetails: action.videoDetails,
        status: action.status,
        repoLoader: false
      });
    case updateAction.UPDATE_VIDEO_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};
export default repo;
