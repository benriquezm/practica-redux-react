import React from "react";
import { connect } from "react-redux";

const QuantityPokemon = (props) => {
  const {
    game_shop: { pokemon = 0 },
  } = props || {};
  return (
    <>
      <div className="card-title h3 text-center">Unidades: {pokemon}</div>
    </>
  );
};

/*** convert state to prop, get state from provider ***/
const mapstateToProps = (state) => {
  return {
    game_shop: state.game_shop,
  };
};

/*** function currificada ***/
export default connect(mapstateToProps)(QuantityPokemon);
