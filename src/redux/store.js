import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware)
  // window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);
export default store;
