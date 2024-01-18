import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/reactrepo">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
