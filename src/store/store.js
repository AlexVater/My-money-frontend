import { combineReducers, createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import dashboardReducer from "./reducers/dashboardReducer";
import tabsReducer from "./reducers/tabsReducer";
import billingCycleReducer from "./reducers/billingCycleReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  dashboard: dashboardReducer,
  tab: tabsReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(promise)(createStore)(reducers, devTools);

export default store;
