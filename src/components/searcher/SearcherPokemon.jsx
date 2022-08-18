import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/searcherAction";

const SearcherPokemon = () => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState("mewtwo");

  return (
    <div className="form-group">
      <label htmlFor="buscar_pokemon" className="text-white">
        Buscar pokemon
      </label>
      <input
        type="text"
        className="form-control"
        id="buscar_pokemon"
        value={pokemon}
        onChange={(event) => {
          setPokemon(event.target.value);
        }}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          dispatch(fetchPokemon(pokemon));
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearcherPokemon;
