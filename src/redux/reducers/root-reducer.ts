import { combineReducers } from "redux";
import { sidebarToggleSlice } from "../slices";

const rootReducer = (newReducers = {}) =>
  combineReducers({
    sidebarToggleReducer: sidebarToggleSlice,
    ...newReducers,
  });

export default rootReducer;
