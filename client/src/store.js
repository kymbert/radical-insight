import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import reducers from "./reducers"; // the value from combineReducers

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(pReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
