import { configureStore, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
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
