import { combineReducers } from "@reduxjs/toolkit";
import { taskListReducer } from "../../tasks/taskReducer";

export const rootReducer = combineReducers({
  taskList: taskListReducer,
});
