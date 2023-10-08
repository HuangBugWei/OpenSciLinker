import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UseBarProvider } from "./hooks/hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <UseBarProvider>
      <App />
    </UseBarProvider>
  </BrowserRouter>
);
