import React from "react";
import { connect } from "react-redux";

import {
  buy_pokemon_action,
  return_pokemon_action,
} from "../redux/actions/gameShopAction";

const BuyPokemon = (props) => {
  const { buy_pokemon_action, return_pokemon_action } = props || {};
  return (
    <>
      <div>
        <button
          className="btn btn-dark btn-sm mb-2"
          onClick={() => {
            buy_pokemon_action(1);
          }}
        >
          Comprar pokemon
        </button>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => return_pokemon_action(1)}
        >
          Devolver pokemon
        </button>
      </div>
    </>
  );
};

/*** execute dispatchs ***/
const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokemon_action,
};

/*** you can have states, in this case send null ***/
export default connect(null, mapDispatchToProps)(BuyPokemon);
