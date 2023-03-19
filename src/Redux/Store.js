import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import CounterReducer from "./reducer/CounterReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({ CounterReducer });

const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;
