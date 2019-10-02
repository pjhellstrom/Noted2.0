import {
  GET_NOTES,
  NOTE_ERROR,
  ADD_NOTE,
  DELETE_NOTE
  // GET_NOTE
} from "../actions/types";

const initialState = {
  notes: [],
  note: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTES:
      return {
        ...state,
        notes: payload,
        loading: false
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [payload, ...state.notes],
        loading: false
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note._id !== payload),
        loading: false
      };
    case NOTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    // case GET_NOTE:
    //   return {
    //     ...state,
    //     note: payload,
    //     loading: false
    //   };
    default:
      return state;
  }
}
