import * as api from "../api";
import axios from "axios";
export const UPDATE_VIDEO_REQUEST = "UPDATE_VIDEO_REQUEST";
export const UPDATE_VIDEO_SUCCESS = "UPDATE_VIDEO_SUCCESS";
export const UPDATE_VIDEO_FAILURE = "UPDATE_VIDEO_FAILURE";
export const REQUESTING = "Requesting";
export const SUCCESS = "Success";
export const ERROR = "Error";
const url = "https://api.omnicuris.com/api/userCourse/updateProgress/";
const updateData = {
  accessToken: "78905c92-1ea8-49c0-8649-9b517b662c2c",
  courseId: 73,
  duration: 961.236467,
  isCompleted: false,
  status: "STARTED",
  lastViewPoint: 23.451663,
  widgetId: 1272,
  widgetType: "CHAPTER"
};
console.log(updateData);
export function updateVideoRequest() {
  return {
    type: UPDATE_VIDEO_REQUEST,
    status: REQUESTING
  };
}
export function updateVideoSuccess(videoDetails) {
  return {
    type: UPDATE_VIDEO_SUCCESS,
    status: SUCCESS,
    videoDetails
  };
}
export function updateVideoFailure(error) {
  return {
    type: UPDATE_VIDEO_FAILURE,
    status: ERROR,
    error
  };
}
export function updateVideo() {
  return async (dispatch, getState) => {
    dispatch(updateVideoRequest());
    try {
      const result=axios({
        method: 'post',
        url: url,
        data: updateData,
        //config: { headers: {'Content-Type': 'multipart/form-data' }}
        })

      const resultJson = result;

      if (resultJson.error) {
        console.log("HERE ERROR");
        throw new Error(resultJson.error);
      }
      console.log(resultJson);
      return dispatch(updateVideoSuccess(resultJson.data));
    } catch (e) {
      dispatch(updateVideoFailure(e.message));
    }
  };
}
