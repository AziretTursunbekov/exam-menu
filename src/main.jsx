import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { AppRoutes } from "./router/routes.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
