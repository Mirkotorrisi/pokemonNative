import { Dispatch } from "redux";
import {
  PokemonDispatchTypes,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  POKEMON_FAIL,
  POKEMON_SAVED,
  POKEMON_DELETED,
  TEAM_LIST_SUCCESS,
  PokemonType,
} from "./PokemonActionTypes";
import axios from "axios";

export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  pokemon = pokemon.toLowerCase().trim();
  if (pokemon.length > 0)
    try {
      dispatch({
        type: POKEMON_LOADING,
      });
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      dispatch({
        type: POKEMON_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      alert("Did not found this pokemon :c");

      dispatch({
        type: POKEMON_FAIL,
      });
    }
  else alert("Fill in the search input!!!!");
};

export const GetTeamList = () => async (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  try {
    dispatch({
      type: POKEMON_LOADING,
    });
    const res = await axios.get(
      `http://pokemon-team-server.herokuapp.com/posts`
    );
    dispatch({
      type: TEAM_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    alert("Did not found teams :c");
    dispatch({
      type: POKEMON_FAIL,
    });
  }
};

export const SavePokemon = (
  newPokemon: PokemonType,
  pokemonSaved: PokemonType[]
) => (dispatch: Dispatch<PokemonDispatchTypes>) => {
  if (
    pokemonSaved.filter(
      (pokemon) =>
        pokemon.sprites.front_default == newPokemon.sprites.front_default
    ).length == 0
  )
    dispatch({
      type: POKEMON_SAVED,
      payload: [...pokemonSaved, newPokemon],
    });
};
export const DeletePokemon = (
  pokemonToDel: PokemonType,
  pokemonSaved: PokemonType[]
) => (dispatch: Dispatch<PokemonDispatchTypes>) => {
  dispatch({
    type: POKEMON_DELETED,
    payload: [...pokemonSaved.filter((pokemon) => pokemon != pokemonToDel)],
  });
};
