import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dashboard: () => ({ summary: { credito: 100, debito: 500 } }),
});

export default rootReducer;
