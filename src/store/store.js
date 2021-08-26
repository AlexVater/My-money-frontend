import { combineReducers, createStore, applyMiddleware } from "redux";
import dashboardReducer from "./reducers/dashboardReducer";
import promise from "redux-promise";

const reducers = combineReducers({
  dashboard: dashboardReducer,
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(promise)(createStore)(reducers, devTools);

export default store;
