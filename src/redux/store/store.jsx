import { configureStore } from "@reduxjs/toolkit";
import taskManagerSlice from "../feature/taskManagerSlice/taskManagerSlice";

export const store = configureStore({
  reducer: {
    taskManager: taskManagerSlice,
  },
});
