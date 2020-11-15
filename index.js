import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./src/store/index";
import App from "./src/App";

import "antd/dist/antd.css";
import "./src/assets/css/index.css";

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
