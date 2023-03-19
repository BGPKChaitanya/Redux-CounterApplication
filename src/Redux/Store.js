import { combineReducers, createStore } from "redux";
import CounterReducer from "./reducer/CounterReducer";

const reducers = combineReducers({ CounterReducer });

const store = createStore(reducers);

const configureStore = () => {
  return store;
};

export default configureStore;
