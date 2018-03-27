import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createHistory from "history/createHashHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./redux/reducers";
import thunk from "redux-thunk";

const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(middleware, thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
