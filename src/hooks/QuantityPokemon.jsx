import React from "react";
import { useSelector } from "react-redux";

const QuantityPokemon = () => {
  const game_shop = useSelector((state) => state.game_shop);
  return (
    <>
      <div className="card-title h3 text-center">
        Unidades: {game_shop.pokemon}
      </div>
    </>
  );
};

/*** function currificada ***/
export default QuantityPokemon;
