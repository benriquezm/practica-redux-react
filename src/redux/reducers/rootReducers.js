import { combineReducers } from "redux";

import game_shop from "./gameShopReducer";

const rootRecucers = combineReducers({
  game_shop,
});

export default rootRecucers;
