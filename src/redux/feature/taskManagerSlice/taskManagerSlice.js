import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskManagerSlice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length < 1) {
        payload.id = 0;
      } else {
        payload.id = state.tasks.at(-1).id + 1;
      }
      payload.status = "pending";
      state.tasks.push(payload);
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const itemAction = state.tasks.find((item) => item.id === payload);
      if (itemAction.status === "pending") {
        itemAction.status = "running";
      } else {
        itemAction.status = "done";
      }
    },
  },
});
export const { addTask, removeTask, updateStatus } = taskManagerSlice.actions;

export default taskManagerSlice.reducer;
