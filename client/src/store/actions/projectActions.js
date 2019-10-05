import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import {
  GET_PROJECTS,
  // CREATE_PROJECT,
  GET_PROJECTS_ERROR,
  CREATE_PROJECT_ERROR
} from "./types";

// Get all projects
export const getProjects = userId => async dispatch => {
  // Prevent flashing of past user's profile
  try {
    const res = await axios.get(`/api/notes/${userId}`);

    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_PROJECTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update profile
export const createProject = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/notes", formData, config);

    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CREATE_PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
