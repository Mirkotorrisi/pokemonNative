import {
  PokemonType,
  PokemonDispatchTypes,
  POKEMON_SAVED,
  POKEMON_DELETED,
} from "../actions/PokemonActionTypes";

interface DefaultStateType {
  pokemonSaved: PokemonType[];
}

const defaultState: DefaultStateType = {
  pokemonSaved: [],
};
const pokemonCRUDReducer = (
  state: DefaultStateType = defaultState,
  action: PokemonDispatchTypes
): DefaultStateType => {
  switch (action.type) {
    case POKEMON_SAVED:
      console.log("pokemon saved");
      return {
        pokemonSaved: action.payload,
      };
    case POKEMON_DELETED:
      console.log("pokemon deleted");
      return {
        pokemonSaved: action.payload,
      };
    default:
      return state;
  }
};
export default pokemonCRUDReducer;
