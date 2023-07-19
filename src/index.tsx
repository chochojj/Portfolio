import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Reset } from "styled-reset";
import GlobalStyle from "./style/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
