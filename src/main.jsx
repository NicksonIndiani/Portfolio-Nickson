import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { VisibleMenuProvider } from "./contexts/VisibleMenu.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VisibleMenuProvider>
      <App />
    </VisibleMenuProvider>
  </React.StrictMode>
);
