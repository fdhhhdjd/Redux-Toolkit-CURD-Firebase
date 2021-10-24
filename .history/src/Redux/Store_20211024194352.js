import { configureStore } from "@reduxjs/toolkit";

import ContactReducer from "./ContactSlice";
const store = configureStore({
  reducer: {
    todos: ContactReducer,
  },
});

export default store;
