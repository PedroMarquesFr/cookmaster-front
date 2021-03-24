import Routes from "./routes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
