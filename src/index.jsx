import React from "react";
import ReactDOM from "react-dom";
import App from "./app/index";
import { ExampleProvider } from "./app/Context/example-context";
ReactDOM.render(
  <React.StrictMode>
    <ExampleProvider>
      <App />
    </ExampleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
