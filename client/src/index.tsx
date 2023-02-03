import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container!, undefined);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
