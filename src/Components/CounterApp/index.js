import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

const CounterApp = () => {
  const counterValue = useSelector((state) => state.CounterReducer.counter);
  const showMsg = useSelector((state) => state.CounterReducer.showMesg);
  const dispatch = useDispatch();
  return (
    <div className="outer-container">
      <h1 className="heading">Counter Application</h1>
      <p className="value">{counterValue}</p>
      <div className="counterButton">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
      {showMsg && <p className="msg">Counter value should not be negative</p>}
    </div>
  );
};

export default CounterApp;
