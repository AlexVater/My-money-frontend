import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";

import Store from "./store/store";
import { Provider } from "react-redux";

const store = Store;

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
