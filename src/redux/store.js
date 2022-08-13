import { createStore } from "redux";
import rootRecucers from "./reducers/rootReducers";

const store = createStore(rootRecucers);

export default store;
