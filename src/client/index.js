import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Wrapper to create state in our application
import { Provider } from "react-redux";

import store from "./redux/store";

ReactDOM.render(
  // adding the state to our App component
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
