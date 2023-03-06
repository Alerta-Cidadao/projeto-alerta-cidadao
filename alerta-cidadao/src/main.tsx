import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Index } from "./Styles";
import { GlobalStyles } from "./Styles/globalStyles";
import { Reset } from "./Styles/reset";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyles />
      <Reset />
      <Index />
    </BrowserRouter>
  </React.StrictMode>
);
