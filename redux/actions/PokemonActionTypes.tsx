export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_SAVED = "POKEMON_SAVED";
export const POKEMON_UPDATED = "POKEMON_UPDATED";
export const POKEMON_DELETED = "POKEMON_DELETED";

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
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
  | PokemonDeleted;
