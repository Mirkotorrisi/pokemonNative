import { combineReducers } from 'redux'
import pokemonReducer from './reducers/pokemonReducer'
import pokemonCRUDReducer from './reducers/pokemonCRUDReducer'
export const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemonCRUD: pokemonCRUDReducer
})