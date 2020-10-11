import { Dispatch } from "redux";
import {
  PokemonDispatchTypes,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  POKEMON_FAIL,
  POKEMON_SAVED,
  POKEMON_DELETED,
  POKEMON_UPDATED,
  PokemonType,
} from "./PokemonActionTypes";
import axios from "axios";

export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  pokemon = pokemon.toLowerCase().trim();

  try {
    dispatch({
      type: POKEMON_LOADING,
    });
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch({
      type: POKEMON_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POKEMON_FAIL,
    });
  }
};
export const BoostPokemon = (pokemon: PokemonType) => (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  for (const iterator of pokemon.stats) {
    iterator.base_stat = iterator.base_stat + 1;
  }
  dispatch({
    type: POKEMON_SUCCESS,
    payload: pokemon,
  });
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
export const UpdatePokemon = (
  pokemonToChange: PokemonType,
  newPokemon: PokemonType,
  pokemonSaved: PokemonType[]
) => (dispatch: Dispatch<PokemonDispatchTypes>) => {
  if (pokemonSaved.filter((pokemon) => pokemon == newPokemon).length == 0) {
    let newArr = [
      ...pokemonSaved.filter((pokemon) => pokemon != pokemonToChange),
    ];
    dispatch({
      type: POKEMON_UPDATED,
      payload: [...newArr, newPokemon],
    });
  }
};
