const initialState = { counter: 0, showMesg: false };

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, showMesg: false };
    case "DECREMENT":
      if (state.counter > 0) {
        return { counter: state.counter - 1, showMesg: false };
      } else {
        return { counter: 0, showMesg: true };
      }
    case "RESET":
      return { counter: 0, showMesg: false };
    default:
      return state;
  }
};

export default CounterReducer;
