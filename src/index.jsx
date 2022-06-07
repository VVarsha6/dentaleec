import React from "react";
import ReactDOM from "react-dom";
import App from "./app/index";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import { ExampleProvider } from "./app/Context/example-context";

ReactDOM.render(
  <ExampleProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ExampleProvider>,
  document.getElementById("root")
);
