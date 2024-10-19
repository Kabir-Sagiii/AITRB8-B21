import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import myReducer from "../reducers/myReducer";
const mystore = legacy_createStore(myReducer, applyMiddleware(logger));

export default mystore;
