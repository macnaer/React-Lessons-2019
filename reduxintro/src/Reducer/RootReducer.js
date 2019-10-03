import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import BuyReducer from "./TestReducer";

export default combineReducers({
  CounterReducer,
  BuyReducer
});
