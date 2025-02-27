import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import "./style.scss";
import "./sd-style.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Analytics />
    </Provider>
  </React.StrictMode>
);
