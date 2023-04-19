import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import rootReducer from "./rootreducer";

const logger = createLogger({});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
