// aqui tu cria o state
// importe o método applyMiddleware
import { createStore, applyMiddleware } from "redux";
// importe o redux-thunk
import thunk from "redux-thunk";
import rootReducer from "./ducks/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootStateOrAny } from "react-redux";

// aplique o middleware
const store:RootStateOrAny = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;