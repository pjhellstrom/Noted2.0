import {
  GET_PROJECTS,
  CREATE_PROJECT_ERROR,
  GET_PROJECTS_ERROR
} from "../actions/types";

const initialState = {
  projects: [],
  loading: true,
  error: {}
};

// const initState = {
//   projects: [
//     { id: 1, title: "Hello World", content: "Hello World, it's me!" },
//     { id: 2, title: "Buongiorno Mondo", content: "Buongiorno Mondo, sono io!" },
//     { id: 3, title: "Bonjour Monde", content: "Bonjour Monde, c'est moi!" }
//   ]
// };

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // case "CREATE_PROJECT":
    //   return {
    //     ...state,
    //     project: payload,
    //     loading: false
    //   };
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false
      };
    case CREATE_PROJECT_ERROR:
    case GET_PROJECTS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
