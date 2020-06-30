import { persistor, store } from "./store";

import App from "./containers/App";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

require('dotenv').config()

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
       res.sendFile(path.resolve(__dirname,  "build", "index.html"));
  });
}


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
