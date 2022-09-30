// React and React Router Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Context
import * as filmsContextStore from "./context/FilmsContextStore";

// Styles
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

// Components
import App from "./App";

// Reporting
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const { FilmsContextProvider } = filmsContextStore;
root.render(
  <React.StrictMode>
    <Router>
      <FilmsContextProvider>
        <App />
      </FilmsContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
