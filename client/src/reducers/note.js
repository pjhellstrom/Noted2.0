import { GET_NOTES, DELETE_NOTE, NOTE_ERROR } from "../actions/types";

const initialState = {
  note: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTES:
      return {
        ...state,
        note: payload,
        loading: false
      };
    case DELETE_NOTE:
      return {
        ...state,
        note: state.note.filter(note => note._id !== payload),
        loading: false
      };
    case NOTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
