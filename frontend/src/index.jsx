import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FormDataProvider } from "./components/FormDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormDataProvider>
      <App />
    </FormDataProvider>
  </React.StrictMode>
);
