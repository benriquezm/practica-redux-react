import Axios from "axios";

export const FECTH_POKEMON_REQUEST = "FECTH_POKEMON_REQUEST";
export const FECTH_POKEMON_SUCCESS = "FECTH_POKEMON_SUCCESS";
export const FECTH_POKEMON_FAILURE = "FECTH_POKEMON_FAILURE";

/*** actions ***/
export const fetchPokemonRequest = () => {
  return {
    type: FECTH_POKEMON_REQUEST,
  };
};

export const fetchPokemonSuccess = (pokemon) => {
  return {
    type: FECTH_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

export const fetchPokemonFailure = (error) => {
  return {
    type: FECTH_POKEMON_FAILURE,
    payload: error,
  };
};

const fetchPokemon = (value) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((response) => {
        dispatch(fetchPokemonSuccess([response.data]));
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure("No se encontró el pokemon."));
      });
  };
};

export default fetchPokemon;
