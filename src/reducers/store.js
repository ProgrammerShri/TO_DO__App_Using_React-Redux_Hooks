import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import itemReducer from "./index";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig,itemReducer);
export let store = createStore(persistedReducer, applyMiddleware(logger));
export let persistor = persistStore(store);
