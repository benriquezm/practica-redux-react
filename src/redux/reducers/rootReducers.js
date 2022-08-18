import { combineReducers } from "redux";

import game_shop from "./gameShopReducer";
import searcher from "./searcherReducer";

const rootRecucers = combineReducers({
  game_shop,
  searcher,
});

export default rootRecucers;
