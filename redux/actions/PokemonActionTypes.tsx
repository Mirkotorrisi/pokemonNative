export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const TEAM_LIST_SUCCESS = "TEAM_LIST_SUCCESS";
export const POKEMON_SAVED = "POKEMON_SAVED";
export const POKEMON_UPDATED = "POKEMON_UPDATED";
export const POKEMON_DELETED = "POKEMON_DELETED";

export type TeamType = {
  user_id: string;
  date_posted: string;
  pokemons: PokemonType[];
  wins: number;
  loses: number;
};
export type PokemonType = {
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonPokeType[];
};

export type PokemonSprites = {
  front_default: string;
};
export type PokemonPokeType = {
  type: {
    name: string;
  };
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};
export interface PokemonLoading {
  type: typeof POKEMON_LOADING;
}
export interface PokemonFail {
  type: typeof POKEMON_FAIL;
}
export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
  payload: PokemonType;
}

export interface TeamListSuccess {
  type: typeof TEAM_LIST_SUCCESS;
  payload: TeamType[];
}
export interface PokemonSaved {
  type: typeof POKEMON_SAVED;
  payload: PokemonType[];
}
export interface PokemonDeleted {
  type: typeof POKEMON_DELETED;
  payload: PokemonType[];
}
export interface PokemonUpdated {
  type: typeof POKEMON_UPDATED;
  payload: PokemonType[];
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess
  | PokemonSaved
  | PokemonUpdated
  | PokemonDeleted
  | TeamListSuccess;
