import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "./TodoSilce";
const store = configureStore({
  reducer: {
    todos: ContactReducer,
  },
});

export default store;
