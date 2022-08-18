import {
  FECTH_POKEMON_FAILURE,
  FECTH_POKEMON_REQUEST,
  FECTH_POKEMON_SUCCESS,
} from "../actions/searcherAction";

const initialState = {
  loading: false,
  pokemon: [],
  error: "",
};

const searcher = (state = initialState, action) => {
  switch (action.type) {
    case FECTH_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FECTH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
        error: "",
      };
    case FECTH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        pokemon: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searcher;
