import { applyMiddleware, createStore } from "redux";
import rootRecucers from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//  TODO use composeWithDevTools only for instance of deveop
const store = createStore(
  rootRecucers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
