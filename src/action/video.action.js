import * as api from "../api";
import axios from "axios";
export const VIDEO_REQUEST = "VIDEO_REQUEST";
export const VIDEO_SUCCESS = "VIDEO_SUCCESS";
export const VIDEO_FAILURE = "VIDEO_FAILURE";
export const REQUESTING = "Requesting";
export const SUCCESS = "Success";
export const ERROR = "Error";
const url =
  "https://stgapi.omnicuris.com/api/v2/course/userCourseDetails/clinical-nutrition";
const data = { accessToken: "78905c92-1ea8-49c0-8649-9b517b662c2c" };
export function videoRequest() {
  return {
    type: VIDEO_REQUEST,
    status: REQUESTING
  };
}
export function videoSuccess(videoDetails) {
  return {
    type: VIDEO_SUCCESS,
    status: SUCCESS,
    videoDetails
  };
}
export function videoFailure(error) {
  return {
    type: VIDEO_FAILURE,
    status: ERROR,
    error
  };
}
export function getVideo() {
  return async (dispatch, getState) => {
    dispatch(videoRequest());
    try {
      const result = await axios.post(url, {
        body: JSON.stringify(data)
      });
      console.log("HERE", result);
      const resultJson = result;

      if (resultJson.error) {
        console.log("HERE ERROR");
        throw new Error(resultJson.error);
      }
      console.log(resultJson);
      return dispatch(videoSuccess(resultJson.data));
    } catch (e) {
      dispatch(videoFailure(e.message));
    }
  };
}
