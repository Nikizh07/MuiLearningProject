import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <CssBaseline />
      <App />
  </StrictMode>
);
