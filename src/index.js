import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Store from "./store/store";
import { Provider } from "react-redux";

const store = Store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
