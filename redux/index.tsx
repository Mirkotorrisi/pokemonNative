import { combineReducers } from "redux";
import pokemonReducer from "./reducers/pokemonReducer";
import pokemonCRUDReducer from "./reducers/pokemonCRUDReducer";
import teamListReducer from "./reducers/teamListReducer";
export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonCRUD: pokemonCRUDReducer,
  teamList: teamListReducer,
});
