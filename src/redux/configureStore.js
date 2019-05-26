import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import  { composeWithDevTools } from "redux-devtools-extension";

const env = process.env.NODE_ENV;
const middlewares = [];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

let store;

if (env === "development") {
  store = () =>
    createStore(rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = () => createStore(rootReducer, applyMiddleware(...middlewares));
}


export default store();
