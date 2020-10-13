import { PokemonType, PokemonDispatchTypes, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "../actions/PokemonActionTypes";

interface DefaultStateType {
    loading: boolean,
    pokemon?: PokemonType
}

const defaultState: DefaultStateType = {
    loading: false,
}
const pokemonReducer = (state: DefaultStateType = defaultState, action: PokemonDispatchTypes): DefaultStateType => {
    switch (action.type) {
        case POKEMON_FAIL:
            console.log("POKEMON FAIL")
            return {
                ...state.pokemon,
                loading: false
            }
        case POKEMON_LOADING:
            console.log("POKEMON LOADING")
            return {
                ...state.pokemon,
                loading: true
            }
        case POKEMON_SUCCESS:
            console.log("POKEMON SUCCESS")
            return {
                loading: false,
                pokemon: action.payload
            }

        default:
            return state;
    }

}
export default pokemonReducer;