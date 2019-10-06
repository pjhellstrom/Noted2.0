import axios from "axios";
import { setAlert } from "./alert";

import { GET_NOTES, DELETE_NOTE, NOTE_ERROR } from "./types";

// Get authenticated users notes
export const getNotes = category => async dispatch => {
  try {
    const res = await axios.get(`/api/notes/${category}`);

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

// Create or update note
export const createNote = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/notes/", formData, config);

    dispatch({
      type: GET_NOTES,
      payload: res.data
    });

    dispatch(setAlert(edit ? "Note updated" : "Note created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

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

    dispatch(setAlert("Note deleted", "success"));
  } catch (err) {
    dispatch({
      type: NOTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
