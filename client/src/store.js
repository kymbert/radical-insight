import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import logger from "redux-logger";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(logger)));
export const persistor = persistStore(store);
