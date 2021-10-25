import { configureStore, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ContactReducer from "./ContactSlice";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};

const store = configureStore({
  reducer: {
    todos: ContactReducer,
    middleware: [logger],
  },
});
export const persistor = persistStore(store);
export default { store, persistor };
