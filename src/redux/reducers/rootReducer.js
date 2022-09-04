import { combineReducers } from "redux";
import { getPhotosReducer } from "./getPhotosReducer";

const rootReducer = combineReducers({
  data: getPhotosReducer
});

export default rootReducer;
