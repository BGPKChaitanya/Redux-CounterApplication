import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";

const CounterApp = () => {
  const counterValue = useSelector((state) => state.CounterReducer.counter);
  console.log(counterValue);
  const dispatch = useDispatch();
  return (
    <div className="outer-container">
      <h1 className="heading">Counter Application</h1>
      <p className="value">{counterValue}</p>
      <div className="counterButton">
        <button onClick={() => dispatch({ type: "INCREAMENT" })}>+</button>
        <button>Reset</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default CounterApp;
