import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";

import updateReducers from "./reducer/update.reducer";
import videoReducers from "./reducer/video.reducer";
import thunk from "redux-thunk";
import App from "./App";
const rootReducer = combineReducers({
  videoReducers,
  updateReducers
});
const creatStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = creatStoreWithMiddleware(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
