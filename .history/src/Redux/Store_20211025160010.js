import { configureStore, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ContactReducer from "./ContactSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
  todos: ContactReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const persistor = persistStore(store);
export default { store, persistor };
