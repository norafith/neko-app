import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/index";

import neko from "./reducers/nekoReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { neko },
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
