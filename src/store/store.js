import { combineReducers, createStore } from "redux";
import dashboardReducer from "./reducers/dashboardReducer";

const reducers = combineReducers({
  dashboard: dashboardReducer,
});

export default function store() {
  return createStore(reducers);
}
