import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";

import myReducer from "../reducers/myReducer";
import cartReducer from "../reducers/CartReducer";

var combinedReducers = combineReducers({ myReducer, cartReducer });

const mystore = legacy_createStore(combinedReducers, applyMiddleware(logger));

export default mystore;
