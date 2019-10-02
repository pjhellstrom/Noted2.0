import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_NOTES,
  NOTE_ERROR,
  ADD_NOTE,
  DELETE_NOTE
  // GET_NOTE
} from "./types";

// Get notes
export const getNotes = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/notes/${userId}`);

    dispatch({
      type: GET_NOTES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: NOTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete note
export const deleteNote = id => async dispatch => {
  try {
    await axios.delete(`/api/notes/${id}`);

    dispatch({
      type: DELETE_NOTE,
      payload: id
    });

    dispatch(setAlert("Note Removed", "success"));
  } catch (err) {
    dispatch({
      type: NOTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add note
export const addNote = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/notes", formData, config);

    dispatch({
      type: ADD_NOTE,
      payload: res.data
    });

    dispatch(setAlert("Note Created", "success"));
  } catch (err) {
    dispatch({
      type: NOTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// // Get note
// export const getNote = id => async dispatch => {
//   try {
//     const res = await axios.get(`/api/notes/${id}`);

//     dispatch({
//       type: GET_NOTE,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: NOTE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
