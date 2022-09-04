import * as types from "../actions/action.types";

const initialState = {
  query: "",
  loading: false,
  photos: [],
  error: null
};

export function getPhotosReducer(state = initialState, action) {
  switch (action.type) {
    case types.QUERY:
      return {
        ...state,
        query: action.query
      };
    case types.REQUEST_DATA:
      return {
        ...state,
        loading: true
      };
    case types.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.payload
      };
    case types.REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
}
