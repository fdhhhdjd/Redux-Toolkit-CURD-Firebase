import { configureStore } from "@reduxjs/toolkit";

import ContactReducer from "./ContactSlice";
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const store = configureStore({
  reducer: {
    todos: ContactReducer,
  },
});

export default store;
