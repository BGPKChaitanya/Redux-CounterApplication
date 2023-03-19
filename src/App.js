import "./App.css";
import CounterApp from "./Components/CounterApp";
import { Provider } from "react-redux";
import configureStore from "./Redux/Store";

function App() {
  const { store } = configureStore();
  return (
    <Provider store={store}>
      <div className="App">
        <CounterApp />
      </div>
    </Provider>
  );
}

export default App;
